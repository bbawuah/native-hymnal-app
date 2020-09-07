import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Button,
    ActivityIndicator,
    Modal,
    StyleProp,
    TextStyle,
    TouchableOpacity,
    Platform,
} from 'react-native'
import { HomeNavProps } from '../HomePage/HomeParamList'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Song } from '../../models/Song'
import { Picker } from '@react-native-community/picker'
import { PickerButton } from '../Core/components/PickerButton/PickerButton'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { IconButton } from '../Core/components/IconButton/IconButton'
import State from '../../store/store'
import { observer } from 'mobx-react'
import data from '../../data/hymns.json'
import Sound from 'react-native-sound'
import { AudioPlayButton } from '../Core/components/AudioMenu/AudioPlayButton/AudioPlayButton'
import { AudioStopButton } from '../Core/components/AudioMenu/AudioStopButton/AudioStopButton'
import { AudioPauseButton } from '../Core/components/AudioMenu/AudioPauseButton/AudioPauseButton'

export const SongPage: React.FC<HomeNavProps<'Song'>> = observer(({ route, navigation }) => {
    // Need to fetch song here in useEffect
    const state = useContext(State)
    const [song, setSong] = useState<Song>()
    const [loading, setLoading] = useState<boolean>(false)
    const [language, setLanguage] = useState<React.ReactText>('english')
    const [showPicker, setShowPicker] = useState<boolean>(false)
    const [fontSize, setFontSize] = useState<number>()
    const [soundError, setSoundError] = useState<boolean>(false)

    const sound = new Sound(
        getAudioReferences(),
        Platform.OS === 'ios' ? encodeURIComponent(Sound.MAIN_BUNDLE) : Sound.MAIN_BUNDLE,
        error => {
            if (error) {
                console.log(error)
                setSoundError(true)
            }
        }
    )

    React.useLayoutEffect(() => {
        navigation?.setOptions({
            headerRight: () => (
                <IconButton
                    icon={state.favoriteList.includes(route.params.number) ? 'heart' : 'heart-o'}
                    number={song?.number}
                    style={styles.headerButton}
                />
            ),
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, song])

    useEffect(() => {
        setLoading(true)
        setFontSize(state.getFontSize)
        ;(async () => {
            try {
                const songs: Song[] = data
                const song = songs.filter(hymn => hymn.number === route.params.number)
                setLoading(false)
                setSong(song[0])
                setLanguage(!song[0]?.songTWI ? 'twi' : 'english')
            } catch (e) {
                console.log(e)
            }
            return
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [route.params.number, state.getFontSize])

    useEffect(() => {
        return () => {
            if (sound.isPlaying()) {
                sound.stop()
            }
        }
    }, [sound])

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>{`${route.params.number} - ${route.params.title
                        .replace(/q|Q/g, 'ε')
                        .replace(/x|X/g, 'ɔ')
                        .replace(/\n/g, ' - ')}`}</Text>
                    <View style={styles.menu}>
                        <View>
                            {!soundError && (
                                <View style={styles.audioMenu}>
                                    <TouchableOpacity onPress={() => sound.play()} disabled={!sound ? true : false}>
                                        <AudioPlayButton />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => sound.pause()} disabled={!sound ? true : false}>
                                        <AudioPauseButton />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => sound.stop()} disabled={!sound ? true : false}>
                                        <AudioStopButton />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                        <TouchableWithoutFeedback onPress={() => setShowPicker(true)} disabled={!song ? true : false}>
                            <PickerButton style={getPickerStyles()} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                {!song && loading ? (
                    <ActivityIndicator />
                ) : (
                    <Text style={getFontSize()}>{getSongLanguage(language)}</Text>
                )}
                {!song?.songTWI && language === 'english' && !loading && (
                    <Text>This song is not available in English..</Text>
                )}
            </ScrollView>
            {showPicker && (
                <Modal visible={showPicker} animationType="slide" transparent={false} presentationStyle="pageSheet">
                    <View>
                        <View style={styles.pickerMenuContainer}>
                            <Button title={'Cancel'} onPress={() => setShowPicker(false)} />
                            <Button
                                title={'Done'}
                                onPress={() => {
                                    setShowPicker(false)
                                }}
                            />
                        </View>
                        <Picker
                            selectedValue={language}
                            style={styles.picker}
                            onValueChange={value => setLanguage(value)}
                            mode="dropdown"
                        >
                            <Picker.Item label="English" value="english" />
                            <Picker.Item label="Twi" value="twi" />
                        </Picker>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    )

    function getAudioReferences() {
        return Platform.OS === 'ios' ? `audio/hymn${route.params.number}.mp3` : `hymn${route.params.number}.mp3`
    }
    function getSongLanguage(language: React.ReactText) {
        if (language === 'english') {
            return song?.songTWI?.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ')
        }
        return song?.songEN?.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ')
    }

    function getPickerStyles() {
        const color = showPicker ? '#A9A9A9' : '#555'
        return [styles.filter, { color }]
    }

    function getFontSize(): StyleProp<TextStyle> {
        const style = { fontSize: fontSize }
        return [styles.song, style]
    }
})

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
    },
    container: {
        marginTop: 10,
        marginBottom: 25,
    },
    menu: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    audioMenu: {
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
    },
    filter: {
        alignSelf: 'flex-end',
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
    },
    song: {
        marginTop: 20,
    },
    picker: {
        width: '100%',
    },
    pickerMenuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    headerButton: {
        marginRight: 10,
    },
})

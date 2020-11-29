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
    PlatformColor,
    useColorScheme,
} from 'react-native'
import { HomeNavProps } from '../HomePage/HomeParamList'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Song } from '../../models/Song'
import { Picker } from '@react-native-community/picker'
import { PickerButton } from '../Core/components/PickerButton/PickerButton'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { FavoriteButton } from '../Core/components/IconButton/FavoriteButton'
import State from '../../store/store'
import { observer } from 'mobx-react'
import data from '../../data/hymns.json'
import Sound from 'react-native-sound'
import { AudioButton } from '../Core/components/AudioMenu/AudioButton'
import { FavoritedButton } from '../Core/components/IconButton/FavoritedButton'
import { colors } from '../utils/colors'

export const SongPage: React.FC<HomeNavProps<'Song'>> = observer(({ route, navigation }) => {
    // Need to fetch song here in useEffect
    const state = useContext(State)
    const [song, setSong] = useState<Song>()
    const [loading, setLoading] = useState<boolean>(false)
    const [language, setLanguage] = useState<React.ReactText>('english')
    const [showPicker, setShowPicker] = useState<boolean>(false)
    const [fontSize, setFontSize] = useState<number>()
    const [soundError, setSoundError] = useState<boolean>(false)
    const [soundLoading, setSoundLoading] = useState<boolean>(false)
    const [playing, setIsPlaying] = useState<boolean>(false)
    const isDarkMode = useColorScheme() === 'dark'

    React.useLayoutEffect(() => {
        navigation?.setOptions({
            headerRight: () => {
                if (state.favoriteList.includes(route.params.number)) {
                    return <FavoritedButton number={song?.number} style={styles.headerButton} />
                }
                return <FavoriteButton number={song?.number} style={styles.headerButton} />
            },
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, song, state.favoriteList])

    useEffect(() => {
        setLoading(true)
        setFontSize(state.getFontSize)
        const canSetSong = true
        setSoundLoading(true)

        if (canSetSong) {
            if (state?.getSong) {
                state.getSong.stop()
            }
            state.setSong(
                new Sound(
                    `https://evening-hollows-34967.herokuapp.com/songs/hymn${route.params.number}`,
                    undefined,
                    error => {
                        if (error) {
                            console.log(error)
                            setSoundLoading(false)
                            setSoundError(true)
                            return null
                        }
                        setSoundLoading(false)
                    }
                )
            )
        }

        if (canSetSong) {
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
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [route.params.number, state.getFontSize])

    useEffect(() => {
        return () => {
            if (state.getSong?.isPlaying()) {
                state.getSong.stop()
            }
        }
    }, [state.getSong])

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <View>
                    <Text style={[styles.title, getTextColor()]}>{`${
                        route.params.number
                    } - ${route.params.title.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ').replace(/\n/g, ' - ')}`}</Text>
                    <View style={styles.menu}>
                        <View>
                            {soundError && <Text style={styles.errorMessage}>No sound available</Text>}
                            {soundLoading && <Text style={styles.errorMessage}>Loading sound..</Text>}
                            {!soundError && !soundLoading && (
                                <View style={styles.audioMenu}>
                                    {!playing ? (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setIsPlaying(true)
                                                return state.getSong?.play()
                                            }}
                                            disabled={!state.getSong ? true : false}
                                        >
                                            <AudioButton iconName="play" />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setIsPlaying(false)
                                                return state.getSong?.pause()
                                            }}
                                            disabled={!state.getSong ? true : false}
                                        >
                                            <AudioButton iconName="pause" />
                                        </TouchableOpacity>
                                    )}

                                    <TouchableOpacity
                                        onPress={() => {
                                            setIsPlaying(false)
                                            return state.getSong?.stop()
                                        }}
                                        disabled={!state.getSong ? true : false}
                                    >
                                        <AudioButton iconName="stop" />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                        <TouchableWithoutFeedback onPress={() => setShowPicker(true)} disabled={!song ? true : false}>
                            <PickerButton style={getPickerStyles()} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <ScrollView style={styles.songContainer} showsVerticalScrollIndicator={false}>
                    {!song && loading ? (
                        <ActivityIndicator />
                    ) : (
                        <Text style={getFontSize()}>{getSongLanguage(language)}</Text>
                    )}
                    {!song?.songTWI && language === 'english' && !loading && (
                        <Text>This song is not available in English..</Text>
                    )}
                </ScrollView>
            </View>
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
        const color = isDarkMode ? { color: colors.tint.white } : { color: colors.tint.black }
        return [styles.song, style, color]
    }

    function getTextColor() {
        const color = isDarkMode ? colors.tint.white : colors.tint.black
        return { color }
    }
})

// styles
const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: PlatformColor('systemBackground'),
        paddingHorizontal: 20,
    },
    container: {
        marginTop: 10,
        marginBottom: 155,
    },
    songContainer: {
        marginBottom: 10,
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
        width: 50,
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
    errorMessage: {
        color: colors.tint.grey,
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

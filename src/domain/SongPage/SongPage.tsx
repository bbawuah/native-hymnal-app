import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, SafeAreaView, View, Text, ScrollView, Button, ActivityIndicator, Modal } from 'react-native'
import { HomeNavProps } from '../HomePage/HomeParamList'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Song } from '../../models/Song'
import { Picker } from '@react-native-community/picker'
import { PickerButton } from '../Core/PickerButton/PickerButton'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { IconButton } from '../Core/components/IconButton/IconButton'
import State from '../../store/store'

export const SongPage: React.FC<HomeNavProps<'Song'>> = ({ route, navigation }) => {
    // Need to fetch song here in useEffect
    const [song, setSong] = useState<Song>()
    const [language, setLanguage] = useState<React.ReactText>('english')
    const [showPicker, setShowPicker] = useState<boolean>(false)
    const state = useContext(State)

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
        ;(async () => {
            try {
                const songs = await fetch('http://localhost:8000/song', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        number: route.params.number,
                    }),
                })
                const response = await songs.json()
                setSong(response)
            } catch (e) {
                console.log(e)
            }
            return
        })()
    }, [route.params.number])

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>{route.params.title}</Text>
                    <TouchableWithoutFeedback onPress={() => setShowPicker(true)} disabled={!song ? true : false}>
                        <PickerButton style={getPickerStyles()} />
                    </TouchableWithoutFeedback>
                </View>
                {!song ? <ActivityIndicator /> : <Text style={styles.song}>{getSongLanguage(language)}</Text>}
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

    function getSongLanguage(language: React.ReactText) {
        if (language === 'english') {
            return song?.english?.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ')
        }
        return song?.twi?.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ')
    }

    function getPickerStyles() {
        const color = showPicker ? '#A9A9A9' : '#555'
        return [styles.filter, { color }]
    }
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
    },
    container: {
        marginTop: 10,
        marginBottom: 35,
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
        fontSize: 18,
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

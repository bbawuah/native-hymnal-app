import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { HomeNavProps } from '../HomePage/HomeParamList'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Song } from '../../models/Song'

export const SongPage: React.FC<HomeNavProps<'Song'>> = ({ route }) => {
    // Need to fetch song here in useEffect
    const [song, setSong] = useState<Song>()

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
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{route.params.title}</Text>
                    <Text style={styles.filter}>Options menu</Text>
                </View>
                <Text style={styles.song}>{song?.english?.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ')}</Text>
            </View>
        </SafeAreaView>
    )
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
})

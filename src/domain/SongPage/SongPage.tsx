import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { HomeNavProps } from '../HomePage/HomeParamList'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Song } from '../../models/Song'
import { getSong } from '../Core/components/IconButton/IconButton'

export const SongPage: React.FC<HomeNavProps<'Song'>> = ({ route }) => {
    // Need to fetch song here in useEffect
    const [song, setSong] = useState<Song>()

    useEffect(() => {
        setSong(getSong(route.params.number))
    }, [route.params.number])

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{route.params.title}</Text>
                    <Text style={styles.filter}>Hier komt filter</Text>
                </View>
                <Text style={styles.song}>{song?.songEN.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ')}</Text>
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

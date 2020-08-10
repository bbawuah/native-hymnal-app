import React from 'react'
import { StyleSheet, SafeAreaView, FlatList, View, Platform, StatusBar } from 'react-native'
import { Song } from '../Core/components/Song/Song'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'

export const HomeScreen: React.FC = () => {
    const songs = [
        { title: 'Song #1', number: 23 },
        { title: 'Song #2', number: 23 },
        { title: 'Song #3', number: 23 },
        { title: 'Song #4', number: 23 },
        { title: 'Song #5', number: 23 },
        { title: 'Song #6', number: 23 },
        { title: 'Song #7', number: 23 },
        { title: 'Song #8', number: 23 },
        { title: 'Song #9', number: 23 },
        { title: 'Song #10', number: 23 },
        { title: 'Song #11', number: 23 },
        { title: 'Song #12', number: 23 },
        { title: 'Song #13', number: 23 },
        { title: 'Song #14', number: 23 },
    ]
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <FlatList
                    keyExtractor={song => song.title}
                    data={songs}
                    renderItem={({ item }) => {
                        return <Song title={item.title} number={item.number} />
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: '#f8f8f8',
    },
    container: {
        marginTop: 10,
    },
})

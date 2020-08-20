import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
import { Container } from '../Core/components/Container/Container'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { FavouriteNavProps } from './FavouritesParamList'
import { Song } from '../../models/Song'

export const FavouritesPage: React.FC<FavouriteNavProps<'Favourites'>> = ({ navigation }) => {
    const [songs, setSongs] = useState<Song[]>()

    useEffect(() => {
        getSongs()
    })
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <FlatList
                    keyExtractor={song => song.title}
                    data={songs}
                    renderItem={({ item }) => {
                        return (
                            <Container
                                title={item.title}
                                number={item.number}
                                icon="heart"
                                onPress={() =>
                                    navigation?.navigate('Song', {
                                        title: item.title,
                                    })
                                }
                            />
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )

    async function getSongs() {
        try {
            const songs = await fetch('http://localhost:8000/songs?favorite=true')
            const response = await songs.json()
            setSongs(response)
        } catch (e) {
            console.log(e)
        }
    }
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

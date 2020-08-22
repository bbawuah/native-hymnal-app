import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
import { Container } from '../Core/components/Container/Container'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { FavouriteNavProps } from './FavouritesParamList'
import { Song } from '../../models/Song'
import State from '../../store/store'
import { observer } from 'mobx-react'
import AsyncStorage from '@react-native-community/async-storage'

export const FavouritesPage: React.FC<FavouriteNavProps<'Favourites'>> = observer(({ navigation }) => {
    const [songs, setSongs] = useState<any>()
    const [refs, setRefs] = useState<string[] | any>()
    const state = useContext(State)
    useEffect(() => {
        // State keeps rendering
        getSongs()
    }, [])

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
                                        number: item.number,
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
        let favorites
        try {
            const refs = await AsyncStorage.getItem('number')

            if (refs) favorites = Array.from(JSON.parse(refs))
            console.log(favorites)

            const songs = await fetch('http://localhost:8000/favorites', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    list: favorites,
                }),
            })
            const response = await songs.json()

            setSongs(response)
        } catch (error) {
            console.log(error)
            return error
        }
    }
})

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

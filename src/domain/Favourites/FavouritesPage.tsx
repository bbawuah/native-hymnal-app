import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native'
import { Container } from '../Core/components/Container/Container'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { FavouriteNavProps } from './FavouritesParamList'
import State from '../../store/store'
import { observer } from 'mobx-react'
import { Song } from '../../models/Song'

export const FavouritesPage: React.FC<FavouriteNavProps<'Favourites'>> = observer(({ navigation }) => {
    const state = useContext(State)
    const [songs, setSongs] = useState<Song[]>()

    useEffect(() => {
        // State keeps rendering

        getSongs(state.favoriteList)
    }, [state.favoriteList])

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                {songs?.length === 0 ? (
                    <View style={styles.emptyState}>
                        <Text>Your favorites list is empty</Text>
                    </View>
                ) : (
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
                )}
            </View>
        </SafeAreaView>
    )

    async function getSongs(refs: string[]) {
        try {
            const songs = await fetch('https://evening-hollows-34967.herokuapp.com/favorites', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    list: refs,
                }),
            })
            const response: Song[] = await songs.json()

            setSongs(response)
        } catch (error) {
            console.log(error)
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
    emptyState: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

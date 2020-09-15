import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View, Text, RefreshControl, ActivityIndicator } from 'react-native'
import { Container } from '../Core/components/Container/Container'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { FavouriteNavProps } from './FavouritesParamList'
import State from '../../store/store'
import { observer } from 'mobx-react'
import { Song } from '../../models/Song'
import data from '../../data/hymns.json'

export const FavouritesPage: React.FC<FavouriteNavProps<'Favourites'>> = observer(({ navigation }) => {
    const state = useContext(State)
    const [songs, setSongs] = useState<Song[] | undefined>([])
    const [refreshing, setRefreshing] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            getSongs(state.favoriteList)
        }, 200)
    }, [state.favoriteList])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setSongs([])
        setTimeout(() => {
            getSongs(state.favoriteList)
        }, 200)
        setRefreshing(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.favoriteList])

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                {songs?.length === 0 && <ActivityIndicator />}
                {!songs ? (
                    <View style={styles.emptyState}>
                        <Text>Your favorites list is empty</Text>
                    </View>
                ) : (
                    <FlatList
                        keyExtractor={song => song.title}
                        data={songs}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        renderItem={({ item }) => {
                            return (
                                <Container
                                    title={item.title.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ').replace(/\n/g, ' - ')}
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

    function getSongs(refs: string[]) {
        setSongs(undefined)
        try {
            const songs: Song[] = data
            let matches: Song[] | undefined = songs.filter(hymn => refs.includes(hymn.number))
            if (matches.length === 0) {
                matches = undefined
            }
            setSongs(matches)
            return
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
        marginBottom: 30,
    },
    emptyState: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

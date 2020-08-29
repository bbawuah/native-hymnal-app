import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { SearchButton } from '../SearchButton/SearchButton'
import { CloseButton } from '../CloseButton/CloseButton'
import { Song } from '../../../../models/Song'
import { Container } from '../Container/Container'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeStackParamList } from '../../../HomePage/HomeParamList'
import { LightStatusBar } from '../LightStatusBar/LightStatusBar'
import State from '../../../../store/store'
import AsyncStorage from '@react-native-community/async-storage'
import { observer } from 'mobx-react'

interface Props {
    navigation?: StackNavigationProp<HomeStackParamList, 'Home'>
}

export const SearchInput: React.FC<Props> = observer(({ navigation }) => {
    const state = useContext(State)
    const [value, setValue] = useState<string>('')
    const [songs, setSongs] = useState<Song[]>()
    const [refreshing, setRefreshing] = useState<boolean>(false)

    useEffect(() => {
        searchHymnals(value)
        setState()
        setFontSize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setSongs([])
        searchHymnals(value)
        setRefreshing(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, refreshing])

    return (
        <View style={styles.container}>
            <LightStatusBar />
            <View>
                <TouchableOpacity style={styles.search}>
                    <SearchButton style={getSearchStyles()} />
                </TouchableOpacity>
                <TextInput onChangeText={text => setValue(text)} value={value} style={styles.input} />

                <TouchableOpacity onPress={() => setValue('')} style={styles.close}>
                    <CloseButton style={closeButtonStyles()} />
                </TouchableOpacity>
            </View>
            <View>
                {!songs ? (
                    <ActivityIndicator style={styles.activityIndicator} />
                ) : (
                    <FlatList
                        style={styles.test}
                        keyExtractor={song => song._id}
                        data={songs}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        renderItem={({ item }) => {
                            return (
                                <Container
                                    title={item.title.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ').replace(/\n/g, ' - ')}
                                    number={item.number}
                                    icon={getIcon(item.number)}
                                    style={styles.songContainer}
                                    onPress={() =>
                                        navigation?.navigate('Song', {
                                            title: item.title
                                                .replace(/q|Q/g, 'ε')
                                                .replace(/x|X/g, 'ɔ')
                                                .replace(/\n/g, ' - '),
                                            number: item.number,
                                        })
                                    }
                                />
                            )
                        }}
                    />
                )}
            </View>
        </View>
    )
    async function searchHymnals(searchTerm: string) {
        try {
            const songs = await fetch(`http://localhost:8000/search:${searchTerm}`)
            const response: Song[] = await songs.json()
            setSongs(response)
        } catch (e) {
            console.log(e)
        }
    }

    function closeButtonStyles() {
        const color = value === '' ? '#A9A9A9' : '#2F557F'
        return { color }
    }

    function getSearchStyles() {
        const color = value === '' ? '#A9A9A9' : '#555'
        return { color }
    }

    async function setState() {
        const favorites = await AsyncStorage.getItem('number')
        if (favorites) {
            const arrayOfFavoritesList = Array.from(JSON.parse(favorites))
            state.replaceList(arrayOfFavoritesList)
        } else {
            return
        }
    }

    async function setFontSize() {
        const storage = await AsyncStorage.getItem('fontSize')
        if (storage) {
            const fontSize = Math.floor(Number(storage))
            state.editFontSize(fontSize)
        } else {
            return
        }
    }

    function getIcon(songRef: string) {
        if (state.favoriteList.includes(songRef)) {
            return 'heart'
        }
        return 'heart-o'
    }
})

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    input: {
        height: 50,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#ECECEC',
        borderWidth: 0,
        color: '#A9A9A9',
        fontSize: 17,
        paddingLeft: 45,
        zIndex: -1,
    },
    test: {
        marginTop: 10,
        marginBottom: 150,
    },
    search: {
        zIndex: 1,
        position: 'absolute',
        top: '25%',
        marginLeft: 5,
    },
    close: {
        zIndex: 1,
        position: 'absolute',
        top: '25%',
        right: 0,
        marginRight: 5,
    },
    activityIndicator: {
        marginTop: 20,
    },
    songContainer: {
        width: '100%',
    },
})

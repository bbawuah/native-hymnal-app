import { StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SearchButton } from '../SearchButton/SearchButton'
import { CloseButton } from '../CloseButton/CloseButton'
import { Song } from '../../../../models/Song'
import { Container } from '../Container/Container'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeStackParamList } from '../../../HomePage/HomeParamList'
import { LightStatusBar } from '../LightStatusBar/LightStatusBar'

interface Props {
    navigation?: StackNavigationProp<HomeStackParamList, 'Home'>
}

export const SearchInput: React.FC<Props> = ({ navigation }) => {
    const [value, setValue] = useState('')
    const [songs, setSongs] = useState<Song[]>()

    useEffect(() => {
        searchHymnals(value)
    }, [value])

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
                <FlatList
                    style={styles.test}
                    keyExtractor={song => song.number}
                    data={songs}
                    renderItem={({ item }) => {
                        return (
                            <Container
                                title={item.title.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ').replace(/\n/g, ' - ')}
                                number={item.number}
                                icon="heart-o"
                                style={{ width: '100%' }}
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
            </View>
        </View>
    )

    async function searchHymnals(searchTerm: string) {
        try {
            const songs = await fetch(`http://localhost:8000/search:${searchTerm}`)
            const response = await songs.json()
            setSongs(response)
        } catch (e) {
            console.log(e)
        }
    }

    function closeButtonStyles() {
        const color = value === '' ? '#A9A9A9' : '#FC8181'
        return { color }
    }

    function getSearchStyles() {
        const color = value === '' ? '#A9A9A9' : '#555'
        return { color }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
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
})

import { StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SearchButton } from '../SearchButton/SearchButton'
import { CloseButton } from '../CloseButton/CloseButton'
import Data from '../../../../data/hymns.json'
import { Song } from '../../../../models/Song'
import { Container } from '../Container/Container'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeStackParamList } from '../../../HomePage/HomeParamList'

interface Props {
    navigation?: StackNavigationProp<HomeStackParamList, 'Home'>
}

export const SearchInput: React.FC<Props> = ({ navigation }) => {
    const [value, setValue] = useState('')
    const [songs, setSongs] = useState<Song[]>()

    useEffect(() => {
        setSongs(searchHymnals(value))
    }, [value])

    return (
        <View style={styles.container}>
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
                    keyExtractor={song => song.number}
                    data={songs}
                    renderItem={({ item }) => {
                        return (
                            <Container
                                title={item.title}
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

    function searchHymnals(searchTerm: string) {
        const matches = Data.filter(hymn => {
            const regex = new RegExp(searchTerm, 'gi')
            return hymn.number.match(regex) || hymn.title.match(regex)
        })

        if (matches.length === 0) {
            return []
        }

        return matches
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

import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
import { Container } from '../Core/components/Container/Container'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { HomeNavProps } from './HomeParamList'
import Data from '../../data/hymns.json'
import { Song } from '../../models/Song'
import { SearchInput } from '../Core/components/SearchInput/SearchInput'

export const HomeScreen: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
    const [songs, setSongs] = useState<Song[]>()
    // Here we would like to have an async lifeCycleMethod which renders all the songs
    // REG 38: Voor elk liedje moeten we checken of hij in de favorite list staat. Zo niet? renderen we 'heart-o'

    useEffect(() => {
        setSongs(Data)
    }, [])

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <SearchInput />
                <FlatList
                    keyExtractor={song => song.number}
                    data={songs}
                    renderItem={({ item }) => {
                        return (
                            <Container
                                title={item.title.replace(/q|Q/g, 'ε').replace(/x|X/g, 'ɔ').replace(/\n/g, ' - ')}
                                number={item.number}
                                icon="heart-o"
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
        marginBottom: 35,
    },
})

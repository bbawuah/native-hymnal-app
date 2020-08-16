import React from 'react'
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
import { Container } from '../Core/components/Container/Container'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { FavouriteNavProps } from './FavouritesParamList'

export const FavouritesPage: React.FC<FavouriteNavProps<'Favourites'>> = ({ navigation }) => {
    const songs = [
        { title: 'Song #1', number: '23' },
        { title: 'Song #2', number: '23' },
        { title: 'Song #3', number: '23' },
    ]

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

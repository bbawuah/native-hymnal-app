import React from 'react'
import { StyleSheet, SafeAreaView, Text, FlatList, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../MainNavigator/MainNavigator'
import { RouteProp } from '@react-navigation/native'
import { Song } from '../Core/components/Song/Song'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Favourites'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Favourites'>

type Props = {
    navigation?: ProfileScreenNavigationProp
    route: ProfileScreenRouteProp
}

const Stack = createStackNavigator()
export const FavouritesPage: React.FC = () => {
    const songs = [
        { title: 'Song #1', number: 23 },
        { title: 'Song #2', number: 23 },
        { title: 'Song #3', number: 23 },
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

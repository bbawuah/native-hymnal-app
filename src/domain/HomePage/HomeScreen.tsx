import React from 'react'
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
import { Container } from '../Core/components/Container/Container'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { HomeNavProps } from './HomeParamList'

export const HomeScreen: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
    // Here we would like to have an async lifeCycleMethod which renders all the songs
    const songs = [
        { title: 'Song #1', number: 23 },
        { title: 'Song #2', number: 23 },
        { title: 'Song #3', number: 23 },
        { title: 'Song #4', number: 23 },
        { title: 'Song #5', number: 23 },
        { title: 'Song #6', number: 23 },
        { title: 'Song #7', number: 23 },
        { title: 'Song #8', number: 23 },
        { title: 'Song #9', number: 23 },
        { title: 'Song #10', number: 23 },
        { title: 'Song #11', number: 23 },
        { title: 'Song #12', number: 23 },
        { title: 'Song #13', number: 23 },
        { title: 'Song #14', number: 23 },
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
                                icon="heart-o"
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
        marginBottom: 35,
    },
})

import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../Core/components/MainNavigator/MainNavigator'
import { RouteProp } from '@react-navigation/native'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Favourites'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Favourites'>

type Props = {
    navigation?: ProfileScreenNavigationProp
    route: ProfileScreenRouteProp
}

const Stack = createStackNavigator()
export const FavouritesPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.root}>
            <Text>Favourites</Text>
        </SafeAreaView>
    )
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
})

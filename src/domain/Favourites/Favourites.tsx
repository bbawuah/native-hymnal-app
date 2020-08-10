import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../MainNavigator/MainNavigator'
import { Menu } from '../Core/components/Menu/Menu'
import { FavouritesPage } from './FavouritesPage'

type FavouriteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>
type FavouriteScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

type Props = {
    navigation?: FavouriteScreenNavigationProp
    route: FavouriteScreenRouteProp
}

const Stack = createStackNavigator()

export const Favourites: React.FC<Props> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2F557F',
                },
                headerTintColor: '#fff',
                headerRight: () => <Menu />,
            }}
        >
            <Stack.Screen name="Favourites" component={FavouritesPage} />
        </Stack.Navigator>
    )
}

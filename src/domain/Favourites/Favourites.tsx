import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Menu } from '../Core/components/Menu/Menu'
import { FavouritesPage } from './FavouritesPage'

const Stack = createStackNavigator()

export const Favourites: React.FC = () => {
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

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Menu } from '../Core/components/Menu/Menu'
import { FavouritesPage } from './FavouritesPage'
import { FavouritesParamList } from './FavouritesParamList'
import { SongPage } from '../SongPage/SongPage'

const Stack = createStackNavigator<FavouritesParamList>()

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
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )
}

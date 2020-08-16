import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FavouritesPage } from './FavouritesPage'
import { FavouritesParamList, FavouriteNavProps } from './FavouritesParamList'
import { SongPage } from '../SongPage/SongPage'

const Stack = createStackNavigator<FavouritesParamList>()

export const Favourites: React.FC<FavouriteNavProps<'Favourites'>> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2F557F',
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Favourites" component={FavouritesPage} />
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )
}

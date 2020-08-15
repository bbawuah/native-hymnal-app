import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Menu } from '../Core/components/Menu/Menu'
import { FavouritesPage } from './FavouritesPage'
import { FavouritesParamList, FavouriteNavProps } from './FavouritesParamList'
import { SongPage } from '../SongPage/SongPage'
import { MenuPage } from '../MenuPage/MenuPage'

const Stack = createStackNavigator<FavouritesParamList>()

export const Favourites: React.FC<FavouriteNavProps<'Favourites'>> = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2F557F',
                },
                headerTintColor: '#fff',
                headerRight: () => <Menu onPress={() => navigation?.navigate('Menu')} />,
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Favourites" component={FavouritesPage} />
            <Stack.Screen name="Song" component={SongPage} />
            <Stack.Screen name="Menu" component={MenuPage} />
        </Stack.Navigator>
    )
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FavouritesPage } from './FavouritesPage'
import { FavouritesParamList, FavouriteNavProps } from './FavouritesParamList'
import { SongPage } from '../SongPage/SongPage'
import { PlatformColor, useColorScheme } from 'react-native'
import { colors } from '../utils/colors'

const Stack = createStackNavigator<FavouritesParamList>()

export const Favourites: React.FC<FavouriteNavProps<'Favourites'>> = () => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: PlatformColor('systemBackground'),
                },
                headerTintColor: getThemeStyle(),
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Favourites" component={FavouritesPage} />
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )

    function getThemeStyle(): string {
        const color = isDarkMode ? colors.tint.white : colors.tint.black
        return color
    }
}

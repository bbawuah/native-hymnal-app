import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomePage } from './HomePage'
import { SongPage } from '../SongPage/SongPage'
import { HomeStackParamList, HomeNavProps } from './HomeParamList'
import { Platform, PlatformColor, useColorScheme } from 'react-native'
import { colors } from '../utils/colors'

const Stack = createStackNavigator<HomeStackParamList>()

export const Home: React.FC<HomeNavProps<'Home'>> = () => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: getBackgroundColor(),
                },
                headerTintColor: getThemeStyle(),
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: 'Adventist Melodies',
                }}
            />
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )

    function getThemeStyle(): string {
        const color = isDarkMode ? colors.tint.white : colors.tint.black
        return color
    }

    function getBackgroundColor() {
        if (Platform.OS === 'ios') {
            return PlatformColor('systemBackground')
        }

        if (isDarkMode) {
            return colors.tint.black
        }

        return colors.tint.white
    }
}

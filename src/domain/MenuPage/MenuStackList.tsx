import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MenuNavProps, MenuParamList } from './MenuParamList'
import { AboutUs } from './Settings/AboutUs/AboutUs'
import { PrivacyPolicy } from './Settings/PrivacyPolicy/PrivacyPolicy'
import { MenuPage } from './MenuPage'
import { Settings } from './Settings/Settings/Settings'
import { PlatformColor, useColorScheme } from 'react-native'
import { colors } from '../utils/colors'

const Stack = createStackNavigator<MenuParamList>()

export const MenuStackList: React.FC<MenuNavProps<'Menu'>> = () => {
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
            <Stack.Screen name="Menu" component={MenuPage} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen
                name="Privacy"
                component={PrivacyPolicy}
                options={{
                    title: 'Privacy Policy',
                }}
            />
            <Stack.Screen name="About" component={AboutUs} />
        </Stack.Navigator>
    )

    function getThemeStyle(): string {
        const color = isDarkMode ? colors.tint.white : colors.tint.black
        return color
    }
}

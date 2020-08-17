import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MenuNavProps, MenuParamList } from './MenuParamList'
import { AboutUs } from './Settings/AboutUs/AboutUs'
import { PrivacyPolicy } from './Settings/PrivacyPolicy/PrivacyPolicy'
import { InviteFriends } from './Settings/InviteFriends/InviteFriends'
import { RateApp } from './Settings/RateApp/RateApp'
import { MenuPage } from './MenuPage'
import { Settings } from './Settings/Settings/Settings'

const Stack = createStackNavigator<MenuParamList>()

export const MenuStackList: React.FC<MenuNavProps<'Menu'>> = () => {
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
            <Stack.Screen name="Menu" component={MenuPage} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Privacy" component={PrivacyPolicy} />
            <Stack.Screen name="Invite" component={InviteFriends} />
            <Stack.Screen name="Rate" component={RateApp} />
            <Stack.Screen name="About" component={AboutUs} />
        </Stack.Navigator>
    )
}

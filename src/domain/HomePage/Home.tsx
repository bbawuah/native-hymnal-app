import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './HomeScreen'
import { SongPage } from '../SongPage/SongPage'
import { HomeStackParamList, HomeNavProps } from './HomeParamList'

const Stack = createStackNavigator<HomeStackParamList>()

export const Home: React.FC<HomeNavProps<'Home'>> = () => {
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
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )
}

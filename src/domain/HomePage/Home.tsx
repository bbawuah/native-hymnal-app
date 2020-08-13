import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './HomeScreen'
import { Menu } from '../Core/components/Menu/Menu'
import { SongPage } from '../SongPage/SongPage'
import { HomeStackParamList } from './HomeParamList'

const Stack = createStackNavigator<HomeStackParamList>()

export const Home: React.FC = () => {
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
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )
}

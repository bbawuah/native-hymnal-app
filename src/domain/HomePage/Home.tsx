import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './HomeScreen'
import { Menu } from '../Core/components/Menu/Menu'
import { SongPage } from '../SongPage/SongPage'
import { HomeStackParamList, HomeNavProps } from './HomeParamList'
import { MenuPage } from '../MenuPage/MenuPage'

const Stack = createStackNavigator<HomeStackParamList>()

export const Home: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
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
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Song" component={SongPage} />
            <Stack.Screen name="Menu" component={MenuPage} />
        </Stack.Navigator>
    )
}

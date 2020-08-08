import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../Core/components/MainNavigator/MainNavigator'
import { HomeScreen } from './HomeScreen'
import { Menu } from '../Core/components/Menu/Menu'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

type Props = {
    navigation?: HomeScreenNavigationProp
    route: HomeScreenRouteProp
}

const Stack = createStackNavigator()

export const Home: React.FC<Props> = () => {
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
        </Stack.Navigator>
    )
}

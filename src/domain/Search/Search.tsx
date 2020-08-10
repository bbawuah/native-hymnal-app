import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../MainNavigator/MainNavigator'
import { Menu } from '../Core/components/Menu/Menu'
import { SearchPage } from './SearchPage'

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>
type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>

type Props = {
    navigation?: SearchScreenNavigationProp
    route: SearchScreenRouteProp
}

const Stack = createStackNavigator()

export const Search: React.FC<Props> = () => {
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
            <Stack.Screen name="Search" component={SearchPage} />
        </Stack.Navigator>
    )
}

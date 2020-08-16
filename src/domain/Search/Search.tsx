import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchPage } from './SearchPage'
import { SearchParamList, SearchNavProps } from './SearchParamList'
import { SongPage } from '../SongPage/SongPage'

const Stack = createStackNavigator<SearchParamList>()

export const Search: React.FC<SearchNavProps<'Search'>> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2F557F',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen name="Search" component={SearchPage} />
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )
}

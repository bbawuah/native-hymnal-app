import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Menu } from '../Core/components/Menu/Menu'
import { SearchPage } from './SearchPage'
import { SearchParamList, SearchNavProps } from './SearchParamList'
import { SongPage } from '../SongPage/SongPage'
import { MenuStackList } from '../MenuPage/MenuStackList'

const Stack = createStackNavigator<SearchParamList>()

export const Search: React.FC<SearchNavProps<'Search'>> = ({ navigation }) => {
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

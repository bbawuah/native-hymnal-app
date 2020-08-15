import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Menu } from '../Core/components/Menu/Menu'
import { SearchPage } from './SearchPage'
import { SearchParamList, SearchNavProps } from './SearchParamList'
import { MenuPage } from '../MenuPage/MenuPage'
import { SongPage } from '../SongPage/SongPage'

const Stack = createStackNavigator<SearchParamList>()

export const Search: React.FC<SearchNavProps<'Search'>> = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2F557F',
                },
                headerTintColor: '#fff',
                headerRight: () => <Menu onPress={() => navigation?.navigate('Menu')} />,
            }}
        >
            <Stack.Screen name="Search" component={SearchPage} />
            <Stack.Screen name="Menu" component={MenuPage} />
            <Stack.Screen name="Song" component={SongPage} />
        </Stack.Navigator>
    )
}

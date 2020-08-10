import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../HomePage/Home'
import { Favourites } from '../Favourites/Favourites'
import { Search } from '../Search/Search'
import { HomeButton } from '../Core/components/HomeButton/HomeButton'
import { FavouriteButton } from '../Core/components/FavoriteButton/FavouriteButton'
import { SearchButton } from '../Core/components/SearchButton/SearchButton'

const Tab = createBottomTabNavigator()

export type RootStackParamList = {
    Favourites: undefined
    Home: undefined
    Search: undefined
}

export const MainNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                style: {
                    backgroundColor: '#f8f8f8',
                },
                tabStyle: {
                    width: 100,
                    height: 50,
                },
                activeTintColor: '#2F557F',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => <HomeButton />,
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarIcon: () => <FavouriteButton />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: () => <SearchButton />,
                }}
            />
        </Tab.Navigator>
    )
}

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../../HomePage/Home'
import { Favourites } from '../../../Favourites/Favourites'
import { Search } from '../../../Search/Search'

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
                },
                activeTintColor: '#845EC2',
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favourites" component={Favourites} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}

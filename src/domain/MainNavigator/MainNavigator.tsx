import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../HomePage/Home'
import { Favourites } from '../Favourites/Favourites'
import Icon from 'react-native-vector-icons/FontAwesome'
import { MenuStackList } from '../MenuPage/MenuStackList'
import { useColorScheme } from 'react-native'
import { colors } from '../utils/colors'

const Tab = createBottomTabNavigator()

export type RootStackParamList = {
    Favourites: undefined
    Home: undefined
    Search: undefined
}

export const MainNavigator: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                style: {
                    backgroundColor: getThemeStyle(),
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
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => <Icon name="heart" size={size} color={color} />,
                }}
            />

            <Tab.Screen
                name="Menu"
                component={MenuStackList}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="navicon" size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    )

    function getThemeStyle(): string {
        const color = isDarkMode ? colors.tint.black : colors.tint.white
        return color
    }
}

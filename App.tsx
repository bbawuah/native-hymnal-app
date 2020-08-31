/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigator } from './src/domain/MainNavigator/MainNavigator'
import SplashScreen from 'react-native-splash-screen'

const App: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default App

import React from 'react'
import { StyleSheet, SafeAreaView, PlatformColor, Platform, useColorScheme } from 'react-native'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { HomeNavProps } from './HomeParamList'
import { SearchInput } from '../Core/components/SearchInput/SearchInput'
import { colors } from '../utils/colors'

export const HomePage: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaView style={[styles.root, { backgroundColor: getBackgroundColor() }]}>
            <LightStatusBar />
            <SearchInput navigation={navigation} />
        </SafeAreaView>
    )

    function getBackgroundColor() {
        if (Platform.OS === 'ios') {
            return PlatformColor('systemBackground')
        }

        if (isDarkMode) {
            return colors.tint.black
        }

        return colors.tint.white
    }
}
// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
    },
    container: {
        marginTop: 10,
    },
})

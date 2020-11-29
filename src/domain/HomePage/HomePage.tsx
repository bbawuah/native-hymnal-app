import React from 'react'
import { StyleSheet, SafeAreaView, PlatformColor } from 'react-native'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { HomeNavProps } from './HomeParamList'
import { SearchInput } from '../Core/components/SearchInput/SearchInput'

export const HomePage: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <SearchInput navigation={navigation} />
        </SafeAreaView>
    )
}
// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: PlatformColor('systemBackground'),
    },
    container: {
        marginTop: 10,
    },
})

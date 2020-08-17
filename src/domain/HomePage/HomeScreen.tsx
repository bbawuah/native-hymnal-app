import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { HomeNavProps } from './HomeParamList'
import { SearchInput } from '../Core/components/SearchInput/SearchInput'

export const HomeScreen: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
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
        backgroundColor: '#f8f8f8',
    },
    container: {
        marginTop: 10,
    },
})

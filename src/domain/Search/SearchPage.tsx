import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { SearchInput } from '../Core/components/SearchInput/SearchInput'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { SearchNavProps } from './SearchParamList'

export const SearchPage: React.FC<SearchNavProps<'Search'>> = () => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />

            <View style={styles.container}>
                <SearchInput />
            </View>
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

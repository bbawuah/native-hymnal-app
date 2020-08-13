import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { SearchInput } from '../Core/components/SearchInput/SearchInput'

export const SearchPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.root}>
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

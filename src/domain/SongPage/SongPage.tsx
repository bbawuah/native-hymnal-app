import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'

export const SongPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <Text>Song</Text>
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
        marginBottom: 35,
    },
})

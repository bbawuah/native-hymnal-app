import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { HomeNavProps } from '../HomePage/HomeParamList'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'

export const SongPage: React.FC<HomeNavProps<'Song'>> = ({ route }) => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />

            <View style={styles.container}>
                <Text style={styles.title}>{route.params.title}</Text>
            </View>
        </SafeAreaView>
    )
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
    },
    container: {
        marginTop: 10,
        marginBottom: 35,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
})

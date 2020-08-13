import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { HomeNavProps } from '../HomePage/HomeParamList'

export const SongPage: React.FC<HomeNavProps<'Song'>> = ({ route }) => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text>{route.params.title}</Text>
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

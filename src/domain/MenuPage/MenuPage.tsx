import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'

export const MenuPage: React.FC = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text>Menu</Text>
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

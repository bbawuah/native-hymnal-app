import { View, Platform, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

export const LightStatusBar: React.FC = () => {
    return (
        <View style={styles.statusbar}>
            <StatusBar translucent={true} barStyle="light-content" />
        </View>
    )
}

const styles = StyleSheet.create({
    statusbar: {
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    },
})

import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LightStatusBar } from '../../../Core/components/LightStatusBar/LightStatusBar'
import { MenuNavProps } from '../../MenuParamList'

export const RateApp: React.FC<MenuNavProps<'Rate'>> = () => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <Text>Rate App</Text>
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

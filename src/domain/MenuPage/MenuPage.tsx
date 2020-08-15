import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Container } from '../Core/components/Container/Container'
import { MenuNavProps } from './MenuParamList'

export const MenuPage: React.FC<MenuNavProps<'Menu'>> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <Container
                    title="Settings"
                    onPress={() => navigation?.navigate('Settings')}
                    icon="angle-right"
                    settingsIcon="gear"
                />
                <Container
                    title="Privacy"
                    onPress={() => navigation?.navigate('Privacy')}
                    icon="angle-right"
                    settingsIcon="lock"
                />
                <Container
                    title="Invite Friends"
                    onPress={() => navigation?.navigate('Invite')}
                    icon="angle-right"
                    settingsIcon="share-alt"
                />
                <Container
                    title="Rate App"
                    onPress={() => navigation?.navigate('Rate')}
                    icon="angle-right"
                    settingsIcon="star"
                />
                <Container
                    title="About Us"
                    onPress={() => navigation?.navigate('About')}
                    icon="angle-right"
                    settingsIcon="info-circle"
                />
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

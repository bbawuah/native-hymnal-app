import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LightStatusBar } from '../../../Core/components/LightStatusBar/LightStatusBar'
import { MenuNavProps } from '../../MenuParamList'

export const AboutUs: React.FC<MenuNavProps<'About'>> = () => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <Text style={styles.textTitle}>About us</Text>
                <Text style={styles.textContainer}>
                    This application is build by two young men who wanted to find a solution for a problem in their
                    community.
                </Text>
                <Text style={styles.textContainer}>
                    This hymnal features the Hymns 1 to 694, Nea Efi Ghana 1 to 55 and Nea Ghanafo 1 to 20. In the near
                    future we will add more features to this application.
                </Text>

                <Text style={styles.textContainer}>
                    We believe time spent in the home learning and singing hymns will reap eternal blessings for the
                    family.
                </Text>
                <Text style={styles.textTitle}>Request</Text>
                <Text style={styles.textContainer}>
                    We are looking forward to working with people who can provide us with the melody of each lyric so
                    that we can incorporate them in the app to make it easy for people to learn almost every hymn in the
                    app easily.
                </Text>
                <Text style={styles.textTitle}>Contact</Text>

                <Text style={styles.textContainer}>
                    If you have any questions, feedback or if you desire that a particular app be developed for your
                    church, please don't hesitate to contact us at: adventhymnal@gmail.com
                </Text>
            </View>
        </SafeAreaView>
    )
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        marginTop: 10,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
    },
    textContainer: {
        marginBottom: 10,
        fontSize: 17,
    },
})

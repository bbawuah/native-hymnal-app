import {
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView,
    PlatformColor,
    useColorScheme,
    Button,
    Linking,
    Platform,
} from 'react-native'
import React from 'react'
import { LightStatusBar } from '../../../Core/components/LightStatusBar/LightStatusBar'
import { MenuNavProps } from '../../MenuParamList'
import { colors } from '../../../utils/colors'

export const AboutUs: React.FC<MenuNavProps<'About'>> = () => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaView style={[styles.root, { backgroundColor: getBackgroundColor() }]}>
            <LightStatusBar />
            <ScrollView style={styles.container}>
                <Text style={[styles.textTitle, getTextColor()]}>About us</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    This application is build by two young men who wanted to find a solution for a problem in their
                    community.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    This hymnal features the Hymns 1 to 694, Nea Efi Ghana 1 to 55 and Nea Ghanafo 1 to 20. In the near
                    future we will add more features to this application.
                </Text>

                <Text style={[styles.textContainer, getTextColor()]}>
                    We believe time spent in the home learning and singing hymns will reap eternal blessings for the
                    family.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Request</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    We are looking forward to working with people who can provide us with the melody of each lyric so
                    that we can incorporate them in the app to make it easy for people to learn almost every hymn in the
                    app easily.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Contact</Text>

                <Text style={[styles.textContainer, getTextColor()]}>
                    If you have any questions, feedback or if you desire that a particular app be developed for your
                    church, please don't hesitate to contact us.
                </Text>
                <Button
                    onPress={() => Linking.openURL('mailto:adventhymnal@gmail.com')}
                    title="adventhymnal@gmail.com"
                />
            </ScrollView>
        </SafeAreaView>
    )

    function getTextColor() {
        const color = isDarkMode ? colors.tint.white : colors.tint.black
        return { color }
    }

    function getBackgroundColor() {
        if (Platform.OS === 'ios') {
            return PlatformColor('systemBackground')
        }

        if (isDarkMode) {
            return colors.tint.black
        }

        return colors.tint.white
    }
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',

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

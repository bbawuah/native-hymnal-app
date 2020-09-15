import React from 'react'
import { SafeAreaView, StyleSheet, Platform, Linking, ScrollView } from 'react-native'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Container } from '../Core/components/Container/Container'
import { MenuNavProps } from './MenuParamList'
import Share, { Options } from 'react-native-share'

const url =
    Platform.OS !== 'ios'
        ? 'https://play.google.com/store/apps/details?id=com.brianbawuah.adventistmelodies'
        : 'https://apps.apple.com/in/app/adventist-melodies/id1530974313?ls=1'
const title = 'Adventist Melodies'
const message = 'I want to enlighten you with app..'
const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>'
const options: Options = Platform.select({
    ios: {
        activityItemSources: [
            {
                // For using custom icon instead of default text icon at share preview when sharing with message.
                placeholderItem: {
                    content: icon,
                    type: 'text',
                },
                item: {
                    default: {
                        type: 'text',
                        content: `${message} ${url}`,
                    },
                },
                linkMetadata: {
                    title: title,
                    icon: icon,
                },
            },
        ],
    },
    default: {
        title,
        subject: title,
        message: `${message} ${url}`,
    },
})

export const MenuPage: React.FC<MenuNavProps<'Menu'>> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <ScrollView style={styles.container}>
                <Container
                    title="Settings"
                    onPress={() => navigation?.navigate('Settings')}
                    icon="angle-right"
                    settingsIcon="gear"
                />
                <Container
                    title="Privacy Policy"
                    onPress={() => navigation?.navigate('Privacy')}
                    icon="angle-right"
                    settingsIcon="lock"
                />
                <Container
                    title="Invite Friends"
                    onPress={() =>
                        Share.open(options)
                            .then(res => {
                                console.log(res)
                            })
                            .catch(err => {
                                err && console.log(err)
                            })
                    }
                    icon="angle-right"
                    settingsIcon="share-alt"
                />
                <Container title="Rate App" onPress={() => handleRateApp()} icon="angle-right" settingsIcon="star" />
                <Container
                    title="About Us"
                    onPress={() => navigation?.navigate('About')}
                    icon="angle-right"
                    settingsIcon="info-circle"
                />
                <Container
                    title="Donate"
                    onPress={() =>
                        Linking.openURL('https://paypal.me/pools/c/8sCczet3Kl').catch(err => console.log(err))
                    }
                    icon="angle-right"
                    settingsIcon="gift"
                />
            </ScrollView>
        </SafeAreaView>
    )

    function handleRateApp() {
        if (Platform.OS !== 'ios') {
            //To open the Google Play Store
            console.log('open google playstore')
            Linking.openURL(
                `https://play.google.com/store/apps/details?id=com.brianbawuah.adventistmelodies`
            ).catch(err => console.log(err))
        } else {
            //To open the Apple App Store
            console.log('open ios app store')
            Linking.openURL(`https://apps.apple.com/in/app/adventist-melodies/id1530974313?ls=1`).catch(err =>
                console.log(err)
            )
        }
    }
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: '#f8f8f8',
        marginBottom: 10,
    },
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
})

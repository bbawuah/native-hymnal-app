import React from 'react'
import { SafeAreaView, View, StyleSheet, Platform } from 'react-native'
import { LightStatusBar } from '../Core/components/LightStatusBar/LightStatusBar'
import { Container } from '../Core/components/Container/Container'
import { MenuNavProps } from './MenuParamList'
import Share, { Options } from 'react-native-share'

const url = 'https://awesome.contents.com/'
const title = 'Adventist Melodies'
const message = 'I want to enlighten you with app..'
const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>'
const options: Options = Platform.select({
    ios: {
        activityItemSources: [
            {
                // For sharing url with custom title.
                placeholderItem: { type: 'url', content: url },
                item: {
                    default: { type: 'url', content: url },
                },
                subject: {
                    default: title,
                },
                linkMetadata: { originalUrl: url, url, title },
            },
            {
                // For sharing text.
                placeholderItem: { type: 'text', content: message },
                item: {
                    default: { type: 'text', content: message },
                    message: null, // Specify no text to share via Messages app.
                },
                linkMetadata: {
                    // For showing app icon on share preview.
                    title: message,
                },
            },
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
                    title: message,
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

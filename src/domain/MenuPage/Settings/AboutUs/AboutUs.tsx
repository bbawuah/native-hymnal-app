import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LightStatusBar } from '../../../Core/components/LightStatusBar/LightStatusBar'
import { MenuNavProps } from '../../MenuParamList'

export const AboutUs: React.FC<MenuNavProps<'About'>> = () => {
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <Text>About us</Text>
                <Text>
                    This application is build by two young men who wanted to find a solution for a problem in their
                    community. This hymnal features the Hymns 1 to 694, Nea Efi Ghana 1 to 55 and Nea Ghanafo 1 to 20.
                    In the near future we will redevelop this web application into a native mobile application. If you
                    have any questions or feedback, please don't hesitate to contact us at: adventhymnal@gmail.com
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
    },
    container: {
        marginTop: 10,
    },
})

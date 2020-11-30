import { SafeAreaView, Text, StyleSheet, ScrollView, PlatformColor, useColorScheme, Platform } from 'react-native'
import React from 'react'
import { LightStatusBar } from '../../../Core/components/LightStatusBar/LightStatusBar'
import { MenuNavProps } from '../../MenuParamList'
import { colors } from '../../../utils/colors'

export const PrivacyPolicy: React.FC<MenuNavProps<'Privacy'>> = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const BULLET = '\u2022'
    return (
        <SafeAreaView style={[styles.root, { backgroundColor: getBackgroundColor() }]}>
            <LightStatusBar />
            <ScrollView style={styles.container}>
                <Text style={[styles.textTitle, getTextColor()]}>Privacy Policy</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    We built the Hymnal app as a Free app. This service is provided by at no cost and is intended for
                    use as is.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    This page is used to inform visitors regarding my policies with the collection, use, and disclosure
                    of Personal Information if anyone decided to use my Service. If you choose to use my Service, then
                    you agree to the collection and use of information in relation to this policy.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Personal Information</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    The Personal Information that I collect is used for providing and improving the Service. I will not
                    use or share your information with anyone except as described in this Privacy Policy. The terms used
                    in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at
                    Hymnal app unless otherwise defined in this Privacy Policy.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    Information Collection and Use For a better experience, while using our Service, I may require you
                    to provide us with certain personally identifiable information, including but not limited to
                    nothing. The information that I request will be retained on your device and is not collected by me
                    in any way.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Third party services</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    The app does use third party services that may collect information used to identify you. Link to
                    privacy policy of third party service providers used by the app Google Play Services Log Data I want
                    to inform you that whenever you use my Service, in a case of an error in the app I collect data and
                    information (through third party products) on your phone called Log Data.{' '}
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    This Log Data may include information such as your device Internet Protocol (“IP”) address, device
                    name, operating system version, the configuration of the app when utilizing my Service, the time and
                    date of your use of the Service, and other statistics.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Cookies</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    Cookies are files with a small amount of data that are commonly used as anonymous unique
                    identifiers. These are sent to your browser from the websites that you visit and are stored on your
                    device's internal memory.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    This Service does not use these “cookies” explicitly. However, the app may use third party code and
                    libraries that use “cookies” to collect information and improve their services. You have the option
                    to either accept or refuse these cookies and know when a cookie is being sent to your device.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                    Service Providers I may employ third-party companies and individuals due to the following reasons:
                    To facilitate our Service; To provide the Service on our behalf
                </Text>
                <Text
                    style={[styles.textContainer, getTextColor()]}
                >{`${BULLET} To perform Service-related services`}</Text>
                <Text
                    style={[styles.textContainer, getTextColor()]}
                >{`${BULLET} To assist us in analyzing how our Service is used.`}</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    {' '}
                    I want to inform users of this Service that these third parties have access to your Personal
                    Information. The reason is to perform the tasks assigned to them on our behalf. However, they are
                    obligated not to disclose or use the information for any other purpose.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Security</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    I value your trust in providing us your Personal Information, thus we are striving to use
                    commercially acceptable means of protecting it. But remember that no method of transmission over the
                    internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its
                    absolute security.{' '}
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Links to Other Sites</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    This Service may contain links to other sites. If you click on a third-party link, you will be
                    directed to that site. Note that these external sites are not operated by me. Therefore, I strongly
                    advise you to review the Privacy Policy of these websites. I have no control over and assume no
                    responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Children’s Privacy</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    These Services do not address anyone under the age of 13. I do not knowingly collect personally
                    identifiable information from children under 13.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    In the case I discover that a child under 13 has provided me with personal information, I
                    immediately delete this from our servers.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    If you are a parent or guardian and you are aware that your child has provided us with personal
                    information, please contact me so that I will be able to do necessary actions.
                </Text>
                <Text style={[styles.textTitle, getTextColor()]}>Changes</Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    Changes to This Privacy Policy I may update our Privacy Policy from time to time. Thus, you are
                    advised to review this page periodically for any changes.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>
                    This policy is effective as of 2020-08-24 Contact Us If you have any questions or suggestions about
                    my Privacy Policy, do not hesitate to contact me at.
                </Text>
                <Text style={[styles.textContainer, getTextColor()]}>adventhymnal@gmail.com</Text>
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

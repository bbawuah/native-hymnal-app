import { SafeAreaView, View, Text, StyleSheet, PlatformColor, useColorScheme } from 'react-native'
import React, { useState, useContext } from 'react'
import { LightStatusBar } from '../../../Core/components/LightStatusBar/LightStatusBar'
import { MenuNavProps } from '../../MenuParamList'
import Slider from '@react-native-community/slider'
import AsyncStorage from '@react-native-community/async-storage'
import State from '../../../../store/store'
import { colors } from '../../../utils/colors'

export const Settings: React.FC<MenuNavProps<'Settings'>> = () => {
    const state = useContext(State)
    const [fontSize, setFontSize] = useState<number>(state.getFontSize)
    const num = Math.floor(fontSize)
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <Text style={[styles.textTitle, getTextColor()]}>Font size</Text>
                <Text style={[styles.fontSize, getTextColor()]}>{num}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={16}
                    maximumValue={22}
                    minimumTrackTintColor={colors.tint.grey}
                    maximumTrackTintColor={colors.tint.grey}
                    onValueChange={value => setFontSize(value)}
                    onSlidingComplete={value => handleFontSize(value)}
                    value={fontSize}
                />
            </View>
        </SafeAreaView>
    )

    async function handleFontSize(num: number) {
        try {
            await AsyncStorage.setItem('fontSize', JSON.stringify(num))
            state.editFontSize(num)
        } catch (e) {
            console.log(e)
        }
    }

    function getTextColor() {
        const color = isDarkMode ? colors.tint.white : colors.tint.black
        return { color }
    }
}

// styles

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: PlatformColor('systemBackground'),
        alignItems: 'center',
    },
    container: {
        width: '90%',
        marginTop: 25,
        borderTopWidth: 0.25,
        borderBottomWidth: 0.25,
        borderBottomColor: colors.tint.grey,
        borderTopColor: colors.tint.grey,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 10,
    },
    fontSize: {
        alignSelf: 'center',
    },
    slider: {
        width: 200,
        height: 40,
        alignSelf: 'center',
    },
})

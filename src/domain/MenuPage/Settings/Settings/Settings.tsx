import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import { LightStatusBar } from '../../../Core/components/LightStatusBar/LightStatusBar'
import { MenuNavProps } from '../../MenuParamList'
import Slider from '@react-native-community/slider'
import AsyncStorage from '@react-native-community/async-storage'
import State from '../../../../store/store'

export const Settings: React.FC<MenuNavProps<'Settings'>> = () => {
    const state = useContext(State)
    const [fontSize, setFontSize] = useState<number>(state.getFontSize)
    const num = Math.floor(fontSize)
    return (
        <SafeAreaView style={styles.root}>
            <LightStatusBar />
            <View style={styles.container}>
                <Text style={styles.textTitle}>Font size</Text>
                <Text style={styles.fontSize}>{num}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={16}
                    maximumValue={22}
                    minimumTrackTintColor="#757575"
                    maximumTrackTintColor="#757575"
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
        borderTopWidth: 0.25,
        borderBottomWidth: 0.25,
        borderBottomColor: '#757575',
        borderTopColor: '#757575',
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

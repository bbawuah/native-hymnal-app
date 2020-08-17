import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StyleProp } from 'react-native'
import { IconButton } from '../IconButton/IconButton'

interface Container {
    number?: string
    settingsIcon?: string
    title: string
    icon: string
    style?: StyleProp<any>
    onPress?: () => void
}

export const Container: React.FC<Container> = ({ number, settingsIcon, title, icon, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={getStyles()}>
                {number ? <Text style={styles.text}>{number}</Text> : <IconButton icon={settingsIcon} />}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <IconButton icon={icon} number={number} />
            </View>
        </TouchableOpacity>
    )

    function getStyles() {
        return [styles.container, style]
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 75,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 1,
        borderWidth: 0,
    },
    textContainer: {
        width: 250,
    },
    text: {
        color: '#555',
        fontSize: 17,
    },
    favoriteButton: {
        zIndex: 99999,
    },
})

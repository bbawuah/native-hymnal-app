import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IconButton } from '../IconButton/IconButton'

interface Container {
    number?: number
    settingsIcon?: string
    title: string
    icon: string
    onPress?: () => void
}

export const Container: React.FC<Container> = ({ number, settingsIcon, title, icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {number ? <Text style={styles.text}>{number}</Text> : <IconButton icon={settingsIcon} />}
                <Text style={styles.text}>{title}</Text>
                <IconButton icon={icon} />
            </View>
        </TouchableOpacity>
    )
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
    text: {
        color: '#555',
        fontSize: 17,
    },
})

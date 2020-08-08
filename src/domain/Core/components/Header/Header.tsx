import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Menu } from '../Menu/Menu'
import { GoBackButton } from '../GoBackButton/GoBackButton'

interface Props {
    title: string
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.header}>
            <GoBackButton />
            <Text style={styles.title}>{title}</Text>
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 90,
        backgroundColor: '#2F557F',
        paddingBottom: 13,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
    },
})

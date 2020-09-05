import React from 'react'
import { StyleSheet, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Prop {
    style?: StyleProp<any>
}

export const CloseButton: React.FC<Prop> = ({ style }) => {
    return <Icon name="close" size={25} style={getStyles()} />

    function getStyles() {
        return [styles.icon, style]
    }
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 0,
    },
})

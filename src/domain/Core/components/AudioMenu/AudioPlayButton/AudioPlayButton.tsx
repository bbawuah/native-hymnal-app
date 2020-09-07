import React from 'react'
import { StyleSheet, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Prop {
    style?: StyleProp<any>
}

export const AudioPlayButton: React.FC<Prop> = ({ style }) => {
    return <Icon name="play" size={25} style={getStyles()} />

    function getStyles(): StyleProp<ViewStyle> {
        return [styles.icon, style]
    }
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 0,
        color: '#999',
    },
})

import React from 'react'
import { StyleSheet, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../utils/colors'

interface Prop {
    style?: StyleProp<any>
}

export const PickerButton: React.FC<Prop> = ({ style }) => {
    return <Icon name="language" size={25} style={getStyles()} />

    function getStyles(): StyleProp<ViewStyle> {
        return [styles.icon, style]
    }
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 0,
        color: colors.tint.grey,
    },
})

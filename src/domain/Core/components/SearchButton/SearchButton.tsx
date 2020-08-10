import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Prop {
    style?: StyleProp<ViewStyle>
}

export const SearchButton: React.FC<Prop> = ({ style }) => {
    return (
        <TouchableWithoutFeedback>
            <Icon name="search" size={25} style={getStyles()} />
        </TouchableWithoutFeedback>
    )

    function getStyles(): StyleProp<ViewStyle> {
        return [styles.icon, style]
    }
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 12,
        color: '#757575',
    },
})

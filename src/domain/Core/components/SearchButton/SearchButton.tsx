import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, StyleProp } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Prop {
    style?: StyleProp<any>
}

export const SearchButton: React.FC<Prop> = ({ style }) => {
    return (
        <TouchableWithoutFeedback>
            <Icon name="search" size={25} style={getStyles()} />
        </TouchableWithoutFeedback>
    )

    function getStyles() {
        return [styles.icon, style]
    }
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 0,
        color: '#757575',
    },
})

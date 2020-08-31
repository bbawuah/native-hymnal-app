import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'

interface Props {
    onPress: () => void
}

export const Menu: React.FC<Props> = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Icon name="navicon" size={25} style={styles.menu} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        right: 20,
        bottom: 10,
        color: '#FFF',
    },
})

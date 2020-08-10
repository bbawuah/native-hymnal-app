import React from 'react'
import { TouchableWithoutFeedback, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const HomeButton: React.FC = () => {
    return (
        <TouchableWithoutFeedback>
            <Icon name="home" size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )
}

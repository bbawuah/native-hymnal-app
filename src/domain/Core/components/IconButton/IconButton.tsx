import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Prop {
    icon?: string
}

export const IconButton: React.FC<Prop> = ({ icon }) => {
    const iconName = icon ? icon : 'heart-o'
    return (
        <TouchableWithoutFeedback>
            <Icon name={iconName} size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )
}

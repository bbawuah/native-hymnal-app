import React from 'react'
import { TouchableWithoutFeedback, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Prop {
    heart: string
}

export const FavouriteButton: React.FC<Prop> = ({ heart }) => {
    return (
        <TouchableWithoutFeedback>
            <Icon name={heart} size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )
}

import React from 'react'
import { TouchableWithoutFeedback, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const FavouriteButton: React.FC = () => {
    return (
        <TouchableWithoutFeedback>
            <Icon name="heart" size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )
}

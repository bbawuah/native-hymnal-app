import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Prop {
    icon?: string
}

export const IconButton: React.FC<Prop> = ({ icon = 'default' }) => {
    const [iconName, setIconName] = useState(icon)
    return (
        <TouchableWithoutFeedback onPress={() => handleIconName()}>
            <Icon name={iconName} size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )

    function handleIconName() {
        // Plaats een liejde in favorieten
        if (iconName === 'heart-o') {
            setIconName('heart')
        } else if (iconName === 'heart') {
            // Verwijder een liedje uit favorierten
            setIconName('heart-o')
        }
    }
}

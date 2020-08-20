import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react'

interface Prop {
    icon?: string
    number?: string
}

export const IconButton: React.FC<Prop> = observer(({ icon = 'test', number }) => {
    const [iconName, setIconName] = useState(icon)

    return (
        <TouchableWithoutFeedback onPress={() => favoriteSong()}>
            <Icon name={iconName} size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )

    async function favoriteSong() {
        // Plaats een liejde in favorieten
        if (iconName === 'heart-o') {
            await fetch('http://localhost:8000/song:id', {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    number: number,
                    favorite: true,
                }),
            })
            setIconName('heart')
        } else if (iconName === 'heart') {
            // Verwijder een liedje uit favorierten
            await fetch('http://localhost:8000/song:id', {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    number: number,
                    favorite: false,
                }),
            })
            setIconName('heart-o')
        }
    }
})

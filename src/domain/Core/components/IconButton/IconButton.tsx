import React, { useState, useEffect, useContext } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react'
import State from '../../../../store/store'

interface Prop {
    icon?: string
    number?: string
}

interface HandleList {
    action: boolean
    list: string[]
}

export const IconButton: React.FC<Prop> = observer(({ icon = 'test', number }) => {
    const [iconName, setIconName] = useState(icon)
    const state = useContext(State)

    return (
        <TouchableWithoutFeedback onPress={() => favoriteSong()}>
            <Icon name={iconName} size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )

    async function favoriteSong() {
        // Plaats een liejde in state

        if (iconName === 'heart-o') {
            if (number) {
                console.log('song is added')
                state.addSong(number)
            }

            try {
                await AsyncStorage.setItem('number', JSON.stringify(state.favoriteList))
            } catch (e) {
                console.log(e)
            }
            setIconName('heart')
        } else if (iconName === 'heart') {
            // Verwijder een liedje uit favorierten
            const oldFavorites = await AsyncStorage.getItem('number')

            if (number) {
                state.removeSong(number)
            }

            if (oldFavorites) {
                const oldFavoriteListArray = Array.from(JSON.parse(oldFavorites))
                for (let i = 0; i < oldFavoriteListArray.length; i++) {
                    if (oldFavoriteListArray[i] === number) {
                        const newFavoriteList = oldFavoriteListArray.filter(num => num !== number)
                        console.log(`removed song`)
                        await AsyncStorage.setItem('number', JSON.stringify(newFavoriteList))
                    }
                }
            }

            setIconName('heart-o')
        }
    }
})

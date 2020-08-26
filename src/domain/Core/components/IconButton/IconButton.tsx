import React, { useState, useContext } from 'react'
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
        const oldFavorites = await AsyncStorage.getItem('number')

        if (iconName === 'heart-o') {
            if (number) {
                state.addSong(number)
            }
            if (oldFavorites) {
                const oldFavoriteListArray = Array.from(JSON.parse(oldFavorites))
                const updatedArray = Array.from(new Set(oldFavoriteListArray.concat(state.favoriteList)))
                try {
                    await AsyncStorage.setItem('number', JSON.stringify(updatedArray))
                    state.replaceList(updatedArray)
                } catch (e) {
                    console.log(e)
                }
            }
            setIconName('heart')
        } else if (iconName === 'heart') {
            if (number) {
                state.removeSong(number)
            }

            if (oldFavorites) {
                const oldFavoriteListArray = Array.from(JSON.parse(oldFavorites))
                const updatedArray = Array.from(new Set(oldFavoriteListArray.concat(state.favoriteList)))
                for (let i = 0; i < updatedArray.length; i++) {
                    if (updatedArray[i] === number) {
                        const newFavoriteList = updatedArray.filter(num => num !== number)
                        state.replaceList(newFavoriteList)
                        await AsyncStorage.setItem('number', JSON.stringify(newFavoriteList))
                    }
                }
            }

            setIconName('heart-o')
        }
    }
})

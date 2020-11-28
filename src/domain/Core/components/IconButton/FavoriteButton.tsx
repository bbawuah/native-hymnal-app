import React, { useContext } from 'react'
import { TouchableWithoutFeedback, StyleProp, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react'
import State from '../../../../store/store'

interface Prop {
    number?: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    style?: StyleProp<{}>
}

export const FavoriteButton: React.FC<Prop> = observer(({ number, style }) => {
    const state = useContext(State)

    return (
        <TouchableWithoutFeedback onPress={() => favoriteSong()}>
            <View style={style}>
                <Icon name={'heart-o'} size={25} color={getIconStyles('heart-o')} />
            </View>
        </TouchableWithoutFeedback>
    )

    function getIconStyles(ref: string) {
        const color = ref === 'heart' ? '#FC8181' : '#757575'

        return color
    }

    async function favoriteSong() {
        const oldFavorites = await AsyncStorage.getItem('number')
        // Add number to state
        if (number) {
            state.addSong(number)
            // Get old songs from state and set new favorite list in localStorage
            if (oldFavorites) {
                const oldFavoriteListArray = Array.from(JSON.parse(oldFavorites))
                const updatedArray = Array.from(new Set(oldFavoriteListArray.concat(state.favoriteList)))
                try {
                    await AsyncStorage.setItem('number', JSON.stringify(updatedArray))
                    state.replaceList(updatedArray)
                } catch (e) {
                    console.log(e)
                }
            } else {
                //  set new favorite list in localStorage
                const song: string[] = [number]
                try {
                    await AsyncStorage.setItem('number', JSON.stringify(song))
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
})

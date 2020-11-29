import React, { useContext } from 'react'
import { TouchableWithoutFeedback, StyleProp, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react'
import State from '../../../../store/store'
import { colors } from '../../../utils/colors'

interface Prop {
    number?: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    style?: StyleProp<{}>
}

export const FavoritedButton: React.FC<Prop> = observer(({ number, style }) => {
    const state = useContext(State)

    return (
        <TouchableWithoutFeedback onPress={() => favoriteSong()}>
            <View style={style}>
                <Icon name={'heart'} size={25} color={getIconStyles('heart')} />
            </View>
        </TouchableWithoutFeedback>
    )

    function getIconStyles(ref: string) {
        const color = ref === 'heart' ? '#FC8181' : colors.tint.grey

        return color
    }

    async function favoriteSong() {
        const oldFavorites = await AsyncStorage.getItem('number')

        if (number) {
            state.removeSong(number)
            if (oldFavorites) {
                const oldFavoriteListArray = Array.from(JSON.parse(oldFavorites))
                const updatedArray = Array.from(new Set(oldFavoriteListArray.concat(state.favoriteList)))
                const newFavoriteList = updatedArray.filter(num => num !== number)
                state.replaceList(newFavoriteList)
                await AsyncStorage.setItem('number', JSON.stringify(newFavoriteList))
            }
        }
    }
})

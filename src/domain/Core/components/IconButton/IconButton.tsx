import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import data from '../../../../data/hymns.json'
import { observer } from 'mobx-react'
import { FavoriteState } from '../../../../store/store'
import { Song } from '../../../../models/Song'

interface Prop {
    icon?: string
    number?: string
    favoriteState?: FavoriteState
}

export const IconButton: React.FC<Prop> = observer(({ icon = 'test', number, favoriteState }) => {
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
            favoriteState?.addSong(getSong(number))
            console.log(favoriteState?.favoriteList())
        } else if (iconName === 'heart') {
            // Verwijder een liedje uit favorierten
            favoriteState?.removeSong(getSong(number))
            console.log(favoriteState?.favoriteList())

            setIconName('heart-o')
        }
    }
})

export function getSong(numberSong: string | undefined): Song {
    let song: Song = {
        number: 'test',
        title: 'test',
        songEN: 'test',
        SongTWI: 'test',
    }
    if (numberSong) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].number === numberSong) {
                song = data[i]
            }
        }
    }
    return song
}

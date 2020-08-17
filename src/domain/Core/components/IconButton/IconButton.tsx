import React, { useState, useContext } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import data from '../../../../data/hymns.json'
import { observer } from 'mobx-react'
import { Song } from '../../../../models/Song'
import State from '../../../../store/store'

interface Prop {
    icon?: string
    number?: string
}

export const IconButton: React.FC<Prop> = observer(({ icon = 'test', number }) => {
    const [iconName, setIconName] = useState(icon)
    const state = useContext(State)

    return (
        <TouchableWithoutFeedback onPress={() => handleIconName()}>
            <Icon name={iconName} size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )

    function handleIconName() {
        // Plaats een liejde in favorieten
        if (iconName === 'heart-o') {
            setIconName('heart')
            state.addSong(getSong(number))
            console.log(state.favoriteList.length)
        } else if (iconName === 'heart') {
            // Verwijder een liedje uit favorierten
            state.removeSong(getSong(number))
            console.log(state.favoriteList.length)
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

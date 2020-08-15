import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native'
import { FavouriteButton } from '../FavoriteButton/FavouriteButton'

interface Song {
    number: number
    title: string
    heart: string
    onPress?: () => void
}

export const Song: React.FC<Song> = ({ number, title, heart, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.song}>
                <Text style={styles.text}>{number}</Text>
                <Text style={styles.text}>{title}</Text>
                <FavouriteButton heart={heart} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    song: {
        width: '90%',
        height: 75,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 1,
        borderWidth: 0,
    },
    text: {
        color: '#555',
        fontSize: 17,
    },
})

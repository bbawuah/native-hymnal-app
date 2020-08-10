import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Alert, View, Text, StyleSheet } from 'react-native'
import { FavouriteButton } from '../FavoriteButton/FavouriteButton'

interface Song {
    number: number
    title: string
}

export const Song: React.FC<Song> = ({ number, title }) => {
    return (
        <TouchableOpacity
            onPress={() =>
                Alert.alert('Clicked', `You pressed song title ${title}`, [
                    {
                        text: 'Clicked a song',
                        onPress: () => console.log(`You pressed song title ${title}`),
                    },
                ])
            }
        >
            <View style={styles.song}>
                <Text>{number}</Text>
                <Text>{title}</Text>
                <FavouriteButton />
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
})

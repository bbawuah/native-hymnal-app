import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StyleProp } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FavoriteButton } from '../IconButton/FavoriteButton'
import { FavoritedButton } from '../IconButton/FavoritedButton'
import { observer } from 'mobx-react'
import State from '../../../../store/store'

interface Container {
    number?: string
    settingsIcon?: string
    title: string
    icon: string
    style?: StyleProp<any>
    onPress?: () => void
}

export const Container: React.FC<Container> = observer(
    ({ number = 'test', settingsIcon = 'test', title, onPress, style }) => {
        const state = useContext(State)

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={getStyles()}>
                    {number ? (
                        <Text style={styles.text}>{number}</Text>
                    ) : (
                        <Icon size={25} name={settingsIcon} color={getIconStyles(settingsIcon)} />
                    )}
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{title}</Text>
                    </View>
                    {state.favoriteList.includes(number) ? (
                        <FavoritedButton number={number} />
                    ) : (
                        <FavoriteButton number={number} />
                    )}
                </View>
            </TouchableOpacity>
        )

        function getStyles() {
            return [styles.container, style]
        }

        function getIconStyles(ref: string) {
            const color = ref === 'heart' ? '#FC8181' : '#757575'

            return color
        }
    }
)

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 85,
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
    textContainer: {
        width: 250,
    },
    text: {
        color: '#555',
        fontSize: 17,
    },
    favoriteButton: {
        zIndex: 99999,
    },
})

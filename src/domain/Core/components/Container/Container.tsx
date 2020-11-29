import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, useColorScheme } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FavoriteButton } from '../IconButton/FavoriteButton'
import { FavoritedButton } from '../IconButton/FavoritedButton'
import { observer } from 'mobx-react'
import State from '../../../../store/store'
import { colors } from '../../../utils/colors'

interface Container {
    number?: string
    settingsIcon?: string
    title: string
    icon: string
    style?: StyleProp<any>
    onPress?: () => void
}

export const Container: React.FC<Container> = observer(
    ({ number, settingsIcon = 'test', icon, title, onPress, style }) => {
        const state = useContext(State)
        const isDarkMode = useColorScheme() === 'dark'

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={getStyles()}>
                    {number ? (
                        <Text style={getTextColor()}>{number}</Text>
                    ) : (
                        <Icon size={25} name={settingsIcon} color={getIconStyles(settingsIcon)} />
                    )}
                    <View style={styles.textContainer}>
                        <Text style={getTextColor()}>{title}</Text>
                    </View>
                    {getIcon(number)}
                </View>
            </TouchableOpacity>
        )

        function getStyles() {
            const backgroundColor = isDarkMode ? colors.tint.darkGrey : colors.tint.lightGrey
            const shadowColor = isDarkMode ? colors.tint.white : colors.tint.black
            return [{ backgroundColor }, { shadowColor }, styles.container, style]
        }

        function getIconStyles(ref: string) {
            const color = ref === 'heart' ? '#FC8181' : colors.tint.grey

            return color
        }

        function getIcon(songNumber: string | undefined) {
            if (songNumber) {
                if (state.favoriteList.includes(songNumber)) {
                    return <FavoritedButton number={songNumber} />
                }

                return <FavoriteButton number={songNumber} />
            }
            return <Icon size={25} name={icon} color={getIconStyles(settingsIcon)} />
        }

        function getTextColor() {
            const color = isDarkMode ? colors.tint.white : colors.tint.black
            return [styles.text, { color }]
        }
    }
)

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 85,
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
        borderWidth: 0,
    },
    textContainer: {
        width: 250,
    },
    text: {
        color: colors.tint.darkText,
        fontSize: 17,
    },
    favoriteButton: {
        zIndex: 99999,
    },
})

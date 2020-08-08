import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'

export const Menu: React.FC = () => {
    return (
        <TouchableWithoutFeedback
            onPress={() =>
                Alert.alert('Alert title', 'You pressed on the menu', [
                    {
                        text: 'Ok',
                        onPress: () => console.log('Pressed'),
                    },
                ])
            }
        >
            <Icon name="navicon" size={25} style={styles.menu} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        right: 20,
        bottom: 10,
        color: '#FFF',
    },
})

import React from 'react'
import { TouchableWithoutFeedback, Alert, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const SearchButton: React.FC = () => {
    return (
        <TouchableWithoutFeedback
            onPress={() =>
                Alert.alert('Alert title', 'You pressed on the go back button', [
                    {
                        text: 'Ok',
                        onPress: () => console.log('Pressed'),
                    },
                ])
            }
        >
            <Icon name="search" size={25} style={styles.icon} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 12,
        color: '#757575',
    },
})

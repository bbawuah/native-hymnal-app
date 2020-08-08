import React from 'react'
import { TouchableWithoutFeedback, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const FavouriteButton: React.FC = () => {
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
            <Icon name="heart" size={25} color="#757575" />
        </TouchableWithoutFeedback>
    )
}

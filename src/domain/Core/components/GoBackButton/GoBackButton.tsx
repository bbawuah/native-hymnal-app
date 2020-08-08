import React from 'react'
import { TouchableWithoutFeedback, Alert, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Props {
    backOption?: boolean
}

export const GoBackButton: React.FC<Props> = ({ backOption = false }) => {
    const goBack = backOption
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
            <Icon name="angle-left" size={25} style={styles.backButton} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 20,
        bottom: 13,
        color: '#FFF',
    },
})

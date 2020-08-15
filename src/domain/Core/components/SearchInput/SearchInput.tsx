import { StyleSheet, View, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SearchButton } from '../SearchButton/SearchButton'
import { CloseButton } from '../CloseButton/CloseButton'

export const SearchInput: React.FC = () => {
    const [value, setValue] = useState('Enter a search term')

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TouchableOpacity>
                    <SearchButton style={getSearchStyles()} />
                </TouchableOpacity>
            </View>
            <TextInput onChangeText={text => setValue(text)} value={value} style={styles.input} />
            <View style={styles.close}>
                <TouchableOpacity onPress={() => setValue('')}>
                    <CloseButton style={closeButtonStyles()} />
                </TouchableOpacity>
            </View>
        </View>
    )

    function closeButtonStyles() {
        const color = value === '' ? '#A9A9A9' : '#FC8181'
        return { color }
    }

    function getSearchStyles() {
        const color = value === '' ? '#A9A9A9' : '#555'
        return { color }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    input: {
        height: 50,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#ECECEC',
        borderWidth: 0,
        color: '#A9A9A9',
        fontSize: 17,
        paddingLeft: 45,
    },
    search: {
        zIndex: 1,
        position: 'absolute',
        top: '25%',
        marginLeft: 5,
    },
    close: {
        zIndex: 1,
        position: 'absolute',
        top: '25%',
        right: 0,
        marginRight: 5,
    },
})

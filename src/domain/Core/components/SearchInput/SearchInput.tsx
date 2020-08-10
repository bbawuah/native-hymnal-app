import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { SearchButton } from '../SearchButton/SearchButton'

export const SearchInput: React.FC = () => {
    const [value, setValue] = useState('Enter a search term')
    return (
        <TouchableOpacity style={styles.container}>
            <SearchButton style={styles.search} />
            <TextInput onChangeText={text => setValue(text)} value={value} style={styles.input} />
        </TouchableOpacity>
    )
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
})

import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

function SearchBar({ term, onTermChange, onTermSubmit }) {
    
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.iconStyle} />

            <TextInput
                style={styles.searchContainer}
                placeholder='Search' 
                value={term}
                onChangeText={(newTerm )=> onTermChange(newTerm)}
                // autoCapitalsize={false}
                onEndEditing={onTermSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "rgb(230 230 230)",
        borderRadius: 8,
        margin: 13,
        gap: 9,
        paddingHorizontal: 5,
        overflow: 'hidden'

    },
    searchContainer: {
        // paddingHorizontal: 5
        fontSize: 20,
        flex: 1,
        
    },
    iconStyle: {
        color: 'black',
        fontSize: 30,
        

    }
})

export default SearchBar

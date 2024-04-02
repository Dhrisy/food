import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ListCard from '../screens/ListCard'
import { withNavigation } from 'react-navigation';

function Results({ results, navigation }) {
    
    return (
        <View>
            <FlatList

                data={results.local_results}
                keyExtractor={(results) => results.name}
                renderItem={(item, index) => {
                  
                    return <TouchableOpacity
                        onPress={() => {

                            navigation.navigate('ResultDetails', {id: item.item});
                        }}
                    >

                        <ListCard
                            title={item.item.title}
                            cardImage={{ uri: item.item.thumbnail }}
                            star={item.item.rating} 
                            review={item.item.reviews}
                            />
                    </TouchableOpacity>
                }

                }
            />
            <View style={styles.divider}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        margin: 12,
        height: 2,
        backgroundColor: 'rgb(230 230 230)'
    },
})

export default Results

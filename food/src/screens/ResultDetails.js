import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function ResultDetails({ navigation }) {
    const id = navigation.getParam('id');



    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>{id.title}</Text>
            <Image
                style={styles.imgStyle}
                source={{ uri: id.thumbnail }} />
                <Text style={styles.desHeading}>Description</Text>
            <Text style={styles.description}>{id.description}</Text>
            <Text style={styles.address}>Address: {id.address}</Text>




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        gap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center"
    },
    imgStyle: {
        height: 250,
        width: 'auto'
    },
    description: {
        fontSize: 16,
        color: 'grey'

    },
    desHeading: {
        fontSize: 20,
        fontWeight: '500'
    },
    address: {

    }
})

export default ResultDetails;

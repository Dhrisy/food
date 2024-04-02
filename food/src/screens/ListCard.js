import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function ListCard({ title, cardImage, star, review }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}

                source={cardImage}
            />
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={styles.subTitleConatiner}>

                <Text style={styles.subTitle}>{star} stars</Text>
                <Text style={styles.subTitle}>{review} Reviews</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 'auto',
        width: 'auto',
        marginHorizontal: 20,
        gap: 8,
        marginVertical: 10,
        padding: 7,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    headingStyle: {
        fontSize: 20,
        fontWeight: "600",
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: "600"
    },
    subTitle: {
        color: "grey",
    },

    imageStyle: {
        height: 250,
        width: 'auto',
        objectFit: 'cover',

    },
    subTitleConatiner: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15
        // backgroundColor: 'red'
    }
})

export default ListCard

import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Tempo(props) {

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Data: {props.data.date}</Text>
            <Text style={styles.text}>Min: {props.data.min}</Text>
            <Text style={styles.text}>Máx: {props.data.max}</Text>
            <Text style={styles.text}>Tempo: {props.data.description}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: '#FFF'
    }

})

export default Tempo
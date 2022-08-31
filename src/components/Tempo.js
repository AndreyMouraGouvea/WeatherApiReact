import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Tempo(props) {

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Data: {props.data.date}</Text>
            <Text style={styles.text}>Min: {props.data.min}°C</Text>
            <Text style={styles.text}>Máx: {props.data.max}°C</Text>
            <Text style={styles.text}>Descrição: {props.data.description}</Text>
            <Text style={styles.text}>Data: Amanhã: {props.data2.date}</Text>
            <Text style={styles.text}>Min: {props.data2.min}°C</Text>
            <Text style={styles.text}>Máx: {props.data2.max}°C</Text>
            <Text style={styles.text}>Descrição: {props.data2.description}</Text>
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
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function Tempo() {

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Min:</Text>
            <Text style={styles.text}>Máx:</Text>
            <Text style={styles.text}>Descrição:</Text>
            <Text style={styles.text}>Min:</Text>
            <Text style={styles.text}>Min:</Text>
            <Text style={styles.text}>Min:</Text>
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
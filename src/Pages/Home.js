import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Tempo from '../components/Tempo'
import API from '../components/Api'

function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.component}>
                <Text style={styles.text}>Previsão do Tempo</Text>
            </View>
            <View style={styles.component}>
                <TextInput style={styles.input}
                    placeholder='Digite sua cidade'
                    placeholderTextColor='#FFF'
                />
            </View>
            <View style={styles.component}>
                <TouchableOpacity>
                    <Text style={styles.text}>Buscar</Text>
                </TouchableOpacity>
                <Tempo />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    component: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'purple',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    input: {
        fontSize: 20,
        color: '#FFF'
    },
    text: {
        fontSize: 20,
        color: '#FFF'

    }
})

export default Home
import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Tempo from '../components/Tempo'
import API, {KEY} from '../components/Api'

function Home() {

    const [city, setCity] = useState('');
    const [result, setResult] = useState('');

    async function handleCity() {

        const response = await API.get(`weather?array_limit=2&fields=only_results,temp,city_name,forecast,description
        ,max,min,date&key=${KEY}&city_name=${city}`)
        setResult(response.data.forecast[0]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.component}>
                <Text style={styles.text}>Previsão do Tempo</Text>
            </View>
            <View style={styles.component}>
                <TextInput style={styles.input}
                    placeholder='Digite sua cidade'
                    placeholderTextColor='#FFF'
                    onChangeText={(value)=>setCity(value)}
                />
            </View>
            <View style={styles.component}>
                <TouchableOpacity onPress={handleCity}>
                    <Text style={styles.text}>Buscar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.component}>
                <Tempo data={result} />
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
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#FFF'

    }
})

export default Home
import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Tempo from '../components/Tempo'
import API, { KEY } from '../components/Api'

function Home() {

    const [city, setCity] = useState('');
    const [result, setResult] = useState('');
    const [result2, setResult2] = useState('');

    async function handleCity() {

        const response = await API.get(`weather?array_limit=10&fields=only_results,temp,city_name,forecast,description
        ,max,min,date&key=${KEY}&city_name=${city}`)
        setResult(response.data.forecast);
        setResult2(response.data.forecast[1]);
    }

    const Divider = () => {
        return (
            <View style={{ marginBottom: 10, borderBottomColor: 'red', borderWidth: 2 }}>
            </View>
        )
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
                    onChangeText={(value) => setCity(value)}
                />
            </View>
            <View style={styles.component}>
                <TouchableOpacity onPress={handleCity}>
                    <Text style={styles.text}>Buscar</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.component}>
                <Tempo data={result} data2={result2}/> 
            </View> */}
            <FlatList
                data={result}
                ItemSeparatorComponent={Divider}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={styles.listtext}>
                                Data: {item.date}
                            </Text>
                            <Text style={styles.listtext}>
                                Min: {item.min}
                            </Text>
                            <Text style={styles.listtext}>
                                Máx: {item.max}
                            </Text>
                            <Text style={styles.listtext}>
                                Descrição: {item.description}
                            </Text>
                        </View>
                    );
                }}
            />
        
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
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

    },
    listtext: {
        fontSize: 18,
        color: '#FFF'
    },
    listContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home
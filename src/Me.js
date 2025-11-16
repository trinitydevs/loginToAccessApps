import React, { useState } from "react";

import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Me({ navigation }) {

    function usuario() {
        const dados = localStorage.getItem("usuario");
        const usuario = JSON.parse(dados);

        return usuario.nome;
    }

    return (
        <View style={styles.container}>
            <View style={styles.me}>
                <Text style={styles.textName}>Olá, {usuario()}!</Text>
            </View>

            <View style={styles.navigator}>
                <Text style={styles.navigatorTitle}>Aplicativos</Text>
                <View style={styles.navigatorCard}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Imc')}>
                        <Image source={require('../assets/imc.png')} style={styles.image} />
                        <Text>IMC</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('ToDo')}>
                        <Image source={require('../assets/checklist.png')} style={styles.image} />
                        <Text onPress={() => navigation.navigate('ToDo')}>Tarefas</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.navigatorCard}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Phrases')}>
                        <Image source={require('../assets/abc.png')} style={styles.image} />
                        <Text onPress={() => navigation.navigate('Phrases')}>Frases</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Temperature')}>
                        <Image source={require('../assets/high-temperature.png')} style={styles.image} />
                        <Text onPress={() => navigation.navigate('Temperature')}>Temperatura</Text>
                    </TouchableOpacity>
                </View>
            <TouchableOpacity
                style={styles.details}
                onPress={() => navigation.navigate('Details')}>
                <Text style={styles.detailsText} onPress={() => navigation.navigate('Details')}>Detalhes</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
    },

    me: {
        backgroundColor: '#2168ecff',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },

    textName: {
        color: '#fff',
        fontWeight: '600',
    },

    navigatorTitle: {
        fontWeight: '600',
    },

    navigator: {
        backgroundColor: '#e7e7e7ff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 5,
        padding: 30,
    },

    navigatorCard: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    },

    card: {
        backgroundColor: '#d4d4d4ff',
        width: 110,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        borderRadius: 4,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 5,
        boxShadow: '0px 4px 4px rgba(42, 74, 100, 0.25)',
    },

    button: {
        backgroundColor: '#181e29ff',
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 4,
        width: 100,
        marginTop: 10,
        position: 'absolute',
        bottom: 20,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '400',
        textAlign: 'center',
    },

    image: {
        width: 30,
        height: 30,
    },

    details: {
        backgroundColor: '#2168ecff',
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 4,
        width: 235,
        marginTop: 10,
    },

    detailsText: {
        color: '#fff',
        fontWeight: '400',
        textAlign: 'center',
    },
});
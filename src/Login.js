import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar() {
        const dados = localStorage.getItem("usuario");

        if (!dados) {
            alert("Nenhum usuário cadastrado.");
            return;
        }

        const usuario = JSON.parse(dados);

        if (usuario.email === email && usuario.senha === senha) {
            alert("Login realizado!");
            navigation.navigate("Me");
        } else {
            alert("Credenciais inválidas");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça login na plataforma</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={logar}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.text} onPress={() => navigation.navigate('Home')}>
                Cadastrar-se na plataforma
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', marginTop: '10%' },
    title: { fontSize: 23, fontWeight: '600', paddingBottom: 20 },
    input: { width: 300, padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 12 },
    text: { paddingTop: 25, fontWeight: "600", color: "#2e608f" },
    button: { width: 300, padding: 12, backgroundColor: "#2168ec", borderRadius: 4 },
    buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});

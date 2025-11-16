import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function Home({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar() {

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoUsuario = { nome, email, senha };

    // Salvando no localStorage
    localStorage.setItem("usuario", JSON.stringify(novoUsuario));

    alert("Usuário cadastrado!");

    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se na plataforma</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

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

      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.text} onPress={() => navigation.navigate('Login')}>
        Fazer login na plataforma
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

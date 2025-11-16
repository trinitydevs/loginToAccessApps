import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Details({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Carregar dados do usuário ao entrar na tela
  useEffect(() => {
    const dados = localStorage.getItem("usuario");

    if (dados) {
      const user = JSON.parse(dados);
      setNome(user.nome);
      setEmail(user.email);
      setSenha(user.senha);
    }
  }, []);

  // Salvar alterações
  function salvar() {
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    const atualizado = { nome, email, senha };

    localStorage.setItem("usuario", JSON.stringify(atualizado));

    alert("Informações atualizadas!");

    navigation.navigate("Me");
  }

  // Excluir usuário e sessão
  function deletar() {
    const confirm = window.confirm("Tem certeza que deseja deletar sua conta?");

    if (!confirm) return;

    localStorage.removeItem("usuario");

    alert("Conta excluída.");

    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar as minhas informações</Text>

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

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#cc3c48ff" }]} onPress={deletar}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', marginTop:'10%' },
  title:{ fontSize:23, fontWeight:'600', paddingBottom:20 },
  input:{ width:300, padding:12, borderWidth:1, borderRadius:8, marginBottom:12 },
  button:{ width:300, padding:12, backgroundColor:"#2168ec", borderRadius:4, marginBottom:12 },
  buttonText:{ color:"#fff", textAlign:"center", fontWeight:"bold" }
});

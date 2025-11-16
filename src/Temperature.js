import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Temperature({ navigation }) {
  const [valor, setValor] = useState("");
  const [escala, setEscala] = useState("celsius");

  const converter = () => {
    const temp = parseFloat(valor);
    if (isNaN(temp)) return "";

    switch (escala) {
      case "celsius":
        return `
Fahrenheit: ${(temp * 9 / 5 + 32).toFixed(2)}
Kelvin: ${(temp + 273.15).toFixed(2)}
        `;
      case "fahrenheit":
        return `
Celsius: ${((temp - 32) * 5 / 9).toFixed(2)}
Kelvin: ${(((temp - 32) * 5 / 9) + 273.15).toFixed(2)}
        `;
      case "kelvin":
        return `
Celsius: ${(temp - 273.15).toFixed(2)}
Fahrenheit: ${(((temp - 273.15) * 9 / 5) + 32).toFixed(2)}
        `;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Temperatura</Text>

      <Image
        source={require('../assets/temperature.png')}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a temperatura"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Picker
        selectedValue={escala}
        onValueChange={(itemValue) => setEscala(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Celsius" value="celsius" />
        <Picker.Item label="Fahrenheit" value="fahrenheit" />
        <Picker.Item label="Kelvin" value="kelvin" />
      </Picker>

      <Text style={styles.result}>{converter()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },

  input: {
    width: "80%",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 20,
    outlineColor: '#4879ff7a',
  },
  
  picker: {
    width: "80%",
    backgroundColor: "#fff",
    marginBottom: 20,
    height: 40,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    outlineColor: '#4879ff7a',
  },

  result: {
    fontSize: 19,
    marginTop: 20,
    textAlign: "center",
    width: "100%",
    backgroundColor: "#92E3A9",
    color: "#1f1f1fff",
    borderRadius: 5,
    fontWeight: "600",
    fontFamily: "Arial",
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

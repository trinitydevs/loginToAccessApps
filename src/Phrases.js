import { StyleSheet, Text, View, Pressable, Image, useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';
import rangePicker from '../util/rangePicker.js';

export default function Phrases({ navigation }) {

  const [phrase, setPhrase] = useState('As frases são criadas por escritores da literatura brasileira.')
  const [list, setList] = useState([
    "“A vida é a arte do encontro.” — Vinicius de Moraes",
    "“Liberdade é pouco. O que eu desejo ainda não tem nome.” — Clarice Lispector",
    "“E quando não houver vento, reme.” — Machado de Assis",
    "“Penso, logo existo.” — Fernando Pessoa (português, mas muito usado no BR)",
    "“O correr da vida embrulha tudo.” — Guimarães Rosa",
    "“Ser feliz sem motivo é a mais autêntica forma de felicidade.” — Carlos Drummond de Andrade",
    "“Viver é muito perigoso.” — Guimarães Rosa",
    "“O tempo é um rio que me arrasta, mas eu sou o rio.” — Jorge Luis Borges (amado na lit. BR)",
    "“Aos outros dou o direito de ser como são. A mim, dou o dever de ser melhor.” — Chico Xavier",
    "“Não se pode possuir maior dom que o da esperança.” — José de Alencar"
  ]);


  return (
    <View style={style.app}>
      <View style={style.phraseContainer}>
        <Text style={style.phrase}>Frases</Text>
      </View>
        <Image style={style.image} source={require('../assets/letters.png')} />
      <View style={style.card}>
        <Text style={style.cardText}>{phrase}</Text>
      </View>
      <View style={style.row}>
        <Pressable style={style.btn} onPress={() => {
          setPhrase(list[rangePicker(0, list.length - 1)])
        }}>
          <Text style={style.btnLabel}>Gerar</Text>
        </Pressable>
        <Pressable style={style.btn} onPress={() => {
          setPhrase('')
        }}>
          <Text style={style.btnLabel}>Limpar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 20,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
  },

  phraseContainer: {
    width: '100%',
    backgroundColor: '#ffce3cff',
  },

  phrase: {
    fontSize: 22,
    textAlign: 'center',
    color: '#181818ff',
    fontFamily: 'Arial',
    fontWeight: '600',
    padding: 15,
    borderRadius: 5,

  },

  image: {
    width: 170,
    height: 170,
  },

  card: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 350,
    height: 140
  },

  cardText: {
    textAlign: 'center',
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#111010ff',
    backgroundColor: '#e7e7e7ff',
    padding: 20,
    borderRadius: 5,
    minWidth: 300
  },

  btn: {
    backgroundColor: '#FFC100',
    borderRadius: 5,
    padding: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 100,
    height: 40,
    color: '#000000ff'
  },

  btnLabel: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000ff'
  },
});

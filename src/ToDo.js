import { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ToDo({ navigation }){
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () =>{
    if (!task.trim()) return; // evita tarefas vazias
    const now = new Date();
    const formattedDate = now.toLocaleString();
    setTasks([
      ...tasks,
      { key: Math.random().toString(), value: task, date: formattedDate }
    ]);
    setTask('');
  }

  const removeTask = (key) => {
    setTasks(tasks.filter(task => task.key !== key));
  }

  return(
    <View style={style.app}>
      <View style={style.header}></View>
      <Text style={style.title}>Lista de Tarefas</Text>
      <Text style={style.subtitle}>Crie tarefas e organize seu dia!</Text>
      <Image style={style.logo} source={require('../assets/times.png')} />

      <TextInput 
        style={style.input} 
        placeholder='Adicionar nova tarefa...'
        onChangeText={setTask}
        value={task}
      />

      <TouchableOpacity style={style.button} onPress={addTask}>
        <Text style={style.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList style={style.listAll}
        data={tasks}
        renderItem={({item})=>(
          <View style={style.taskRow}>
            <View style={style.taskText}>
              <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
              <Text style={{fontSize: 12, color: '#666'}}>{item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => removeTask(item.key)}>
              <Text style={style.deleteButton}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const style = StyleSheet.create({
  app:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  header:{
    width: '100%',
    height: 50,
    backgroundColor: '#90CAF9',
    marginBottom: 80
  },

  title:{
    fontFamily: 'Arial',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },

  subtitle:{
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },

  logo:{
    width: 200,
    height: 200,
  },

  input:{
  borderRadius: 5,
    height: 37,
    width: 350,
    textAlign: 'center',
    margin: 5,
    outlineStyle: 'none',
    marginBottom: 20,
    backgroundColor: '#ffffffff',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2
  },

  button:{
    backgroundColor: '#62b6faff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
    width: 300,
    outlineStyle: 'none',
  },

  buttonText:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },

  listAll:{
    width: 350,
    flexDirection: 'column',
  },

  taskRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },

  taskText:{
    flexDirection: 'column',
    maxWidth: '85%'
  },

  deleteButton:{
    color: '#e63946',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  }
})
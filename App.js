
import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList
} from 'react-native';
import Formulario from './src/Components/Formulario/Formulario';
import Paciente from './src/Components/Paciente';



const App = () => {
  const [visible, setVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const ModalChange=()=>{
    setVisible(!visible)
    console.log(!visible)
  }

  useEffect(() => {
    console.log(pacientes)
    
  }, [pacientes])

  const getEditCard=(id)=>{
    const pacienteToEdit = pacientes.filter(paciente => paciente.id === id)

    setPaciente(pacienteToEdit[0])
  }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>
          Administrador de citas {'      '}
        <Text style={styles.subtitle}>
          Veterinaria
        </Text>
      </Text>
      <Pressable onPress={ModalChange}
        style={styles.btnPrimary}
      >
        <Text style={styles.btnPrimaryText}>Nueva cita</Text>
      </Pressable>
      {
        pacientes.length === 0 ? 
        <Text style={styles.txtPacientes}>No hay pacientes</Text> 
        : 
        <FlatList style={styles.listado}
          data={pacientes}
          keyExtractor={(item)=> item.id}
          
          renderItem={({item})=><Paciente item={item} modalChange={ModalChange} getEditCard={getEditCard}/>}
        />
      }
      <Formulario  modalVisible={visible} modalChange = {ModalChange} setPacientes={setPacientes} pacientes={pacientes}/> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  subtitle: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnPrimary:{
    backgroundColor: '#6D28D9',
    padding: 12,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnPrimaryText: {
    textAlign: 'center',
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  txtPacientes:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'

  },
  listado:{
    marginTop: 50,
    marginHorizontal: 30
  }
})

export default App;

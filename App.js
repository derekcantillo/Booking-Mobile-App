
import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal
} from 'react-native';
import Formulario from './src/Components/Formulario';



const App = () => {
  const [visible, setVisible] = useState(false)
  
  const ModalChange=()=>{
    setVisible(!visible)
    console.log(!visible)
  }


  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>
          Administrador de citas {'      '}
        <Text style={styles.subtitle}>
          Salón de belleza
        </Text>
      </Text>
      <Pressable onPress={ModalChange}
        style={styles.btnPrimary}
      >
        <Text style={styles.btnPrimaryText}>Nueva cita</Text>
      </Pressable>
      <Formulario  modalVisible={visible} modalChange = {ModalChange}/> 
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
})

export default App;

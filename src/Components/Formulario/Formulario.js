import React, {useState} from 'react'
import {Modal, Text, Pressable, StyleSheet, SafeAreaView, TextInput, View, ScrollView} from 'react-native'
import Campos from './Campo'
import {useForm} from '../../hooks/useForm'

const Formulario = ({modalVisible, modalChange, setPacientes, pacientes}) => {

    const initialFormState = {
        id: Date.now(),
        nombrepaciente: '',
        nombrepropietario: '',
        email: '',
        telefono:'',
        sintomas:'',
        fecha: ''
    }
    
    
   
  return (

    <Modal
        animationType='slide'
        visible={modalVisible}
    >
        <SafeAreaView style={styles.contenido}>
  

                <Text style={styles.titulo}>Nueva <Text style={styles.tituloBold}>Cita</Text></Text>

               
                <ScrollView>
                            <Campos initialFormState={initialFormState} modalChange={modalChange} setPacientes={setPacientes} pacientes={pacientes}/>
                     
                
                <Pressable onPress={modalChange} style={styles.btnClose} >
                    <Text style={styles.txtClose}> X Cancelar</Text>
                </Pressable>

                </ScrollView>
        

        </SafeAreaView>

    </Modal>
  )
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor: '#6D28D9',
        flex: 1,
        paddingBottom: 30
    },
    titulo:{
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        color: '#FFF'
    },
    tituloBold:{
        fontWeight: '900'
    },
    btnClose:{
        
        backgroundColor: '#3c096c',
        padding: 10,
        marginTop: 10,
        marginHorizontal: 30,
        borderRadius: 10
    },
    txtClose:{
        textAlign: 'center',
        color: '#ffff',
        fontWeight: '900',
        textTransform: 'uppercase'

    },
  
  
 
})

export default Formulario
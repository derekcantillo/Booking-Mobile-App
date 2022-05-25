import React, {useState} from 'react'
import {Modal, Text, Pressable, StyleSheet, SafeAreaView, TextInput, View} from 'react-native'


const Formulario = ({modalVisible, modalChange}) => {
   
  return (

    <Modal
        animationType='slide'
        visible={modalVisible}
    >
        <SafeAreaView style={styles.contenido}>
        <Pressable onPress={modalChange} style={styles.btnClose} >
            <Text style={styles.txtClose}>Cerrar</Text>
        </Pressable>
        <Text style={styles.titulo}>Nueva <Text style={styles.tituloBold}>Cita</Text></Text>

            <View style={styles.campo}>
                <Text style={styles.label}>Nombre Cliente</Text>
                <TextInput style={styles.input} placeholder='Nombre del cliente' placeholderTextColor={'#666'}/>
            </View>

        </SafeAreaView>

    </Modal>
  )
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor: '#6D28D9',
        flex: 1
    },
    titulo:{
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    tituloBold:{
        fontWeight: '900'
    },
    btnClose:{
        
        backgroundColor: '#FF0000',
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    txtClose:{
        textAlign: 'center',
        color: '#ffff',
        fontWeight: '900'

    },
    campo:{
        marginTop: 40,
        marginHorizontal: 30,
        marginBottom: 100

    },
    label:{
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'

    },
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15
        
    }
})

export default Formulario
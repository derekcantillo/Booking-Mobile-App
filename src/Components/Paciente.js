import React from 'react'
import {Text, View, StyleSheet, Pressable} from 'react-native'

const Paciente = ({item, modalChange, getEditCard}) => {

    const formateoFecha=(date)=>{
        const newDate = new Date(date)
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return newDate.toLocaleDateString('es-ES', opciones)
    }
  return (
      <View style={styles.cotainer}>
          <View>
          <Text style={styles.label}>Paciente:</Text>
          <Text style={styles.texto}>{item.nombrepaciente}</Text>
          <Text style={styles.fecha}>{formateoFecha(item.fecha)}</Text> 

          </View>

          <View style={styles.buttonContainer}>
              <Pressable style={[styles.btn, styles.btnEdit]} 
                onPress={()=>{
                    getEditCard(item.id)
                    modalChange()

                }} 
              >
                  <Text style={styles.btnTexto}>Editar</Text>
              </Pressable>
              <Pressable style={[styles.btn, styles.btnDelete]} >
                  <Text style={styles.btnTexto}>Eliminar</Text>
              </Pressable>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    cotainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding:20,
        borderRadius: 15,
        borderBottomColor: '#94a3b8'

    },
    label:{
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    texto:{
        color: '#6d28d9',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10

    },
    fecha:{
        color: '#374151'

    },
    buttonContainer:{
        marginTop: 20
    },
    btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20

    },
    btnEdit:{
        backgroundColor: '#F59E0B'

    },
    btnDelete:{
        backgroundColor: '#EF4444'

    },
    btnTexto:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF'
    }

})

export default Paciente
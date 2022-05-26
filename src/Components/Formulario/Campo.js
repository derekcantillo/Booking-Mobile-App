import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, StyleSheet, ScrollView, Button} from 'react-native'
import { useForm } from '../../hooks/useForm'
import DatePicker from 'react-native-date-picker'
const Campos = () => {
    const initialFormState = {
        nombrepaciente: '',
        nombrepropietario: '',
        email: '',
        telefono:'',
        sintomas:'',
        fecha: ''
    }

    const [values, setValues] = useState(initialFormState)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    useEffect(() => {
        
        console.log(values)
    }, [values])
    
    // const handleChange=(text)=>{
    //     setValues({...values, })
    //     console.log(text)
    // }

  return (
      <View>

        <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput style={styles.input} 
                placeholder='Nombre paciente...'
                placeholderTextColor={'#666'} 
                keyboardType={'email-address'} 
                onChangeText={(text) => setValues({...values, nombrepaciente: text}) }
            />
        
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput style={styles.input} 
                placeholder='Nombre propietario...'
                placeholderTextColor={'#666'} 
                keyboardType={'email-address'} 
                onChangeText={(text) => setValues({...values, nombrepropietario: text}) }
            />
        
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput style={styles.input} 
                placeholder='Email propietario...'
                placeholderTextColor={'#666'} 
                keyboardType={'email-address'} 
                onChangeText={(text) => setValues({...values, email: text}) }
            />
        
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Paciente</Text>
            <TextInput style={styles.input} 
                placeholder='Teléfono paciente...'
                placeholderTextColor={'#666'} 
                keyboardType={'numeric'} 
                onChangeText={(text) => setValues({...values, telefono: text}) }
            />
        
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput style={styles.input} 
                placeholder='Síntomas...'
                placeholderTextColor={'#666'} 
                keyboardType={'email-address'} 
                multiline={ true }
                numberOfLines={4}
                name={'sintomas'}
                onChangeText={(text) => setValues({...values, sintomas: text}) }
            />
        
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View  style={styles.picker}>

                <DatePicker
                   
                    date={date}
                    locale='es'
                    onDateChange={(date) => setValues({...values, fecha: date}) }
                />
            </View>
            
        </View>

      </View>
    
  )
}

const styles = StyleSheet.create({
    campo:{
        marginHorizontal: 30,
    },
    label:{
        color: '#FFF',
        marginBottom: 10,
      
        fontSize: 20,
        fontWeight: '600'

    },
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 20,
        marginBottom: 15
        
    },
    picker:{
        padding: 15,
        borderRadius: 20,
        marginBottom: 15,
        backgroundColor: '#FFF',

    }
})

export default Campos
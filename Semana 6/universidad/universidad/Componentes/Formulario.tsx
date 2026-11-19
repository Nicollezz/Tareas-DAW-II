import { View, Text, Alert, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Alumno } from '../Modelos/Alumno'
import api from '../service/Api'

export default function Formulario() {

    const [id, setId] = useState<number>(0)
    const [nombre, setNombre] = useState<string>('')
    const [apellido, setApellido] = useState<string>('')

    const [Carrera, setCarrera] = useState<string>('')

    const [registro, setRegistro] = useState<string>('')

    const [fotoPlataforma, setFotoPlataforma] = useState<string>('')

    const [alumnos, setAlumnos] = useState<Alumno[]>([]);

    async function getAlumno() {

        try {

            console.log('llamando la consulta...')
            const response = await api.get('/alumno')
            setAlumnos(response.data)
        } catch (error) {
          
            Alert.alert('Error al consultar alumnos')
        }
    }

    async function guardarAlumno() {
        try{

            const nuevoAlumno: Alumno = {
                id: 0,
                nombre: nombre,    
                apellido: apellido,
                Carrera: Carrera,
                registro: registro,
                fotoPlataforma: fotoPlataforma
            } 

            const response = await api.post('/alumno', nuevoAlumno)
            getAlumno()
            Alert.alert('Alumno guardado correctamente')

        }
        catch(error){
            Alert.alert('Error al guardar alumno')
        }
    }

    async function eliminarAlumno(id: number) {
        try {
            await api.delete(`/alumno/${id}`);    
            getAlumno();
            Alert.alert('Alumno eliminado correctamente');
        }
        catch (error) {
            Alert.alert('Error al eliminar alumno');
        }      
    }

    useEffect(() => {
        getAlumno();
    }, [])



    return (
        <View>
            <Text>Formulario</Text>

            <TextInput placeholder="ID" value={id.toString()} onChangeText={(text) => setId(parseInt(text) || 0)} />
            <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
            <TextInput placeholder="Apellido" value={apellido} onChangeText={setApellido} />
            <TextInput placeholder="Carrera" value={Carrera} onChangeText={setCarrera} />
            <TextInput placeholder="Registro" value={registro} onChangeText={setRegistro} />
            <Button title="Guardar" onPress={guardarAlumno} />

            {
                alumnos.map((alumno) => (
                    <View key={alumno.id}>
                        <Text>{alumno.nombre} {alumno.apellido}</Text>
                        <Text>{alumno.Carrera}</Text>
                        <Text>{alumno.registro}</Text>
                        <Text>{alumno.fotoPlataforma}</Text>
                        <Button title="Eliminar" onPress={() => eliminarAlumno(alumno.id)} />
                    </View>
                ))
            }
        </View>
    )
}
import { View, Text, Alert, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
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

    const [alumnos, setAlumnos] = useState<Alumno[]>([])

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
        try {
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
        } catch (error) {
            Alert.alert('Error al guardar alumno')
        }
    }

    async function eliminarAlumno(id: number) {
        try {
            await api.delete(`/alumno/${id}`)
            getAlumno()
            Alert.alert('Alumno eliminado correctamente')
        } catch (error) {
            Alert.alert('Error al eliminar alumno')
        }
    }

    useEffect(() => {
        getAlumno()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Formulario Alumno</Text>

            <View style={styles.seccion}>
                <Text style={styles.label}>ID</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    keyboardType="numeric"
                    value={id.toString()}
                    onChangeText={(text) => setId(parseInt(text) || 0)}
                />

                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={nombre}
                    onChangeText={setNombre}
                />

                <Text style={styles.label}>Apellido</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={apellido}
                    onChangeText={setApellido}
                />

                <Text style={styles.label}>Carrera</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={Carrera}
                    onChangeText={setCarrera}
                />

                <Text style={styles.label}>Registro</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={registro}
                    onChangeText={setRegistro}
                />

                <Text style={styles.label}>Foto Plataforma</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={fotoPlataforma}
                    onChangeText={setFotoPlataforma}
                />

                <TouchableOpacity style={styles.btnGuardar} onPress={guardarAlumno}>
                    <Text style={styles.btnTexto}>Guardar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subtitulo}>Alumnos registrados</Text>

            {
                alumnos.map((alumno) => (
                    <View key={alumno.id} style={styles.item}>
                        <Text style={styles.itemNombre}>{alumno.nombre} {alumno.apellido}</Text>
                        <Text style={styles.itemTexto}>Carrera: {alumno.Carrera}</Text>
                        <Text style={styles.itemTexto}>Registro: {alumno.registro}</Text>
                        <Text style={styles.itemTexto}>Foto Plataforma: {alumno.fotoPlataforma}</Text>
                        <TouchableOpacity
                            style={styles.btnEliminar}
                            onPress={() => eliminarAlumno(alumno.id)}
                        >
                            <Text style={styles.btnTextoEliminar}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F1E1',
        padding: 16
    },
    seccion: {
        marginBottom: 20
    },
    titulo: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#2F3E2E',
        marginBottom: 12
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2F3E2E',
        marginBottom: 10
    },
    label: {
        fontSize: 13,
        color: '#3D4C3B',
        marginBottom: 4
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#C8C3B4',
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
        color: '#222222'
    },
    btnGuardar: {
        backgroundColor: '#4B6344',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center'
    },
    btnTexto: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#D6D0C0',
        paddingVertical: 10
    },
    itemNombre: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222'
    },
    itemTexto: {
        fontSize: 13,
        color: '#4A5248',
        marginTop: 2
    },
    btnEliminar: {
        marginTop: 8,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#B85D57',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    btnTextoEliminar: {
        color: '#B85D57',
        fontSize: 12,
        fontWeight: 'bold'
    }
})
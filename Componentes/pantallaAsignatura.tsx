import { View, Text, Alert, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Asignatura } from '../Modelos/Asignatura'
import api from '../service/Api'

export default function FormularioAsignatura() {

    const [idasignatura, setIdasignatura] = useState<number>(0)
    const [nombre, setNombre] = useState<string>('')
    const [codigo, setCodigo] = useState<string>('')
    const [idestudiante, setIdestudiante] = useState<number>(0)

    const [asignaturas, setAsignaturas] = useState<Asignatura[]>([])

    async function getAsignaturas() {
        try {
            console.log('llamando la consulta...')
            const response = await api.get('/asignatura')
            setAsignaturas(response.data)
        } catch (error) {
            Alert.alert('Error al consultar asignaturas')
        }
    }

    async function guardarAsignatura() {
        try {
            const nuevaAsignatura: Asignatura = {
                idasignatura: 0,
                nombre: nombre,
                codigo: codigo,
                idestudiante: idestudiante
            }

            const response = await api.post('/asignatura', nuevaAsignatura)
            getAsignaturas()
            Alert.alert('Asignatura guardada correctamente')
        } catch (error) {
            Alert.alert('Error al guardar asignatura')
        }
    }

    async function eliminarAsignatura(id: number) {
        try {
            await api.delete(`/asignatura/${id}`)
            getAsignaturas()
            Alert.alert('Asignatura eliminada correctamente')
        } catch (error) {
            Alert.alert('Error al eliminar asignatura')
        }
    }

    useEffect(() => {
        getAsignaturas()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Formulario Asignatura</Text>

            <View style={styles.seccion}>
                <Text style={styles.label}>ID Asignatura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ID Asignatura"
                    keyboardType="numeric"
                    value={idasignatura.toString()}
                    onChangeText={(text) => setIdasignatura(parseInt(text) || 0)}
                />

                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={nombre}
                    onChangeText={setNombre}
                />

                <Text style={styles.label}>Código</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={codigo}
                    onChangeText={setCodigo}
                />

                <Text style={styles.label}>ID Estudiante</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    keyboardType="numeric"
                    value={idestudiante.toString()}
                    onChangeText={(text) => setIdestudiante(parseInt(text) || 0)}
                />

                <TouchableOpacity style={styles.btnGuardar} onPress={guardarAsignatura}>
                    <Text style={styles.btnTexto}>Guardar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subtitulo}>Asignaturas registradas</Text>

            {
                asignaturas.map((asignatura) => (
                    <View key={asignatura.idasignatura} style={styles.item}>
                        <Text style={styles.itemNombre}>{asignatura.nombre}</Text>
                        <Text style={styles.itemTexto}>Código: {asignatura.codigo}</Text>
                        <Text style={styles.itemTexto}>Estudiante: {asignatura.idestudiante}</Text>
                        {asignatura.idasignatura !== undefined && (
                            <TouchableOpacity
                                style={styles.btnEliminar}
                                onPress={() => eliminarAsignatura(asignatura.idasignatura!)}
                            >
                                <Text style={styles.btnTextoEliminar}>Eliminar</Text>
                            </TouchableOpacity>
                        )}
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
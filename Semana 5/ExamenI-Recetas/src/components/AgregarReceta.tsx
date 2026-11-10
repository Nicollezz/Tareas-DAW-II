import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useContextRecetas } from '../provider/RecetasProvider';
import estilos from '../estilos';

export default function AgregarReceta() {

    const { recetas, agregarReceta } = useContextRecetas();

    const [nombre, setNombre] = useState('');
    const [ingrediente1, setIngrediente1] = useState('');
    const [ingrediente2, setIngrediente2] = useState('');
    const [ingrediente3, setIngrediente3] = useState('');
    const [ingrediente4, setIngrediente4] = useState('');
    const [ingrediente5, setIngrediente5] = useState('');

    function callAgregarReceta() {
        const receta = {
            numero: recetas.length + 1,
            nombre: nombre,
            ingredientes: [ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5],
            fecha: new Date().toLocaleDateString(),
        }

        agregarReceta(receta);
        setNombre('');
        setIngrediente1('');
        setIngrediente2('');
        setIngrediente3('');
        setIngrediente4('');
        setIngrediente5('');
    }

    return (
        <View style={estilos.seccion}>
            <Text style={estilos.subtitulo}>1. Agregar Receta</Text>

            <TextInput style={estilos.input} placeholder='Nombre Receta'
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput style={estilos.input} placeholder='Ingrediente 1'
                value={ingrediente1}
                onChangeText={setIngrediente1}
            />
            <TextInput style={estilos.input} placeholder='Ingrediente 2'
                value={ingrediente2}
                onChangeText={setIngrediente2}
            />
            <TextInput style={estilos.input} placeholder='Ingrediente 3'
                value={ingrediente3}
                onChangeText={setIngrediente3}
            />
            <TextInput style={estilos.input} placeholder='Ingrediente 4'
                value={ingrediente4}
                onChangeText={setIngrediente4}
            />
            <TextInput style={estilos.input} placeholder='Ingrediente 5'
                value={ingrediente5}
                onChangeText={setIngrediente5}
            />

            <TouchableOpacity style={estilos.boton} onPress={() => { callAgregarReceta() }}>
                <Text style={estilos.textoBoton}>Agregar</Text>
            </TouchableOpacity>
        </View>
    )
}

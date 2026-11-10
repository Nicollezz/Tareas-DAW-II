import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useContextRecetas } from '../provider/RecetasProvider';
import estilos from '../estilos';

export default function ListaRecetas() {

    const { recetas, eliminarReceta, buscarReceta } = useContextRecetas();
    const [numero, setNumero] = useState('');

    return (
        <View style={estilos.seccion}>
            <Text style={estilos.subtitulo}>2. Lista de Recetas</Text>

            {recetas.length === 0 && (
                <Text style={estilos.texto}>Todavia no hay recetas agregadas.</Text>
            )}

            {recetas.map((receta) => (
                <View key={receta.numero} style={estilos.tarjeta}>
                    <View style={estilos.columna}>
                        <Text style={estilos.texto}>Receta #{receta.numero}</Text>
                        <Text style={estilos.texto}>{receta.nombre}</Text>
                        <Text style={estilos.texto}>{receta.ingredientes.join(', ')}</Text>
                        <Text style={estilos.texto}>Fecha: {receta.fecha}</Text>
                    </View>

                    <TouchableOpacity style={estilos.botonRojo} onPress={() => { eliminarReceta(receta.numero) }}>
                        <Text style={estilos.textoBoton}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <Text style={estilos.subtitulo}>3. Ver Detalle</Text>

            <View style={estilos.fila}>
                <TextInput style={[estilos.input, estilos.columna]} placeholder='Ingresa Nro. Receta'
                    keyboardType='numeric'
                    value={numero}
                    onChangeText={setNumero}
                />

                <TouchableOpacity style={estilos.botonBuscar} onPress={() => { buscarReceta(numero) }}>
                    <Text style={estilos.textoBoton}>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

import { View, Text, ScrollView, StatusBar } from 'react-native';
import RecetasProvider, { useContextRecetas } from './src/provider/RecetasProvider';
import AgregarReceta from './src/components/AgregarReceta';
import ListaRecetas from './src/components/ListaRecetas';
import DetalleReceta from './src/components/DetalleReceta';
import estilos from './src/estilos';

export default function App() {
  return (
    <RecetasProvider>
      <Pantalla />
    </RecetasProvider>
  );
}

function Pantalla() {

  const { seleccionada } = useContextRecetas();

  if (seleccionada !== undefined) {
    return (
      <View style={estilos.pantalla}>
        <StatusBar />
        <ScrollView contentContainerStyle={estilos.contenido}>
          <DetalleReceta />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={estilos.pantalla}>
      <StatusBar />
      <ScrollView contentContainerStyle={estilos.contenido}>
        <Text style={estilos.titulo}>Recetas Culinarias</Text>
        <AgregarReceta />
        <ListaRecetas />
      </ScrollView>
    </View>
  );
}

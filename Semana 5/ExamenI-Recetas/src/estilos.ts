import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#FDECEC' },
  contenido: { padding: 16, width: '100%', maxWidth: 600, alignSelf: 'center' },
  seccion: { backgroundColor: '#FFF6F6', borderRadius: 8, padding: 12, marginBottom: 16 },

  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  subtitulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  texto: { fontSize: 14, marginBottom: 4 },

  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#9EC5FE',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
  },

  boton: { backgroundColor: '#0D6EFD', padding: 12, borderRadius: 6, marginTop: 8 },
  botonBuscar: { backgroundColor: '#0D6EFD', padding: 12, borderRadius: 6, marginBottom: 8 },
  botonRojo: { backgroundColor: '#DC3545', padding: 10, borderRadius: 6 },
  botonGris: { backgroundColor: '#6C757D', padding: 10, borderRadius: 6, flex: 1, marginRight: 8 },
  textoBoton: { color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columna: { flex: 1, marginRight: 8 },
  fila: { flexDirection: 'row', alignItems: 'center' },
});

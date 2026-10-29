export type Idioma = 'es' | 'en';


export interface Palabra {
  es: string;
  en: string;
}


export interface IdiomaContextoTipo {
  idiomaActual: Idioma;
  listaMostrada: string[];
  cambiarAEspanol: () => void;
  cambiarAIngles: () => void;
}
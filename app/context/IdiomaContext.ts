import { createContext } from 'react';

export const IdiomaContext = createContext({
  listaMostrada: [] as string[],
  cambiarAEspanol: () => {},
  cambiarAIngles: () => {},
});
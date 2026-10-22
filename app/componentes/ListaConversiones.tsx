import React from 'react';

interface Props {
  conversiones: { unidad: string; valor: number }[];
}

export const ListaConversiones: React.FC<Props> = ({ conversiones }) => {
  return (
    <ul>
      {conversiones.map((item, index) => (
        <li key={index}>
          {item.unidad}: {item.valor}
        </li>
      ))}
    </ul>
  );
};
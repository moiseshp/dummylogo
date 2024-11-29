import { Logo } from './(types)/logo';
import { Home as HomePage } from './home';
import logosJSON from '@/server/data/logos.json';
// ¿Quieres un prototipo visual de alguno de estos logotipos o ajustar algún detalle?
// Vamos a crear nuestros 5 primeros logos. Como te comenté arriba necesito lo siguiente:
// - Icon y texto en un solo color. Un color diferente por cada logo propuesto
// - Nombre y tamaño del ícono lucide
// - FontFamily y fontWeight del Google Font  de acuerdo al diseño propuesto
// - El nombre del logo

// Debes basarte en:

// - Categoría technology
// - Icono, fuente, y el nombre del logo tengan una adecuada similitud y composición
// - Utiliza la siguiente estructura para entrega un arreglo JSON
// - Para fontWeight, fontSize, iconSize utiliza "number"
// - No se pueden repetir las fuentes de google, los iconos ni el color.

// {
//   id, // uuid
//   name,
//   fontFamily,
//   fontWeight,
//   fontSize,
//   iconName',
//   iconSize,
//   color',
//   category: "technology"
// },

export default function Home() {
  const data: Logo[] = logosJSON;
  // { id: '1', name: '', font: 'Sour Gummy', icon: 'bird' },
  // { id: '2', name: '', font: 'Lobster', icon: 'turtle' },
  // { id: '21', name: '', font: 'Pacifico', icon: 'bug' },
  // { id: '22', name: '', font: 'Borel', icon: 'fish' },

  return (
    <>
      <HomePage data={data} />
    </>
  );
}

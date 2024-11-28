import { Logo } from './(types)/logo';
import { Home as HomePage } from './home';

export default function Home() {
  const data: Logo[] = [
    { id: '1', fontName: 'Sour Gummy', iconName: 'bird' },
    { id: '2', fontName: 'Lobster', iconName: 'turtle' },
    { id: '21', fontName: 'Pacifico', iconName: 'bug' },
    { id: '22', fontName: 'Borel', iconName: 'fish' },
  ];

  const fonts = data.map(({ fontName }) => fontName);

  return (
    <>
      <HomePage data={data} fonts={fonts} />
    </>
  );
}

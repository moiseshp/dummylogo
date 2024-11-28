import { LogoGrid } from './(components)/logo-grid';

export default function Home() {
  const data = [
    { id: 1, fontName: 'Sour Gummy', text: 'Logo 1' },
    { id: 2, fontName: 'Lobster', text: 'Logo 2' },
    { id: 21, fontName: 'Pacifico', text: 'Logo 21' },
    { id: 22, fontName: 'Borel', text: 'Logo 22' },
  ];
  return (
    <>
      <LogoGrid data={data} />
    </>
  );
}

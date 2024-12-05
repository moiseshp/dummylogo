import { Logo } from './(types)/logo';
import { Home as HomePage } from './home';
import logosJSON from '@/server/data/logos.json';

export default function Home() {
  const data: Logo[] = logosJSON;

  return (
    <>
      <HomePage data={data} />
    </>
  );
}

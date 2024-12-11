import { Logo } from './(types)/logo';
import PageClient from './page-client';
import logosJSON from '@/server/data/logos.json';

export default function Page() {
  const data: Logo[] = logosJSON;

  return <PageClient data={data} />;
}

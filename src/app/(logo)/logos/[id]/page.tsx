import { notFound } from 'next/navigation';
import type { Logo } from '@/app/(logo)/(types)/logo';
import PageClient from './page-client';
import logosJSON from '@/server/data/logos.json';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const data: Logo[] = logosJSON;
  const logo = data.find((item) => item.id == params.id);

  if (!logo) {
    notFound();
  }

  return <PageClient data={logo} />;
}

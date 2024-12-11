import { notFound } from 'next/navigation';
import PageClient from './page-client';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  if (params.id !== 'mariafe') {
    notFound();
  }

  return <PageClient />;
}

import * as React from 'react';
import dynamic from 'next/dynamic';
import { IconProps as IconLibProps } from '@phosphor-icons/react';
import { Spinner } from './spinner';

interface IconProps extends IconLibProps {
  name?: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  if (!name) return;
  const IconComponent = dynamic(
    () => import('@phosphor-icons/react').then((module: any) => module[name]),
    { loading: () => <Spinner /> },
  );

  return <IconComponent {...props} />;
};

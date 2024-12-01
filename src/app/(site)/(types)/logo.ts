import { IconWeight } from '@phosphor-icons/react';
import * as React from 'react';

export type Layout = 'top' | 'right' | 'bottom' | 'left';
export interface Logo {
  id: string;
  iconName: string;
  color: string;
  category: string;
  styles: React.CSSProperties;
  customization?: Customization;
}

export interface Customization {
  name: string;
  layout: Layout;
  color: string;
  iconWeight: IconWeight;
  iconName?: string;
  fontFamily?: string;
}

import { IconWeight } from '@phosphor-icons/react';

export type Layout = 'top' | 'right' | 'bottom' | 'left';
export interface Logo {
  id: string;
  iconName: string;
  category: string;
  styles: React.CSSProperties;
  customization?: Customization;
}

export interface Customization {
  name?: string;
  color?: string;
  layout: Layout;
  iconStyle: IconWeight;
  iconName?: string;
  iconSize?: number;
  styles?: React.CSSProperties;
}

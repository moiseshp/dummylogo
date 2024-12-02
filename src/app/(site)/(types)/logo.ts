import { IconWeight } from '@phosphor-icons/react';

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
  name: string | null;
  color: string | null;
  layout: Layout;
  iconStyle: IconWeight;
  iconName: string | null;
  fontFamily: string | null;
}

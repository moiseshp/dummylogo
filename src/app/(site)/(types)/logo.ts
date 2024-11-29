export type Layout = 'top' | 'right' | 'bottom' | 'left';

export interface Logo {
  id: string;
  name: string;
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  iconName: string;
  iconSize: number;
  color: string;
  category: string;
  customization?: Customization;
}

export interface Customization {
  name: string;
  layout: Layout;
  color: string;
}

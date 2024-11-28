export type Layout = 'top' | 'right' | 'bottom' | 'left';

export interface Logo {
  id: string;
  iconName: string;
  fontName: string;
  customization?: Customization;
}

export interface Customization {
  text: string;
  layout: Layout;
  color: string;
}

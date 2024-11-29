import * as React from 'react';

export type Layout = 'top' | 'right' | 'bottom' | 'left';
export interface Logo {
  id: string;
  name: string;
  styles: React.CSSProperties;
  iconName: string;
  strokeWidth: number;
  color: string;
  category: string;
  customization?: Customization;
}

export interface Customization {
  name: string;
  layout: Layout;
  color: string;
}

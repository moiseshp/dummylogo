import { IconWeight } from '@phosphor-icons/react';

export type ILayout = 'top' | 'right' | 'bottom' | 'left';
export interface ILogo {
  id: string;
  iconName: string;
  category: string;
  styles: React.CSSProperties;
  customization?: ICustomization;
}

export interface ICustomization {
  name?: string;
  color: string;
  bgColor: string;
  layout: ILayout;
  iconStyle: IconWeight;
  iconName?: string;
  iconSize?: number;
  styles?: React.CSSProperties;
}

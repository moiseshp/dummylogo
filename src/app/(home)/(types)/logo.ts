export type TLayout = 'top' | 'right' | 'bottom' | 'left';
export type TCategory = 'tech' | 'sports';

export interface ILogo {
  text: string;
  layout: TLayout;
  category: TCategory;
  color: string;
  bgColor: string;
}

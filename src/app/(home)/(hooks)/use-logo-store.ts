import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ILogo, TLayout } from '@/app/(home)/(types)/logo';

const LOGO_STORE_KEY = 'dummylogo_v0.1';
const DEFAULT_LOGO_STORE = {
  text: '',
  layout: 'left',
  category: 'tech',
  color: 'blue',
  bgColor: 'blue',
} as ILogo;

interface LogoStore extends ILogo {
  setText: (text: string) => void;
  setLayout: (layout: TLayout) => void;
}

export const useLogoStore = create<LogoStore>()(
  persist(
    (set, _get) => ({
      ...DEFAULT_LOGO_STORE,
      setText: (text) => set(() => ({ text })),
      setLayout: (layout) => set(() => ({ layout })),
    }),
    {
      name: LOGO_STORE_KEY,
    },
  ),
);

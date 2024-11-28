import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ILogo, TLayout } from '@/app/(home)/(types)/logo';

const LOGO_STORE_KEY = 'dummylogo_v0.1';
const DEFAULT_LOGO_STORE = {
  text: '',
  layout: 'left',
  color: '#334455',
} as ILogo;

interface LogoStore extends ILogo {
  setText: (text: string) => void;
  setLayout: (layout: TLayout) => void;
  setColor: (color: string) => void;
  reset: () => void;
}

export const useLogoStore = create<LogoStore>()(
  persist(
    (set, _get) => ({
      ...DEFAULT_LOGO_STORE,
      setText: (text) => set(() => ({ text })),
      setLayout: (layout) => set(() => ({ layout })),
      setColor: (color) => set(() => ({ color })),
      reset: () =>
        set(() => ({
          layout: DEFAULT_LOGO_STORE.layout,
          color: DEFAULT_LOGO_STORE.color,
        })),
    }),
    {
      name: LOGO_STORE_KEY,
    },
  ),
);

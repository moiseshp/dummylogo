import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Layout, Customization } from '@/app/(home)/(types)/logo';

const LOGO_STORE_KEY = 'dummylogo_v0.1';
const DEFAULT_LOGO_STORE = {
  name: '',
  layout: 'left',
  color: '',
} as Customization;

interface LogoStore extends Customization {
  setName: (name: string) => void;
  setLayout: (layout: Layout) => void;
  setColor: (color: string) => void;
  reset: () => void;
}

export const useLogoStore = create<LogoStore>()(
  persist(
    (set, _get) => ({
      ...DEFAULT_LOGO_STORE,
      setName: (name) => set(() => ({ name })),
      setLayout: (layout) => set(() => ({ layout })),
      setColor: (color) => set(() => ({ color })),
      reset: () =>
        set(() => ({
          layout: DEFAULT_LOGO_STORE.layout,
          color: '',
        })),
    }),
    {
      name: LOGO_STORE_KEY,
    },
  ),
);

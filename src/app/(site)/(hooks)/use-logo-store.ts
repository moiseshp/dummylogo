import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Layout, Customization } from '@/app/(site)/(types)/logo';
import { IconWeight } from '@phosphor-icons/react';

const LOGO_STORE_KEY = 'dummylogo_v0.1';
const DEFAULT_LOGO_STORE = {
  name: '',
  color: '',
  layout: 'left',
  iconWeight: 'fill',
} as Customization;

interface LogoStore extends Customization {
  setName: (name: string) => void;
  setLayout: (value: Layout) => void;
  setColor: (value: string) => void;
  setIconWeight: (value: IconWeight) => void;
  reset: () => void;
}

export const useLogoStore = create<LogoStore>()(
  persist(
    (set, _get) => ({
      ...DEFAULT_LOGO_STORE,
      setName: (name) => set(() => ({ name })),
      setLayout: (layout) => set(() => ({ layout })),
      setColor: (color) => set(() => ({ color })),
      setIconWeight: (iconWeight) => set(() => ({ iconWeight })),
      reset: () =>
        set(() => ({
          ...DEFAULT_LOGO_STORE,
        })),
    }),
    {
      name: LOGO_STORE_KEY,
    },
  ),
);

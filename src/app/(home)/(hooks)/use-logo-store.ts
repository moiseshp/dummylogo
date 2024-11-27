import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const LOGO_STORE_KEY = 'dummylogo_v0.1';

interface LogoStore {
  text: string;
  layout: 'left' | 'right';
  category: 'tech' | '';
  color: string;
  setText: (text: string) => void;
}

export const useLogoStore = create<LogoStore>()(
  persist(
    (set, _get) => ({
      text: '',
      layout: 'left',
      category: 'tech',
      color: 'blue',
      setText: (text) => set(() => ({ text })),
    }),
    {
      name: LOGO_STORE_KEY,
    },
  ),
);

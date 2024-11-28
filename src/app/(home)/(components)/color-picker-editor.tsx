'use client';
import { ColorPicker } from '@/components/ui/color-picker';

export const ColorPickerEditor = () => {
  return <ColorPicker onChange={(value) => console.info({ value })} />;
};

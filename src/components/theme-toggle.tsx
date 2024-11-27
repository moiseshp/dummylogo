'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { useMounted } from '@/hooks/use-mounted';

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = () => resolvedTheme === 'dark';
  const isMounted = useMounted();

  const handleTheme = async () => {
    setTheme(isDark() ? 'light' : 'dark');
  };

  if (!isMounted) return;

  return (
    <Button variant="ghost" onClick={handleTheme}>
      {isDark() ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

'use client';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { useMounted } from '@/hooks/use-mounted';
import { MoonStars, Sun } from '@phosphor-icons/react';

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = () => resolvedTheme === 'dark';
  const isMounted = useMounted();

  const handleTheme = async () => {
    setTheme(isDark() ? 'light' : 'dark');
  };

  if (!isMounted) return;

  return (
    <Button variant="ghost" size="icon" onClick={handleTheme}>
      {isDark() ? <Sun /> : <MoonStars />}
    </Button>
  );
};

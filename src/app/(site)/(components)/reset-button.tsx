'use client';
import { Button } from '@/components/ui/button';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { RotateCcwIcon } from 'lucide-react';

export const ResetButton = () => {
  const reset = useLogoStore((state) => state.reset);

  return (
    <Button variant="ghost" onClick={reset}>
      <RotateCcwIcon />
    </Button>
  );
};

import * as React from 'react';
import { Input } from '@/components/ui/input';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { Button } from '@/components/ui/button';
import { PencilSimpleLine, X } from '@phosphor-icons/react';

export const LogoNameEditor = () => {
  const setName = useLogoStore((state) => state.setName);
  const [inputText, setInputText] = React.useState<string>('');

  const handleInputClear = () => {
    setInputText('');
    setName('');
  };

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(value);
    setName(value);
  };

  return (
    <Input
      placeholder="Your logo name"
      className="border-none shadow-none hover:bg-muted-foreground/10 transition"
      leftIcon={<PencilSimpleLine />}
      rightIcon={
        inputText && (
          <Button
            size="icon"
            variant="link"
            className="rounded-full text-inherit"
            onClick={handleInputClear}
          >
            <X />
          </Button>
        )
      }
      onChange={handleInputText}
      value={inputText}
    />
  );
};

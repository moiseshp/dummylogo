import * as React from 'react';
// import { PencilLineIcon, XIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { Button } from '@/components/ui/button';

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
    <div className="text-muted-foreground hover:bg-muted-foreground/10 transition pl-3 pr-1 rounded-md w-80">
      <Input
        placeholder="Type your text"
        className="border-none shadow-none focus-visible:ring-0 w-80"
        // leftIcon={<PencilLineIcon className="w-6 h-6" />}
        rightIcon={
          inputText && (
            <Button
              size="icon"
              variant="link"
              className="rounded-full text-inherit"
              onClick={handleInputClear}
            >
              {/* <XIcon className="w-4 h-4" /> */}
            </Button>
          )
        }
        onChange={handleInputText}
        value={inputText}
      />
    </div>
  );
};

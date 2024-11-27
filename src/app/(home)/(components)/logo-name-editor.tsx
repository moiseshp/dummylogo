import { useEffect, useState } from 'react';
import { PencilLineIcon, XIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLogoStore } from '@/app/(home)/(hooks)/use-logo-store';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/use-debounce';

export const LogoNameEditor = () => {
  const setText = useLogoStore((state) => state.setText);
  const [inputText, setInputText] = useState<string>('');
  const debouncedValue = useDebounce(inputText);

  const handleInputClear = () => {
    setInputText('');
    setText('');
  };

  useEffect(() => {
    setText(debouncedValue);
  }, [debouncedValue, setText]);

  return (
    <div className="hover:bg-muted-foreground/10 transition pl-3 pr-1 rounded-md w-80">
      <Input
        placeholder="Type your text"
        className="border-none shadow-none focus-visible:ring-0 w-80"
        leftIcon={<PencilLineIcon className="w-4 h-4" />}
        rightIcon={
          inputText && (
            <Button
              size="icon"
              variant="link"
              className="rounded-full text-inherit"
              onClick={handleInputClear}
            >
              <XIcon className="w-4 h-4" />
            </Button>
          )
        }
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
    </div>
  );
};

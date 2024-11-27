import { useEffect, useState } from 'react';
import { PencilLine, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLogoStore } from '@/app/(home)/(hooks)/use-logo-store';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/use-debounce';

const TextEditor = () => {
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
    <div className="hover:bg-secondary/80 transition px-3 rounded-md w-80">
      <Input
        placeholder="Type your text"
        className="border-none shadow-none focus-visible:ring-0 w-80"
        leftIcon={<PencilLine className="w-4 h-4" />}
        rightIcon={
          inputText && (
            <Button size="icon" variant="ghost" onClick={handleInputClear}>
              <X className="w-4 h-4" />
            </Button>
          )
        }
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
    </div>
  );
};

export default TextEditor;

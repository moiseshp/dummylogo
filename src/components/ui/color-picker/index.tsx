'use client';
import * as React from 'react';
import Saturation from '@uiw/react-color-saturation';
import Hue from '@uiw/react-color-hue';
import EditableInput from '@uiw/react-color-editable-input';
import { hexToHsva, hsvaToHex, validHex } from '@uiw/color-convert';
import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/use-debounce';
import './styles.css';

interface ColorPickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
}

const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  ({ className, onChange, value, ...props }, ref) => {
    const [hsva, setHsva] = React.useState(hexToHsva(value || '#1c1d1f'));
    const debouncedValue = useDebounce(hsvaToHex(hsva));

    React.useEffect(() => {
      if (!onChange) return;
      onChange(debouncedValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
      <div
        ref={ref}
        className={cn('max-w-56 flex flex-col gap-y-3 p-2', className)}
        {...props}
      >
        <Saturation
          hsva={hsva}
          className="!rounded-md !w-full"
          onChange={(newColor) => setHsva({ ...hsva, ...newColor, a: hsva.a })}
        />
        <Hue
          hue={hsva.h}
          className="!h-2"
          onChange={(newHue) => setHsva({ ...hsva, ...newHue })}
        />
        <div className="flex items-center gap-x-3 h-8 border border-muted-foreground/20 rounded-sm px-1">
          <EditableInput
            value={hsvaToHex(hsva)}
            className="!text-sm font-bold !text-muted-foreground !hover:text-primary"
            onChange={(event) => {
              const { value } = event.target;
              if (!validHex(value)) return;
              setHsva(hexToHsva(value));
            }}
          />
          <div
            className="w-7 h-6 rounded-sm"
            style={{
              backgroundColor: hsvaToHex(hsva),
            }}
          />
        </div>
      </div>
    );
  },
);

ColorPicker.displayName = 'ColorPicker';

export { ColorPicker };

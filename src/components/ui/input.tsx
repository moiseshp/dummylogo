import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div
        className={cn(
          'h-9 flex items-center border border-input rounded-md overflow-hidden',
          className,
        )}
      >
        {leftIcon && (
          <div className="h-full w-9 flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'bg-transparent flex-1 flex h-full w-fullpx-3 py-1 text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            leftIcon && 'pl-0',
            rightIcon && 'pr-0',
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="h-full w-9 flex items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };

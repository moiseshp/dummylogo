import { cn } from '@/lib/utils';
import { CircleNotch, IconProps } from '@phosphor-icons/react';

const Spinner = ({ className, ...props }: IconProps) => {
  return <CircleNotch className={cn('animate-spin', className)} {...props} />;
};

export { Spinner };

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/(home)/(types)/logo';
import { Icon } from '@/components/ui/icon';

const Logotype: React.FC<Logo> = React.memo(({ iconName, customization }) => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div
        className={cn('flex items-center gap-4')}
        style={{ color: customization?.color }}
      >
        <Icon name={iconName as any} />
        <p className="text-2xl">{customization?.text}</p>
      </div>
    </div>
  );
});

Logotype.displayName = 'Logotype';

export { Logotype };

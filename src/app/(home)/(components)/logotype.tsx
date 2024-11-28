import * as React from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/(home)/(types)/logo';
import { Icon } from '@/components/ui/icon';

const Logotype: React.FC<Logo> = React.memo(
  ({ fontName, iconName, customization }) => {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div
          className={cn('flex items-center gap-4', customization?.layout)}
          style={{ color: customization?.color }}
        >
          <div className="flex items-center justify-center w-8 h-8">
            <Icon name={iconName as any} />
          </div>
          <p className="text-2xl" style={{ fontFamily: fontName }}>
            {customization?.text}
          </p>
        </div>
      </div>
    );
  },
);

Logotype.displayName = 'Logotype';

export { Logotype };

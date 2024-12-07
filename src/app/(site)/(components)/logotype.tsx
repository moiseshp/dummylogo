import * as React from 'react';
import { Customization } from '@/app/(site)/(types)/logo';
import { cn } from '@/lib/utils';

type LogotypeProps = {
  customization: Customization;
  icon: React.ComponentType<any>;
};

const Logotype = React.memo(({ customization, icon: Icon }: LogotypeProps) => {
  return (
    <div
      className={cn('flex items-center gap-x-3 gap-y-1', customization.layout)}
    >
      <Icon
        weight={customization.iconStyle}
        size={customization.iconSize}
        color={customization.color}
        className="leading-none"
      />
      <p
        className="-mt-1"
        style={{ ...customization.styles, color: customization.color }}
      >
        {customization.name}
      </p>
    </div>
  );
});

Logotype.displayName = 'Logotype';

export { Logotype };
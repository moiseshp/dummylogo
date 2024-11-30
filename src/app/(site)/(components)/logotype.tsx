import * as React from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/(site)/(types)/logo';
import { Icon } from '@/components/ui/icon';
import { PhosphorLogo } from '@phosphor-icons/react';

// const DEFAULT_ICON_SIZE = 34;

const Logotype: React.FC<Logo> = React.memo(
  ({ styles, iconName, strokeWidth, customization }) => {
    // const iconSizeByLayout = ['flex-row', 'right'].includes(
    //   customization?.layout as string,
    // )
    //   ? DEFAULT_ICON_SIZE
    //   : DEFAULT_ICON_SIZE * 1.4;
    // const iconStrokeWidthByLayout = ['flex-row', 'right'].includes(
    //   customization?.layout as string,
    // )
    //   ? strokeWidth
    //   : strokeWidth / 1.4;

    return (
      <div
        className={cn(
          'flex items-center gap-x-3 gap-y-1',
          customization?.layout,
        )}
        style={{ color: customization?.color }}
      >
        <Icon name={iconName} size={40} weight="fill" />
        {/* <PhosphorLogo /> */}
        {/* <Icon
          name={iconName}
          strokeWidth={iconStrokeWidthByLayout}
          size={iconSizeByLayout}
        /> */}
        <p style={styles}>{customization?.name}</p>
      </div>
    );
  },
);

Logotype.displayName = 'Logotype';

export { Logotype };

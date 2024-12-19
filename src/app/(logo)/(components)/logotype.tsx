import * as React from 'react';
import { Customization } from '@/app/(logo)/(types)/logo';
import { cn } from '@/lib/utils';

type LogotypeProps = {
  customization: Customization;
  icon: React.ComponentType<any>;
  className?: string;
};

const Logotype = React.memo(
  ({ customization, icon: Icon, className }: LogotypeProps) => {
    return (
      <figure
        className={cn(
          'flex items-center gap-x-3 gap-y-1',
          customization.layout,
          className,
        )}
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
      </figure>
    );
  },
);

type LogotypeBoxProps = {
  bgColor: string;
  className?: string;
  children: React.ReactNode;
};

const LogotypeBox: React.FC<LogotypeBoxProps> = ({
  bgColor,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full rounded-md',
        className,
      )}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
};

Logotype.displayName = 'Logotype';

export { Logotype, LogotypeBox };

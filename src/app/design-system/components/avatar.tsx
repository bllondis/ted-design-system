import { HTMLAttributes } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'circle' | 'rounded' | 'square';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  color?: string;
  online?: boolean;
}

const sizeStyles: Record<AvatarSize, { container: string; text: string; online: string }> = {
  xs: { container: 'w-6 h-6', text: 'text-xs', online: 'w-1.5 h-1.5 bottom-0 right-0' },
  sm: { container: 'w-8 h-8', text: 'text-xs', online: 'w-2 h-2 bottom-0 right-0' },
  md: { container: 'w-10 h-10', text: 'text-sm', online: 'w-2.5 h-2.5 bottom-0.5 right-0.5' },
  lg: { container: 'w-12 h-12', text: 'text-base', online: 'w-3 h-3 bottom-0.5 right-0.5' },
  xl: { container: 'w-16 h-16', text: 'text-xl', online: 'w-4 h-4 bottom-1 right-1' },
};

const variantStyles: Record<AvatarVariant, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-xl',
  square: 'rounded-lg',
};

export function Avatar({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  variant = 'rounded',
  color = 'bg-gradient-to-br from-primary to-primary/80',
  online,
  className = '',
  ...props
}: AvatarProps) {
  const styles = sizeStyles[size];

  return (
    <div className={`relative inline-flex ${className}`} {...props}>
      <div
        className={`${styles.container} ${variantStyles[variant]} ${color} flex items-center justify-center overflow-hidden flex-shrink-0`}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className={`${styles.text} font-semibold text-white select-none`}>
            {initials}
          </span>
        )}
      </div>
      {online !== undefined && (
        <span
          className={`absolute ${styles.online} rounded-full border-2 border-card ${
            online ? 'bg-success' : 'bg-muted'
          }`}
        />
      )}
    </div>
  );
}

interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarSize;
}

export function AvatarGroup({ children, max = 3, size = 'md' }: AvatarGroupProps) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const displayChildren = childrenArray.slice(0, max);
  const remaining = childrenArray.length - max;

  return (
    <div className="flex items-center -space-x-2">
      {displayChildren}
      {remaining > 0 && (
        <Avatar
          initials={`+${remaining}`}
          size={size}
          color="bg-muted"
        />
      )}
    </div>
  );
}
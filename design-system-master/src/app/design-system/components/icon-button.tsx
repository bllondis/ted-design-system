import { ButtonHTMLAttributes } from 'react';

export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonVariant = 'default' | 'primary' | 'ghost' | 'outline';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  isActive?: boolean;
  badge?: boolean;
}

const sizeStyles: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
  lg: 'w-10 h-10',
};

const variantStyles: Record<IconButtonVariant, string> = {
  default: 'bg-muted hover:bg-muted/80 text-foreground',
  primary: 'bg-primary hover:bg-primary/90 text-white',
  ghost: 'bg-transparent hover:bg-muted text-foreground',
  outline: 'bg-transparent border border-border hover:bg-muted text-foreground',
};

export function IconButton({
  icon,
  size = 'md',
  variant = 'default',
  isActive = false,
  badge = false,
  className = '',
  ...props
}: IconButtonProps) {
  const activeClass = isActive ? 'ring-2 ring-primary ring-offset-2' : '';

  return (
    <button
      className={`relative inline-flex items-center justify-center rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]} ${variantStyles[variant]} ${activeClass} ${className}`}
      {...props}
    >
      {icon}
      {badge && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-card" />
      )}
    </button>
  );
}
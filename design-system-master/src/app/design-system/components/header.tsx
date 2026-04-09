import { HTMLAttributes } from 'react';
import { Input } from './input';
import { IconButton } from './icon-button';
import { Avatar } from './avatar';
import { Search } from 'lucide-react';

export interface HeaderAction {
  icon: React.ReactNode;
  badge?: boolean;
  onClick?: () => void;
}

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  searchPlaceholder?: string;
  actions?: HeaderAction[];
  user?: {
    name: string;
    role: string;
    initials: string;
  };
  onThemeToggle?: () => void;
  themeIcon?: React.ReactNode;
}

export function Header({
  searchPlaceholder = 'Search...',
  actions = [],
  user,
  onThemeToggle,
  themeIcon,
  className = '',
  ...props
}: HeaderProps) {
  return (
    <header
      className={`h-16 bg-card border-b border-border flex items-center justify-between px-6 ${className}`}
      {...props}
    >
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <Input
          placeholder={searchPlaceholder}
          leftIcon={<Search className="w-4 h-4" />}
          inputSize="md"
          variant="default"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 ml-6">
        {/* Theme Toggle */}
        {themeIcon && (
          <IconButton icon={themeIcon} onClick={onThemeToggle} variant="default" />
        )}

        {/* Actions */}
        {actions.map((action, index) => (
          <IconButton
            key={index}
            icon={action.icon}
            badge={action.badge}
            onClick={action.onClick}
            variant="default"
          />
        ))}

        {/* User Profile */}
        {user && (
          <div className="flex items-center gap-3 ml-2">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-medium text-foreground">{user.name}</div>
              <div className="text-xs text-muted-foreground">{user.role}</div>
            </div>
            <Avatar
              initials={user.initials}
              size="md"
              variant="rounded"
              color="bg-gradient-to-br from-primary to-primary/80"
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </header>
  );
}
import { HTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  logo: {
    icon: LucideIcon;
    text: string;
  };
  menuItems: MenuItem[];
  promoCard?: {
    icon: LucideIcon;
    title: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
  };
}

export function Sidebar({ logo, menuItems, promoCard, className = '', ...props }: SidebarProps) {
  const LogoIcon = logo.icon;

  return (
    <aside
      className={`w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col ${className}`}
      {...props}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
            <LogoIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-sidebar-foreground">{logo.text}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const ItemIcon = item.icon;
          return (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                item.active
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`}
            >
              <ItemIcon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Promo Card */}
      {promoCard && (
        <div className="p-4">
          <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-6 -mb-6"></div>

            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <promoCard.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{promoCard.title}</h3>
              <p className="text-xs text-white/90 mb-4">{promoCard.description}</p>
              <button
                onClick={promoCard.onButtonClick}
                className="w-full bg-white text-primary py-2 px-4 rounded-lg text-xs font-semibold hover:bg-white/95 transition-colors"
              >
                {promoCard.buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
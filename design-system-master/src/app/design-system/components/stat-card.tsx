import { HTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './card';
import { Badge } from './badge';

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  className = '',
  ...props
}: StatCardProps) {
  return (
    <Card variant="default" padding="md" hoverable className={className} {...props}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <Badge variant={isPositive ? 'success' : 'danger'} size="sm">
          {change}
        </Badge>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-2xl font-semibold text-foreground">{value}</p>
      </div>
    </Card>
  );
}
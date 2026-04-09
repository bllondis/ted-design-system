import { Card, CardHeader } from './card';
import { CircularProgress } from './progress';

interface ProgressOverviewProps {
  value: number;
  max?: number;
  title?: string;
  legend?: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  className?: string;
}

export function ProgressOverview({
  value,
  max = 100,
  title = 'Overall Progress',
  legend = [
    { label: 'Completed Tasks', value: 41, color: 'var(--primary)' },
    { label: 'Remaining Tasks', value: 59, color: 'currentColor' },
  ],
  className = '',
}: ProgressOverviewProps) {
  return (
    <Card variant="default" padding="md" className={className}>
      <CardHeader title={title} />
      <div className="flex justify-center mb-6">
        <CircularProgress value={value} max={max} size={200} strokeWidth={12} />
      </div>
      <div className="space-y-2">
        {legend.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className={`w-3 h-3 rounded-full ${item.color === 'currentColor' ? 'bg-muted' : ''}`}
                style={{ backgroundColor: item.color === 'currentColor' ? undefined : item.color }}
              ></div>
              <span className="text-sm text-foreground">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
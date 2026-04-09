import { HTMLAttributes } from 'react';
import { Card, CardHeader } from './card';
import { Clock, CheckCircle2 } from 'lucide-react';

export interface Reminder {
  id: number | string;
  title: string;
  time: string;
  completed?: boolean;
}

interface ReminderListProps extends HTMLAttributes<HTMLDivElement> {
  reminders: Reminder[];
  title?: string;
  onViewAll?: () => void;
}

export function ReminderList({
  reminders,
  title = 'Reminders',
  onViewAll,
  className = '',
  ...props
}: ReminderListProps) {
  return (
    <Card variant="default" padding="md" className={className} {...props}>
      <CardHeader
        title={title}
        action={
          onViewAll && (
            <button
              onClick={onViewAll}
              className="text-xs font-medium text-primary hover:text-primary/80"
            >
              View All
            </button>
          )
        }
      />
      <div className="space-y-3">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className={`mt-0.5 ${reminder.completed ? 'text-primary' : 'text-muted-foreground'}`}>
              {reminder.completed ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm ${
                  reminder.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                }`}
              >
                {reminder.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{reminder.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
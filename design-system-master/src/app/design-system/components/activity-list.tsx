import { HTMLAttributes } from 'react';
import { Card, CardHeader } from './card';
import { IconButton } from './icon-button';
import { Avatar } from './avatar';
import { Paperclip, MoreHorizontal } from 'lucide-react';

export interface Activity {
  id: number | string;
  user: string;
  initials: string;
  action: string;
  project: string;
  time: string;
  hasAttachment?: boolean;
  attachmentCount?: number;
  color?: string;
}

interface ActivityListProps extends HTMLAttributes<HTMLDivElement> {
  activities: Activity[];
  title?: string;
  onViewAll?: () => void;
}

export function ActivityList({
  activities,
  title = 'Team Activity',
  onViewAll,
  className = '',
  ...props
}: ActivityListProps) {
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
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 group">
            <Avatar
              initials={activity.initials}
              size="md"
              variant="rounded"
              color={activity.color || 'bg-gradient-to-br from-primary to-primary/80'}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                <span className="font-medium">{activity.user}</span>{' '}
                <span className="text-muted-foreground">{activity.action}</span>{' '}
                <span className="font-medium">{activity.project}</span>
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs text-muted-foreground">{activity.time}</p>
                {activity.hasAttachment && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Paperclip className="w-4 h-4" />
                      <span className="text-xs">{activity.attachmentCount || 1} files</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <IconButton
              icon={<MoreHorizontal className="w-4 h-4" />}
              size="sm"
              variant="ghost"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
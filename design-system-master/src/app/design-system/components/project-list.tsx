import { HTMLAttributes } from 'react';
import { Card, CardHeader } from './card';
import { Progress } from './progress';
import { IconButton } from './icon-button';
import { MoreVertical } from 'lucide-react';

export interface Project {
  id: number | string;
  name: string;
  status: string;
  progress: number;
  team: number;
  color?: string;
}

interface ProjectListProps extends HTMLAttributes<HTMLDivElement> {
  projects: Project[];
  title?: string;
  onViewAll?: () => void;
}

export function ProjectList({
  projects,
  title = 'Active Projects',
  onViewAll,
  className = '',
  ...props
}: ProjectListProps) {
  return (
    <Card variant="default" padding="md" className={className} {...props}>
      <CardHeader
        title={title}
        action={
          onViewAll && (
            <button
              onClick={onViewAll}
              className="text-xs font-medium text-primary-500 hover:text-primary-600"
            >
              View All
            </button>
          )
        }
      />
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3 flex-1">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.color || 'var(--primary)' }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{project.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground">
                  {project.status}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground">{project.team} members</span>
                </div>
                <IconButton
                  icon={<MoreVertical className="w-4 h-4" />}
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="ml-5">
              <Progress
                value={project.progress}
                size="md"
                variant="default"
                showLabel
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
import { HTMLAttributes, useState, useEffect } from 'react';
import { Card, CardHeader, CardFooter } from './card';
import { Button } from './button';
import { Play, Pause, Square } from 'lucide-react';

interface TimeTrackerProps extends HTMLAttributes<HTMLDivElement> {
  initialSeconds?: number;
  currentTask?: {
    name: string;
    project: string;
  };
  weekHours?: string;
  monthHours?: string;
}

export function TimeTracker({
  initialSeconds = 0,
  currentTask,
  weekHours = '0h',
  monthHours = '0h',
  className = '',
  ...props
}: TimeTrackerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card variant="default" padding="md" className={className} {...props}>
      <CardHeader title="Time Tracker" />

      {/* Current Task */}
      {currentTask && (
        <div className="mb-6 p-4 bg-gradient-to-br from-primary to-primary/80 rounded-xl text-white">
          <p className="text-xs opacity-90 mb-1">Current Task</p>
          <p className="text-sm font-medium">{currentTask.name}</p>
        </div>
      )}

      {/* Timer Display */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-foreground mb-2 font-mono">{formatTime(seconds)}</div>
        <p className="text-sm text-muted-foreground">Time Logged Today</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 mb-6">
        <Button
          onClick={() => setIsRunning(!isRunning)}
          variant={isRunning ? 'secondary' : 'primary'}
          size="md"
          fullWidth
          leftIcon={isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
          variant="ghost"
          size="md"
          className="px-4"
        >
          <Square className="w-4 h-4" />
        </Button>
      </div>

      {/* Stats */}
      <CardFooter>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">This Week</p>
            <p className="text-lg font-semibold text-foreground">{weekHours}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">This Month</p>
            <p className="text-lg font-semibold text-foreground">{monthHours}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
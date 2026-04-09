import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { Card, CardHeader } from './card';
import { colors } from '../tokens';

interface ChartData {
  name: string;
  value: number;
}

interface AnalyticsChartProps {
  data: ChartData[];
  title?: string;
  subtitle?: string;
  period?: string;
  onPeriodChange?: (period: string) => void;
  className?: string;
}

export function AnalyticsChart({
  data,
  title = 'Analytics',
  subtitle = 'Monthly data overview',
  period,
  onPeriodChange,
  className = '',
}: AnalyticsChartProps) {
  return (
    <Card variant="default" padding="md" className={className}>
      <CardHeader
        title={title}
        subtitle={subtitle}
        action={
          period && onPeriodChange && (
            <div className="relative inline-flex items-center">
              <select
                value={period}
                onChange={(e) => onPeriodChange(e.target.value)}
                className="pl-3 pr-8 py-1.5 bg-muted rounded-lg text-xs font-medium text-foreground border-0 outline-none cursor-pointer appearance-none"
              >
                <option value="7months">Last 7 months</option>
                <option value="6months">Last 6 months</option>
                <option value="year">Last year</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-2 pointer-events-none text-muted-foreground" />
            </div>
          )
        }
      />
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.primary[500]} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.primary[500]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.neutral[500], fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.neutral[500], fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-md, 0 4px 6px -1px rgba(0,0,0,0.1))',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={colors.primary[500]}
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
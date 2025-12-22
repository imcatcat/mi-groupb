import { sentimentTrend } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { BarChart2 } from 'lucide-react';

const SentimentChart = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <BarChart2 className="w-4 h-4 text-primary" />
          市场情绪趋势
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sentimentTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 10 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 10 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(222, 47%, 10%)', 
                  border: '1px solid hsl(222, 30%, 18%)',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                labelStyle={{ color: 'hsl(210, 40%, 96%)' }}
              />
              <Area 
                type="monotone" 
                dataKey="positive" 
                stroke="hsl(142, 76%, 45%)" 
                fillOpacity={1}
                fill="url(#positiveGradient)"
                strokeWidth={2}
                name="看涨"
              />
              <Area 
                type="monotone" 
                dataKey="negative" 
                stroke="hsl(0, 72%, 51%)" 
                fillOpacity={1}
                fill="url(#negativeGradient)"
                strokeWidth={2}
                name="看跌"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-xs text-muted-foreground">看涨情绪</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-xs text-muted-foreground">看跌情绪</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentChart;

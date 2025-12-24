import { signalIndicators } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, TrendingUp, TrendingDown, Pause } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const SignalPanel = () => {
  const getSignalStyles = (signal: string) => {
    switch (signal) {
      case 'buy':
        return {
          bg: 'bg-success/10',
          border: 'border-success/30',
          icon: <TrendingUp className="w-4 h-4 text-success" />,
          badge: <Badge className="bg-success/20 text-success border-success/30">Buy</Badge>
        };
      case 'sell':
        return {
          bg: 'bg-destructive/10',
          border: 'border-destructive/30',
          icon: <TrendingDown className="w-4 h-4 text-destructive" />,
          badge: <Badge className="bg-destructive/20 text-destructive border-destructive/30">Sell</Badge>
        };
      default:
        return {
          bg: 'bg-muted',
          border: 'border-border',
          icon: <Pause className="w-4 h-4 text-muted-foreground" />,
          badge: <Badge variant="secondary">Hold</Badge>
        };
    }
  };

  const getGaugeColor = (value: number) => {
    if (value >= 70) return 'bg-success';
    if (value >= 40) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <Activity className="w-4 h-4 text-primary" />
          Signal Indicators
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {signalIndicators.map((indicator) => {
          const styles = getSignalStyles(indicator.signal);
          return (
            <Tooltip key={indicator.name}>
              <TooltipTrigger asChild>
                <div 
                  className={`p-4 rounded-lg border transition-all cursor-pointer hover:shadow-glow ${styles.bg} ${styles.border}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {styles.icon}
                      <span className="font-medium text-sm text-foreground">{indicator.name}</span>
                    </div>
                    {styles.badge}
                  </div>
                  
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-2">
                    <div 
                      className={`absolute left-0 top-0 h-full rounded-full transition-all ${getGaugeColor(indicator.value)}`}
                      style={{ width: `${indicator.value}%` }}
                    />
                    <div 
                      className="absolute top-0 h-full w-0.5 bg-foreground/50"
                      style={{ left: '50%' }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Value: <span className="font-mono text-foreground">{indicator.value}</span></span>
                    <span className="text-muted-foreground">Confidence: <span className="font-mono text-primary">{Math.round(indicator.confidence * 100)}%</span></span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="left" className="max-w-xs">
                <p className="text-sm">{indicator.description}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SignalPanel;

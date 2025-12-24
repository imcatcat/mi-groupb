import { marketIndices } from '@/lib/mockData';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MarketOverview = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <BarChart3 className="w-4 h-4 text-primary" />
          Market Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {marketIndices.slice(0, 5).map((index) => (
          <div 
            key={index.symbol} 
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div>
              <div className="font-medium text-sm text-foreground">{index.name}</div>
              <div className="text-xs text-muted-foreground">{index.symbol}</div>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm font-medium text-foreground">
                {index.price.toLocaleString()}
              </div>
              <div className={`flex items-center justify-end gap-1 ${
                index.change >= 0 ? 'text-success' : 'text-destructive'
              }`}>
                {index.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span className="font-mono text-xs">
                  {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}
                </span>
                <span className="font-mono text-xs">
                  ({index.change >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MarketOverview;

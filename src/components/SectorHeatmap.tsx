import { sectorData } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutGrid, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const SectorHeatmap = () => {
  const getSentimentColor = (sentiment: string, change: number) => {
    if (sentiment === 'bullish') return 'bg-success/20 border-success/30 hover:bg-success/30';
    if (sentiment === 'bearish') return 'bg-destructive/20 border-destructive/30 hover:bg-destructive/30';
    return 'bg-muted border-border hover:bg-muted/80';
  };

  const getTextColor = (sentiment: string) => {
    if (sentiment === 'bullish') return 'text-success';
    if (sentiment === 'bearish') return 'text-destructive';
    return 'text-muted-foreground';
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <LayoutGrid className="w-4 h-4 text-primary" />
          行业板块走势
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sectorData.map((sector) => (
            <div
              key={sector.name}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${getSentimentColor(sector.sentiment, sector.change)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{sector.name}</span>
                {sector.sentiment === 'bullish' ? (
                  <TrendingUp className="w-4 h-4 text-success" />
                ) : sector.sentiment === 'bearish' ? (
                  <TrendingDown className="w-4 h-4 text-destructive" />
                ) : (
                  <Minus className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div className={`font-mono text-lg font-semibold ${getTextColor(sector.sentiment)}`}>
                {sector.change >= 0 ? '+' : ''}{sector.change.toFixed(2)}%
              </div>
              <div className="flex items-center gap-1 mt-1">
                <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${sector.confidence * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{Math.round(sector.confidence * 100)}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectorHeatmap;

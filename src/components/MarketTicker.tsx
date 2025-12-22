import { marketIndices } from '@/lib/mockData';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketTicker = () => {
  return (
    <div className="h-10 border-b border-border bg-secondary/30 overflow-hidden">
      <div className="h-full flex items-center animate-ticker">
        <div className="flex items-center gap-8 px-4 whitespace-nowrap">
          {[...marketIndices, ...marketIndices].map((index, i) => (
            <div key={`${index.symbol}-${i}`} className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">{index.name}</span>
              <span className="font-mono text-sm text-foreground">{index.price.toLocaleString()}</span>
              <div className={`flex items-center gap-1 ${index.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                {index.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span className="font-mono text-xs">
                  {index.change >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Vol: {index.volume}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;

import { newsItems } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, AlertCircle, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const NewsFeed = () => {
  const getSentimentIcon = (sentiment: number) => {
    if (sentiment > 0.3) return <TrendingUp className="w-3 h-3 text-success" />;
    if (sentiment < -0.3) return <TrendingDown className="w-3 h-3 text-destructive" />;
    return <Minus className="w-3 h-3 text-muted-foreground" />;
  };

  const getSentimentLabel = (sentiment: number) => {
    if (sentiment > 0.5) return { text: '强烈看涨', class: 'signal-positive' };
    if (sentiment > 0.2) return { text: '偏多', class: 'signal-positive' };
    if (sentiment < -0.5) return { text: '强烈看跌', class: 'signal-negative' };
    if (sentiment < -0.2) return { text: '偏空', class: 'signal-negative' };
    return { text: '中性', class: 'signal-neutral' };
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'high':
        return <Badge variant="destructive" className="text-xs">高影响</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="text-xs bg-warning/20 text-warning border-warning/30">中影响</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">低影响</Badge>;
    }
  };

  return (
    <Card className="glass-card h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <Newspaper className="w-4 h-4 text-primary" />
          新闻与市场评论
          <Badge variant="outline" className="ml-auto text-xs">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            实时更新
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] px-4 pb-4">
          <div className="space-y-3">
            {newsItems.map((news) => {
              const sentimentInfo = getSentimentLabel(news.sentiment);
              return (
                <div 
                  key={news.id}
                  className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all cursor-pointer border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-medium text-sm text-foreground leading-tight flex-1">
                      {news.title}
                    </h3>
                    {getImpactBadge(news.impact)}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {news.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">{news.source}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{news.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getSentimentIcon(news.sentiment)}
                      <span className={`text-xs ${sentimentInfo.class}`}>
                        {sentimentInfo.text}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">相关板块:</span>
                    {news.relatedSectors.map((sector) => (
                      <Badge key={sector} variant="outline" className="text-xs py-0">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default NewsFeed;

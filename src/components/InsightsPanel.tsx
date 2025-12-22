import { marketInsights } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const InsightsPanel = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'trend':
        return <TrendingUp className="w-4 h-4 text-success" />;
      default:
        return <Lightbulb className="w-4 h-4 text-primary" />;
    }
  };

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'border-l-4 border-l-destructive bg-destructive/5';
      case 'high':
        return 'border-l-4 border-l-warning bg-warning/5';
      case 'medium':
        return 'border-l-4 border-l-primary bg-primary/5';
      default:
        return 'border-l-4 border-l-muted-foreground bg-muted/30';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <Badge variant="destructive" className="text-xs">紧急</Badge>;
      case 'high':
        return <Badge className="text-xs bg-warning/20 text-warning border-warning/30">重要</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="text-xs">一般</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">低优先级</Badge>;
    }
  };

  return (
    <Card className="glass-card h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <Zap className="w-4 h-4 text-primary" />
          AI 智能洞察
          <Badge variant="outline" className="ml-auto text-xs bg-primary/10 text-primary border-primary/30">
            AI生成
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[350px] px-4 pb-4">
          <div className="space-y-3">
            {marketInsights.map((insight) => (
              <div 
                key={insight.id}
                className={`p-4 rounded-lg transition-all cursor-pointer hover:shadow-md ${getPriorityStyles(insight.priority)}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(insight.type)}
                    <h3 className="font-medium text-sm text-foreground">{insight.title}</h3>
                  </div>
                  {getPriorityBadge(insight.priority)}
                </div>
                <p className="text-xs text-muted-foreground mb-2">{insight.content}</p>
                <div className="text-xs text-muted-foreground/70">{insight.timestamp}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default InsightsPanel;

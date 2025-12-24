import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Cloud, Cpu, Globe, AlertCircle, Check } from 'lucide-react';

interface DataSource {
  name: string;
  icon: React.ReactNode;
  status: 'connected' | 'pending' | 'offline';
  description: string;
  lastUpdate?: string;
}

const DataSourceStatus = () => {
  const dataSources: DataSource[] = [
    {
      name: 'Wind API',
      icon: <Database className="w-4 h-4" />,
      status: 'pending',
      description: 'Real-time market data',
      lastUpdate: 'Pending',
    },
    {
      name: 'News Feed',
      icon: <Globe className="w-4 h-4" />,
      status: 'connected',
      description: 'Financial news aggregator',
      lastUpdate: 'Just now',
    },
    {
      name: 'Lovable AI',
      icon: <Cpu className="w-4 h-4" />,
      status: 'connected',
      description: 'Gemini 2.5 Flash',
      lastUpdate: 'Connected',
    },
    {
      name: 'Analytics Engine',
      icon: <Cloud className="w-4 h-4" />,
      status: 'connected',
      description: 'Sentiment & Signal Generation',
      lastUpdate: 'Running',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return (
          <Badge className="bg-success/20 text-success border-success/30">
            <Check className="w-3 h-3 mr-1" />
            Connected
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-warning/20 text-warning border-warning/30">
            <AlertCircle className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary">
            Offline
          </Badge>
        );
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <Database className="w-4 h-4 text-primary" />
          Data Sources
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {dataSources.map((source) => (
          <div 
            key={source.name}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                source.status === 'connected' ? 'bg-primary/10 text-primary' : 'bg-warning/10 text-warning'
              }`}>
                {source.icon}
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">{source.name}</div>
                <div className="text-xs text-muted-foreground">{source.description}</div>
              </div>
            </div>
            <div className="text-right">
              {getStatusBadge(source.status)}
              <div className="text-xs text-muted-foreground mt-1">{source.lastUpdate}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DataSourceStatus;

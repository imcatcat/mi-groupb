import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, Sparkles, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const QueryInterface = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: '您好！我是FinAI智能助手，可以帮您分析市场数据、解读新闻舆情、生成投资洞察。请问有什么可以帮您？',
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const sampleQueries = [
    '今日市场整体情绪如何？',
    '分析AI板块的投资机会',
    '降准对银行股有何影响？',
    '新能源汽车产业链前景分析',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    // Simulate AI response (will be replaced with actual LLM integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateMockResponse(userMessage.content),
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateMockResponse = (query: string): string => {
    if (query.includes('情绪')) {
      return '根据今日市场舆情分析，整体情绪偏向乐观。主要利好因素包括：1) 央行降准释放流动性；2) AI芯片概念持续活跃。综合情绪指数为68，处于偏多区间。建议关注成长股机会。';
    }
    if (query.includes('AI') || query.includes('人工智能')) {
      return 'AI板块今日上涨3.24%，领涨两市。英伟达新品发布带动全球AI产业链情绪，国产GPU替代逻辑加强。建议关注：算力基础设施、AI应用软件、数据中心等细分领域。风险提示：估值偏高，注意把控仓位。';
    }
    if (query.includes('降准') || query.includes('银行')) {
      return '降准0.5个百分点释放约1.2万亿流动性，对银行板块整体利好。具体影响：1) 资金成本降低，净息差有望改善；2) 信贷投放能力增强；3) 流动性充裕利好估值修复。优选大型国有银行和优质城商行。';
    }
    if (query.includes('新能源') || query.includes('汽车')) {
      return '新能源汽车11月销量115万辆，渗透率突破40%创新高。产业链投资建议：1) 整车：关注具有品牌力和规模优势的龙头；2) 电池：宁德时代等一线厂商受益；3) 材料：碳酸锂价格企稳，正极材料龙头值得关注。';
    }
    return '感谢您的提问。根据当前市场数据和舆情分析，我将为您提供详细的分析报告。请注意，以上分析仅供参考，不构成投资建议。投资有风险，决策需谨慎。';
  };

  const handleSampleQuery = (q: string) => {
    setQuery(q);
  };

  return (
    <Card className="glass-card h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <MessageSquare className="w-4 h-4 text-primary" />
          自然语言查询
          <Badge variant="outline" className="ml-auto text-xs bg-primary/10 text-primary border-primary/30">
            <Sparkles className="w-3 h-3 mr-1" />
            LLM驱动
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">正在分析...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="px-4 pb-4 space-y-3 border-t border-border/50 pt-3">
          <div className="flex flex-wrap gap-2">
            {sampleQueries.map((q) => (
              <Button
                key={q}
                variant="outline"
                size="sm"
                className="text-xs h-7"
                onClick={() => handleSampleQuery(q)}
              >
                {q}
              </Button>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入您的问题，例如：分析今日半导体板块走势..."
              className="flex-1 bg-secondary/30"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !query.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default QueryInterface;

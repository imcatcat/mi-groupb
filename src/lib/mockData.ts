// Mock data for AI-Powered Market Intelligence Platform
// This will be replaced with Wind API data when connected

export interface MarketIndex {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
}

export interface SectorData {
  name: string;
  change: number;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  sentiment: number; // -1 to 1
  impact: 'high' | 'medium' | 'low';
  summary: string;
  relatedSectors: string[];
}

export interface SignalIndicator {
  name: string;
  value: number;
  signal: 'buy' | 'sell' | 'hold';
  confidence: number;
  description: string;
}

export interface MarketInsight {
  id: string;
  type: 'alert' | 'insight' | 'trend';
  title: string;
  content: string;
  timestamp: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
}

export const marketIndices: MarketIndex[] = [
  { symbol: '000001.SH', name: '上证指数', price: 3089.26, change: 23.45, changePercent: 0.76, volume: '3,245亿' },
  { symbol: '399001.SZ', name: '深证成指', price: 9856.78, change: -45.32, changePercent: -0.46, volume: '4,521亿' },
  { symbol: '399006.SZ', name: '创业板指', price: 1923.45, change: 12.67, changePercent: 0.66, volume: '1,876亿' },
  { symbol: '000016.SH', name: '上证50', price: 2456.89, change: 18.23, changePercent: 0.75, volume: '876亿' },
  { symbol: '000300.SH', name: '沪深300', price: 3678.54, change: 25.67, changePercent: 0.70, volume: '2,345亿' },
  { symbol: '000905.SH', name: '中证500', price: 5234.12, change: -12.34, changePercent: -0.24, volume: '1,234亿' },
];

export const sectorData: SectorData[] = [
  { name: '人工智能', change: 3.24, sentiment: 'bullish', confidence: 0.85 },
  { name: '新能源', change: 1.87, sentiment: 'bullish', confidence: 0.72 },
  { name: '半导体', change: 2.15, sentiment: 'bullish', confidence: 0.78 },
  { name: '医药生物', change: -0.45, sentiment: 'neutral', confidence: 0.56 },
  { name: '银行', change: 0.32, sentiment: 'neutral', confidence: 0.62 },
  { name: '房地产', change: -1.23, sentiment: 'bearish', confidence: 0.71 },
  { name: '消费电子', change: 1.56, sentiment: 'bullish', confidence: 0.68 },
  { name: '汽车', change: 0.89, sentiment: 'neutral', confidence: 0.54 },
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: '央行宣布降准0.5个百分点，释放长期资金约1.2万亿',
    source: '新华社',
    timestamp: '08:30',
    sentiment: 0.75,
    impact: 'high',
    summary: '中国人民银行决定下调金融机构存款准备金率0.5个百分点，此次降准将释放长期资金约1.2万亿元，有效增加金融机构长期稳定资金来源，增强信贷增长的稳定性。',
    relatedSectors: ['银行', '房地产', '基建'],
  },
  {
    id: '2',
    title: '英伟达发布新一代AI芯片，算力提升50%',
    source: '路透社',
    timestamp: '09:15',
    sentiment: 0.82,
    impact: 'high',
    summary: '英伟达在年度开发者大会上发布新一代Blackwell架构GPU，性能较上一代提升50%，对国内AI产业链形成重大催化。',
    relatedSectors: ['半导体', '人工智能', '消费电子'],
  },
  {
    id: '3',
    title: '房地产调控政策再度收紧，多地限购升级',
    source: '经济观察报',
    timestamp: '10:00',
    sentiment: -0.45,
    impact: 'medium',
    summary: '多个二线城市宣布加强房地产调控，提高首付比例和限购门槛，短期内对地产板块形成压力。',
    relatedSectors: ['房地产', '银行', '建材'],
  },
  {
    id: '4',
    title: '新能源汽车销量创新高，渗透率突破40%',
    source: '中汽协',
    timestamp: '11:30',
    sentiment: 0.68,
    impact: 'medium',
    summary: '11月新能源汽车销量达到115万辆，同比增长32%，市场渗透率首次突破40%，产业链持续受益。',
    relatedSectors: ['新能源', '汽车', '锂电池'],
  },
  {
    id: '5',
    title: '美联储暗示明年降息步伐可能放缓',
    source: '彭博社',
    timestamp: '06:00',
    sentiment: -0.32,
    impact: 'high',
    summary: '美联储主席鲍威尔在最新讲话中表示，明年降息步伐可能会放缓，市场对2024年降息预期有所调整。',
    relatedSectors: ['银行', '有色金属', '贵金属'],
  },
];

export const signalIndicators: SignalIndicator[] = [
  { name: '市场情绪指数', value: 68, signal: 'buy', confidence: 0.72, description: '基于新闻舆情和社交媒体分析的综合情绪指标' },
  { name: '资金流向指标', value: 45, signal: 'hold', confidence: 0.65, description: '主力资金净流入/流出情况追踪' },
  { name: '波动率预警', value: 23, signal: 'buy', confidence: 0.81, description: '基于历史波动率和隐含波动率的风险评估' },
  { name: '行业轮动信号', value: 72, signal: 'buy', confidence: 0.68, description: 'AI驱动的行业轮动预测模型' },
  { name: '宏观风险指数', value: 35, signal: 'hold', confidence: 0.75, description: '综合宏观经济指标的风险评估' },
];

export const marketInsights: MarketInsight[] = [
  {
    id: '1',
    type: 'alert',
    title: '央行降准利好银行板块',
    content: '降准释放流动性，银行净息差有望企稳，建议关注优质银行股投资机会',
    timestamp: '08:35',
    priority: 'critical',
  },
  {
    id: '2',
    type: 'trend',
    title: 'AI芯片概念持续走强',
    content: '英伟达新品发布带动算力产业链，国产GPU替代逻辑加强',
    timestamp: '09:20',
    priority: 'high',
  },
  {
    id: '3',
    type: 'insight',
    title: '新能源车渗透率创新高',
    content: '产业链景气度维持高位，重点关注电池和整车龙头',
    timestamp: '11:35',
    priority: 'medium',
  },
  {
    id: '4',
    type: 'alert',
    title: '地产调控再度收紧',
    content: '短期规避地产及相关产业链，等待政策面明朗',
    timestamp: '10:05',
    priority: 'high',
  },
];

export const historicalData = {
  labels: ['09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00'],
  datasets: [
    { name: '上证指数', data: [3065, 3072, 3068, 3078, 3082, 3079, 3085, 3081, 3087, 3089] },
    { name: '创业板指', data: [1910, 1915, 1912, 1918, 1920, 1917, 1922, 1919, 1921, 1923] },
  ],
};

export const sentimentTrend = [
  { time: '08:00', positive: 45, neutral: 35, negative: 20 },
  { time: '09:00', positive: 52, neutral: 30, negative: 18 },
  { time: '10:00', positive: 48, neutral: 32, negative: 20 },
  { time: '11:00', positive: 55, neutral: 28, negative: 17 },
  { time: '12:00', positive: 58, neutral: 27, negative: 15 },
  { time: '13:00', positive: 54, neutral: 30, negative: 16 },
  { time: '14:00', positive: 60, neutral: 25, negative: 15 },
  { time: '15:00', positive: 62, neutral: 24, negative: 14 },
];

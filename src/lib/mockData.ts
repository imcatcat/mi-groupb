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
  { symbol: '000001.SH', name: 'SSE Composite', price: 3089.26, change: 23.45, changePercent: 0.76, volume: '324.5B' },
  { symbol: '399001.SZ', name: 'SZSE Component', price: 9856.78, change: -45.32, changePercent: -0.46, volume: '452.1B' },
  { symbol: '399006.SZ', name: 'ChiNext', price: 1923.45, change: 12.67, changePercent: 0.66, volume: '187.6B' },
  { symbol: '000016.SH', name: 'SSE 50', price: 2456.89, change: 18.23, changePercent: 0.75, volume: '87.6B' },
  { symbol: '000300.SH', name: 'CSI 300', price: 3678.54, change: 25.67, changePercent: 0.70, volume: '234.5B' },
  { symbol: '000905.SH', name: 'CSI 500', price: 5234.12, change: -12.34, changePercent: -0.24, volume: '123.4B' },
];

export const sectorData: SectorData[] = [
  { name: 'AI & Technology', change: 3.24, sentiment: 'bullish', confidence: 0.85 },
  { name: 'New Energy', change: 1.87, sentiment: 'bullish', confidence: 0.72 },
  { name: 'Semiconductors', change: 2.15, sentiment: 'bullish', confidence: 0.78 },
  { name: 'Healthcare', change: -0.45, sentiment: 'neutral', confidence: 0.56 },
  { name: 'Banking', change: 0.32, sentiment: 'neutral', confidence: 0.62 },
  { name: 'Real Estate', change: -1.23, sentiment: 'bearish', confidence: 0.71 },
  { name: 'Consumer Electronics', change: 1.56, sentiment: 'bullish', confidence: 0.68 },
  { name: 'Automotive', change: 0.89, sentiment: 'neutral', confidence: 0.54 },
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Central Bank Announces 0.5% RRR Cut, Releasing ~$170B in Liquidity',
    source: 'Reuters',
    timestamp: '08:30',
    sentiment: 0.75,
    impact: 'high',
    summary: 'The central bank has decided to cut the reserve requirement ratio by 0.5 percentage points, releasing approximately $170 billion in long-term funds to enhance credit stability.',
    relatedSectors: ['Banking', 'Real Estate', 'Infrastructure'],
  },
  {
    id: '2',
    title: 'NVIDIA Unveils Next-Gen AI Chips with 50% Performance Boost',
    source: 'Bloomberg',
    timestamp: '09:15',
    sentiment: 0.82,
    impact: 'high',
    summary: 'NVIDIA announced the new Blackwell architecture GPU at its annual developer conference, delivering 50% improved performance over previous generation, catalyzing the AI supply chain.',
    relatedSectors: ['Semiconductors', 'AI & Technology', 'Consumer Electronics'],
  },
  {
    id: '3',
    title: 'Property Regulations Tighten as Multiple Cities Increase Purchase Limits',
    source: 'Financial Times',
    timestamp: '10:00',
    sentiment: -0.45,
    impact: 'medium',
    summary: 'Several tier-2 cities announced stricter real estate controls, raising down payment requirements and purchase restrictions, creating short-term pressure on the sector.',
    relatedSectors: ['Real Estate', 'Banking', 'Materials'],
  },
  {
    id: '4',
    title: 'EV Sales Hit Record High, Market Penetration Exceeds 40%',
    source: 'CAAM',
    timestamp: '11:30',
    sentiment: 0.68,
    impact: 'medium',
    summary: 'November EV sales reached 1.15 million units, up 32% YoY, with market penetration exceeding 40% for the first time. The supply chain continues to benefit.',
    relatedSectors: ['New Energy', 'Automotive', 'Batteries'],
  },
  {
    id: '5',
    title: 'Fed Signals Potential Slowdown in Rate Cuts for Next Year',
    source: 'CNBC',
    timestamp: '06:00',
    sentiment: -0.32,
    impact: 'high',
    summary: 'Fed Chair Powell indicated in his latest speech that rate cuts may slow next year, prompting market adjustments to 2024 rate expectations.',
    relatedSectors: ['Banking', 'Non-ferrous Metals', 'Precious Metals'],
  },
];

export const signalIndicators: SignalIndicator[] = [
  { name: 'Market Sentiment Index', value: 68, signal: 'buy', confidence: 0.72, description: 'Composite sentiment indicator based on news and social media analysis' },
  { name: 'Capital Flow Indicator', value: 45, signal: 'hold', confidence: 0.65, description: 'Tracking net inflow/outflow of institutional capital' },
  { name: 'Volatility Alert', value: 23, signal: 'buy', confidence: 0.81, description: 'Risk assessment based on historical and implied volatility' },
  { name: 'Sector Rotation Signal', value: 72, signal: 'buy', confidence: 0.68, description: 'AI-driven sector rotation prediction model' },
  { name: 'Macro Risk Index', value: 35, signal: 'hold', confidence: 0.75, description: 'Comprehensive macroeconomic indicator risk assessment' },
];

export const marketInsights: MarketInsight[] = [
  {
    id: '1',
    type: 'alert',
    title: 'RRR Cut Benefits Banking Sector',
    content: 'Liquidity release from RRR cut may stabilize bank net interest margins. Consider banking sector opportunities.',
    timestamp: '08:35',
    priority: 'critical',
  },
  {
    id: '2',
    type: 'trend',
    title: 'AI Chip Momentum Continues',
    content: 'NVIDIA product launch drives computing power supply chain. Domestic GPU substitution logic strengthens.',
    timestamp: '09:20',
    priority: 'high',
  },
  {
    id: '3',
    type: 'insight',
    title: 'EV Penetration at All-Time High',
    content: 'Industry prosperity remains elevated. Focus on battery and vehicle OEM leaders.',
    timestamp: '11:35',
    priority: 'medium',
  },
  {
    id: '4',
    type: 'alert',
    title: 'Property Controls Tighten Again',
    content: 'Avoid real estate and related supply chains in the short term. Wait for policy clarity.',
    timestamp: '10:05',
    priority: 'high',
  },
];

export const historicalData = {
  labels: ['09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00'],
  datasets: [
    { name: 'SSE Composite', data: [3065, 3072, 3068, 3078, 3082, 3079, 3085, 3081, 3087, 3089] },
    { name: 'ChiNext', data: [1910, 1915, 1912, 1918, 1920, 1917, 1922, 1919, 1921, 1923] },
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

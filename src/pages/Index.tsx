import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import MarketOverview from '@/components/MarketOverview';
import SectorHeatmap from '@/components/SectorHeatmap';
import NewsFeed from '@/components/NewsFeed';
import SignalPanel from '@/components/SignalPanel';
import InsightsPanel from '@/components/InsightsPanel';
import SentimentChart from '@/components/SentimentChart';
import QueryInterface from '@/components/QueryInterface';
import DataSourceStatus from '@/components/DataSourceStatus';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketTicker />
      
      <main className="p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Market Data & Sectors */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <MarketOverview />
            <DataSourceStatus />
          </div>

          {/* Center Column - Main Content */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <SectorHeatmap />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SentimentChart />
              <InsightsPanel />
            </div>
            <QueryInterface />
          </div>

          {/* Right Column - News & Signals */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <NewsFeed />
            <SignalPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

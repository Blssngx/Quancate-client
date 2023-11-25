"use client"
import { useEffect, useState } from 'react';
import { Metadata } from "next"
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import TradeCard from "@/components/TradeCard"
import { fetchMarketData } from '../api/market-data/route';
import FloatingDisclaimer from '@/components/FloatingDisclaimer';
import { UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"
import ISignalData from "@/interfaces/signalData"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  const [signalData, setSignalData] = useState<ISignalData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<string>('synthetic_index');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMarketData(selectedTab);
        setSignalData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const renderTradeCards = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (signalData && signalData.length > 0) {
      return signalData.map((data: ISignalData) => (
        <TradeCard
          key={data.symbol}
          symbol={data.symbol_display}
          bullish={data.marketDirection === 'Bullish'}
          signalquality={data.signalQuality}
          entryPrice={data.tradeParameters.entry}
          stopLoss={data.tradeParameters.sl}
          takeProfit1={data.tradeParameters.tp1}
          takeProfit2={data.tradeParameters.tp2}
          tradeExecution={data.tradeExecution}
        />
      ));
    } else {
      return <p>Data is currently unavailable</p>;
    }
  };

  return (
    <>
      <div className="absolute container inset-0 min-h-screen">
        <div className="flex h-16 items-center px-4">
          <Link href="/">
            <div className="relative z-20 flex items-center text-lg font-medium">
              {/* <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-6 w-6 ml-4"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
              </svg> */}
              WANTOW
            </div>
          </Link>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            {/* <Search /> */}
            <ModeToggle />
            <UserButton />
          </div>
        </div>

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <div className="flex items-center space-x-2">
              <h2 className="text-3xl font-bold tracking-tight">Live Signals</h2>
              <Link href="/">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-6 w-6 ml-4"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3V8M3 8H8M3 8L6 5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.71683 21 4.13247 18.008 3.22302 14" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button>Download</Button>
            </div>
          </div>

          {/* Body */}
          <Tabs defaultValue="synthetic_index" className="space-y-4">
            <TabsList>
              {['synthetic_index', 'forex', 'commodities', 'indices', 'cryptocurrency'].map(tabValue => (
                <TabsTrigger
                  key={tabValue}
                  value={tabValue}
                  onClick={() => handleTabChange(tabValue)}
                >
                  {tabValue === 'synthetic_index' ? 'Synthetic Indices' : tabValue}
                </TabsTrigger>
              ))}
            </TabsList>
            {['synthetic_index', 'forex', 'commodities', 'indices', 'cryptocurrency'].map(tabValue => (
              <TabsContent key={tabValue} value={tabValue} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {renderTradeCards()}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <footer>
        <FloatingDisclaimer />
      </footer>
    </>
  );
}

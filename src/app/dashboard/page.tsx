"use client"
import { useEffect, useState } from 'react';
import { Metadata } from "next"
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TradeCard from "../../components/TradeCard"
import FloatingDisclaimer from '../../components/FloatingDisclaimer';
import { Button } from "@/components/ui/button"
import { ModeToggle } from "../../components/ModeToggle"
import { ISignalData, IStatsData } from "@/interfaces/signalData"
import axios from 'axios';
import PieChart from '@/components/PieChart';
import { CreatePostion } from './components/createPosition';

export default function DashboardPage() {
  const [signalData, setSignalData] = useState<ISignalData[]>([]);
  const [dummyData, setDummyData] = useState<ISignalData[]>([]);
  const [statsData, setStatsData] = useState<IStatsData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<string>('synthetic_index');
  const [data, setData] = useState<ISignalData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/candlesticks');
        setSignalData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once on mount

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/rest/thousand');
        setStatsData(response.data.CreateIncreasePosition);
        // setDummyData(dummy)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once on mount

  function countIsLongValues(positions: IStatsData[]): { trueCount: number; falseCount: number } {
    let trueCount = 0;
    let falseCount = 0;

    for (const position of positions) {
      if (position.isLong) {
        trueCount++;
      } else {
        falseCount++;
      }
    }

    return { trueCount, falseCount };
  }


  const counts = countIsLongValues(statsData);
  // console.log("True count:", counts.trueCount);
  // console.log("False count:", counts.falseCount);

  return (
    <>
      <div className="absolute container inset-0 min-h-screen">
        <div className="flex h-16 items-center px-4">
          <Link href="/">
            <div className="relative z-20 flex items-center text-lg font-medium">
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
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
              </svg>
              Quancate
            </div>
          </Link>
          {/* <MainNav className="mx-6" /> */}
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <div className="flex items-center space-x-2">
              <h2 className="text-3xl font-bold tracking-tight">Trading Dashboard</h2>
            </div>
            <div className="flex items-center space-x-2">
              {/* <Button>Download</Button> */}
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Trading Signals</TabsTrigger>
              <TabsTrigger value="analytics">Charts</TabsTrigger>
              <TabsTrigger value="reports">Excecution</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {signalData ? (
                  signalData.map((data) => (
                    <TradeCard
                      key={data.symbol}
                      symbol={data.symbol}
                      bullish={data.marketDirection === 'Bullish'}
                      signalquality={data.signalQuality}
                      entryPrice={data.tradeParameters.entry}
                      stopLoss={data.tradeParameters.sl}
                      takeProfit1={data.tradeParameters.tp1}
                      takeProfit2={data.tradeParameters.tp2}
                      tradeExecution={data.tradeExecution}
                    />
                  ))
                ) : (
                  <p>Loading data...</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="w-100 h-100">
                <PieChart trueCount={counts.trueCount} falseCount={counts.falseCount} />
              </div>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <CreatePostion />
            </TabsContent>
          </Tabs>

        </div>
      </div>
      <footer>
        <FloatingDisclaimer />
      </footer>
    </>
  );
}

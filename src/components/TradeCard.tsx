import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './ui/card';
import SignalQualityBars from './SignalQualityBars';

interface TradeCardProps {
  symbol: string;
  bullish: boolean;
  entryPrice: number;
  stopLoss: number;
  takeProfit1: number;
  takeProfit2: number;
  tradeExecution: string;
  signalquality: string;
}

const TradeCard: React.FC<TradeCardProps> = ({
  symbol,
  bullish,
  entryPrice,
  stopLoss,
  takeProfit1,
  takeProfit2,
  tradeExecution,
  signalquality,
}) => {
  const isBullish = bullish === true;

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-md font-medium flex-row">
              {symbol}
            </CardTitle>
            <CardTitle className={`text-md ml-4 font-medium ${isBullish ? 'text-green-500' : 'text-red-500'}`}>
              {isBullish ? 'Bullish' : 'Bearish'}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          {/* <SignalQualityBars quality={signalquality} /> */}
          <div className="grid grid-cols-4 gap-1">
            <div>
              <div className="text-muted-foreground text-xs">Stop Loss</div>
              <div className="text-red-500 mb-2 text-xs">{stopLoss}</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Entry Price</div>
              <div className="text-xs">{entryPrice}</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Take Profit 1</div>
              <div className="text-green-500 mb-2 text-xs">{takeProfit1}</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Take Profit 2</div>
              <div className="text-green-500 mb-2 text-xs">{takeProfit2}</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1">
            <div>
              <div className="text-muted-foreground text-xs">Execution</div>
              <div className="mb-2 text-xs">{tradeExecution}</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Signal Quality</div>
              <div className="mb-2 text-xs">{signalquality}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TradeCard;

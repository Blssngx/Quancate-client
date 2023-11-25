import React from 'react';

interface SignalQualityBarsProps {
  quality: string;
}

const SignalQualityBars: React.FC<SignalQualityBarsProps> = ({ quality }) => {
  const getBarColor = (quality: string) => {
    switch (quality) {
      case 'neutral':
        return 'bg-red-400';
      case 'poor':
        return 'bg-red-400';
      case 'fair':
        return 'bg-yellow-400';
      case 'best':
        return 'bg-green-400';
      default:
        return 'bg-red-400';
    }
  };

  return (
    <div className="flex space-x-2">
      {/* <div className={`w-1/4 h-2 rounded-lg ${getBarColor(quality)}`}></div>
      <div className={`w-1/4 h-2 rounded-lg ${getBarColor(quality)}`}></div>
      <div className={`w-1/4 h-2 rounded-lg ${getBarColor(quality)}`}></div>
      <div className={`w-1/4 h-2 rounded-lg ${getBarColor(quality)}`}></div> */}
      <p>{quality}</p>
    </div>
  );
};

export default SignalQualityBars;

// components/RandomTagline.tsx

import React, { useState, useEffect } from 'react';

interface RandomTaglineProps {
  taglines: string[];
  interval: number;
  onTaglineChange: (tagline: string) => void;
}

const RandomTagline: React.FC<RandomTaglineProps> = ({ taglines, interval, onTaglineChange }) => {
  const [randomTagline, setRandomTagline] = useState<string>("");

  const pickRandomTagline = () => {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    const newRandomTagline = taglines[randomIndex];
    setRandomTagline(newRandomTagline);
    onTaglineChange(newRandomTagline);
  };

  useEffect(() => {
    const timer = setInterval(pickRandomTagline, interval); // Change tagline at the specified interval
    return () => clearInterval(timer);
  }, []);

  return randomTagline;
};

export default RandomTagline;

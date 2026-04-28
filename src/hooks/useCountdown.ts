import { useEffect, useState } from 'react';

export interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isExpired: boolean;
}

export function useCountdown(targetDate: string): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isExpired: false,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference < 0) {
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
        return;
      }

      const pad = (num: number) => String(num).padStart(2, '0');

      setTimeLeft({
        days: pad(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: pad(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: pad(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: pad(Math.floor((difference % (1000 * 60)) / 1000)),
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div className="w-full flex justify-center text-3xl my-4">{time}</div>;
}

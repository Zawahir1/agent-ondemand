
'use client'

import React, { useState, useEffect } from 'react';

const TimeLocation: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
      const dayName = days[now.getDay()];

      // dd/mm/yy
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = String(now.getFullYear()).slice(-2);

      // hh:mm AM/PM
      let hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const strHours = String(hours).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      setTimeStr(`${dayName}, ${day}/${month}/${year}, ${strHours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-normal text-sm leading-tight text-white">
      <div>{timeStr}</div>
      <div className="font-medium underline decoration-white/30 underline-offset-4 mt-1">Milano</div>
    </div>
  );
};

export default TimeLocation;

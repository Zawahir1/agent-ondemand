
import React from 'react';

interface ParentLogoProps {
  className?: string;
  dark?: boolean;
}

const ParentLogo: React.FC<ParentLogoProps> = ({ className = "", dark = false }) => {
  const textColor = dark ? "text-white" : "text-gray-900";
  const circleColor = dark ? "bg-gray-400" : "bg-gray-200";
  const sodColor = dark ? "text-gray-900" : "text-gray-900";

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* The SoD Circle */}
      <div className={`relative w-10 h-10 rounded-full ${circleColor} flex items-center justify-center flex-shrink-0`}>
        <span className={`font-bold text-sm tracking-tighter ${sodColor}`}>SoD</span>
      </div>
      
      {/* The Text Part */}
      <div className={`flex items-baseline gap-1.5 font-sans italic tracking-tighter uppercase ${textColor}`}>
        <span className="text-xl font-black">SALES</span>
        <span className="text-sm font-normal lowercase not-italic">on</span>
        <span className="text-xl font-black">DEMAND</span>
      </div>
    </div>
  );
};

export default ParentLogo;

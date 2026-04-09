
import React from 'react';

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col font-bold text-2xl leading-[0.8] tracking-tight text-gray-900 select-none w-min group cursor-pointer"
    >
      <div>Agent on</div>
      <div>Demand.</div>
    </div>
  );
};

export default Logo;

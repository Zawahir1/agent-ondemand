
import React from 'react';

const BackgroundGlow: React.FC = () => {
  return (
    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] -z-10 pointer-events-none">
      {/* Main Blue Glow - Reduced blur and using standard blend for visibility on white */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[500px] bg-blue-100 rounded-[100%] blur-[80px] md:blur-[100px] opacity-80"></div>

      {/* Secondary Purple Accent */}
      <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[80px] opacity-70 animate-pulse" style={{ animationDuration: '4s' }}></div>

      {/* Third lighter accent */}
      <div className="absolute top-[-50px] right-[20%] w-[300px] h-[300px] bg-sky-100 rounded-full blur-[60px] opacity-60"></div>
    </div>
  );
};

export default BackgroundGlow;
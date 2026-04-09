
import React from 'react';

const HonorsBadge: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
        {/* Simulating the black sticky tab "Honors" or "W." shown in the image */}
        <div className="bg-black w-10 py-6 flex flex-col items-center justify-center rounded-l-md border-l border-t border-b border-gray-800 cursor-pointer hover:w-12 transition-all">
            <span className="text-white font-bold text-xs mb-4">W.</span>
            <span className="text-white text-[10px] tracking-widest uppercase writing-vertical-rl rotate-180 opacity-70">
                Premi
            </span>
        </div>
    </div>
  );
};

export default HonorsBadge;

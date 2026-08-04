"use client";

import { ReactNode } from "react";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    white?: boolean;
}

const GRADIENT_STYLE = `
@keyframes ag-sweep {
    /* 0s - 6s: Pause at 100% (pure base color) */
    0%, 30% {
        background-position: 100% 50%;
    }
    /* 6s - 10s: Sweep left-to-right (100% to 0%), ending in pure base color */
    50% {
        background-position: 0% 50%;
    }
    /* 10s - 16s: Pause at 0% (pure base color) */
    80% {
        background-position: 0% 50%;
    }
    /* 16s - 20s: Sweep right-to-left (0% to 100%), ending in pure base color */
    100% {
        background-position: 100% 50%;
    }
}

.ag-text {
    /* Gradient width is 400%. 
       - Left 1/4 (0% - 25%): Pure Black
       - Middle 2/4 (25% - 75%): Wide colorful burst (starts/ends at Black, centered at 50%)
       - Right 1/4 (75% - 100%): Pure Black
    */
    background-image: linear-gradient(
        90deg,
        rgb(251, 249, 247) 0%,
        rgb(251, 249, 247) 25%,
        
        /* Colorful burst starts here */
        rgb(251, 249, 247) 26%,
        rgb(4, 120, 87) 30%,
        rgb(16, 185, 129) 35%,
        rgb(110, 231, 183) 42%,
        rgb(52, 211, 153) 47%,
        rgb(242, 198, 119) 50%, /* Gold center */
        rgb(20, 184, 166) 53%,
        rgb(45, 212, 191) 58%,
        rgb(13, 148, 136) 65%,
        rgb(251, 249, 247) 70%,
        
        /* Pure creamy continues */
        rgb(251, 249, 247) 75%,
        rgb(251, 249, 247) 100%
    );
    background-size: 400% 100%;
    background-position: 100% 50%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: inline-block;
    
    /* 20s total loop to cut the movement speed in half */
    animation: ag-sweep 20s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.ag-text-white {
    /* Gradient width is 400%. 
       - Left 1/4 (0% - 25%): Pure White
       - Middle 2/4 (25% - 75%): Wide colorful burst (starts/ends at White, centered at 50%)
       - Right 1/4 (75% - 100%): Pure White
     */
    background-image: linear-gradient(
        90deg,
        rgb(255, 255, 255) 0%,
        rgb(255, 255, 255) 25%,
        
        /* Colorful burst starts here */
        rgb(255, 255, 255) 26%,
        rgb(167, 243, 208) 30%,
        rgb(110, 231, 183) 35%,
        rgb(52, 211, 153) 42%,
        rgb(16, 185, 129) 47%,
        rgb(242, 198, 119) 50%, /* Gold center */
        rgb(45, 212, 191) 53%,
        rgb(20, 184, 166) 58%,
        rgb(110, 231, 183) 65%,
        rgb(167, 243, 208) 70%,
        rgb(255, 255, 255) 74%,
        
        /* Pure white continues */
        rgb(255, 255, 255) 75%,
        rgb(255, 255, 255) 100%
    );
    background-size: 400% 100%;
    background-position: 100% 50%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: inline-block;
    
    /* 20s total loop to cut the movement speed in half */
    animation: ag-sweep 20s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
`;

/**
 * Reusable animated gradient text. 
 * Starts black (or white if white=true), sweeps colors left-to-right slowly, pauses, then sweeps back right-to-left slowly.
 */
export default function GradientText({ children, className = "", white = false }: GradientTextProps) {
    return (
        <>
            {/* eslint-disable-next-line react/no-danger */}
            <style dangerouslySetInnerHTML={{ __html: GRADIENT_STYLE }} />
            <span className={`${white ? 'ag-text-white' : 'ag-text'} ${className}`}>
                {children}
            </span>
        </>
    );
}

'use client'

import React, { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    z: number;
    color: string;
    size: number;
}

const StarField: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const rotation = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const count = 2000; // Increased number of stars for denser field
        const depth = 2000; // Depth of the field

        // Define color palettes
        const colors = [
            '0, 85, 255',   // Shore Blue
            '107, 114, 128', // Grey
            '17, 17, 17'     // Black
        ];

        const initStars = () => {
            stars = [];
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: (Math.random() - 0.5) * window.innerWidth * 3, // Spread wide
                    y: (Math.random() - 0.5) * window.innerHeight * 3,
                    z: (Math.random() - 0.5) * depth,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 2 + 0.5 // Random size between 0.5 and 2.5
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Smoother mouse tracking
            mouse.current = {
                x: (e.clientX - window.innerWidth / 2) * 0.0005,
                y: (e.clientY - window.innerHeight / 2) * 0.0005,
            };
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Interpolate rotation for smoothness
            rotation.current.x += (mouse.current.y - rotation.current.x) * 0.05;
            rotation.current.y += (mouse.current.x - rotation.current.y) * 0.05;

            const cosX = Math.cos(rotation.current.x);
            const sinX = Math.sin(rotation.current.x);
            const cosY = Math.cos(rotation.current.y);
            const sinY = Math.sin(rotation.current.y);

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);

            stars.forEach((star) => {
                // Rotate around Y axis
                let x = star.x * cosY - star.z * sinY;
                let z = star.x * sinY + star.z * cosY;

                // Rotate around X axis
                let y = star.y * cosX - z * sinX;
                let finalZ = star.y * sinX + z * cosX;

                // Perspective projection
                // Use a fixed distance for perspective (camera distance)
                const fov = 800;
                // Avoid division by zero or negative z if possible, though random z is centered at 0
                // Shift z so everything is in front of "camera" effectively or handle clipping
                // Here we just use a simple projection, stars behind camera won't be drawn well or will invert
                // For a background field, we can just push them back or wrap them.
                // Let's assume standard simple projection:
                const scale = fov / (fov + finalZ);

                // Skip if behind camera or too close
                if (scale < 0) return;

                const screenX = x * scale;
                const screenY = y * scale;

                // Opacity based on Z (depth fog)
                // Map z from -depth/2 to depth/2 -> opacity
                // Closer stars (negative Z in this system usually) = brighter? 
                // Or just random opacity. Let's use scale for opacity to fake depth lighting.
                const alpha = Math.min(1, Math.max(0.1, scale * 0.8));

                ctx.beginPath();
                ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
                // Draw circle for nicer stars
                ctx.arc(screenX, screenY, star.size * scale, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.restore();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
        />
    );
};

export default StarField;

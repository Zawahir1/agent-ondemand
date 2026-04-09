'use client'

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  color: string;
}

const ParticleSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const count = 1000;
    const radius = 200; // Smaller radius as requested

    // Define color palettes
    const colors = [
      '0, 85, 255',   // Shore Blue
      '107, 114, 128', // Grey
      '17, 17, 17'     // Black
    ];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;

        particles.push({
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi),
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX - window.innerWidth / 2) * 0.0008,
        y: (e.clientY - window.innerHeight / 2) * 0.0008,
      };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smoothing the rotation
      rotation.current.x += (mouse.current.y - rotation.current.x) * 0.05;
      rotation.current.y += (mouse.current.x - rotation.current.y) * 0.05;

      const cosX = Math.cos(rotation.current.x);
      const sinX = Math.sin(rotation.current.x);
      const cosY = Math.cos(rotation.current.y);
      const sinY = Math.sin(rotation.current.y);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      particles.forEach((p) => {
        // Rotate around Y axis
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;

        // Rotate around X axis
        let y = p.y * cosX - z * sinX;
        let finalZ = p.y * sinX + z * cosX;

        // Simple perspective
        const perspective = 800 / (800 + finalZ);
        const screenX = x * perspective;
        const screenY = y * perspective;

        // Size based on depth
        const size = Math.max(0.6, 1.8 * perspective);

        // Opacity based on depth
        const alpha = Math.max(0.08, perspective - 0.25);

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;

        ctx.rect(screenX, screenY, size, size);
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

export default ParticleSphere;

"use client";

import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

interface FallingTextProps {
    text?: string;
    highlightWords?: string[];
    trigger?: 'auto' | 'scroll' | 'click' | 'hover';
    backgroundColor?: string;
    wireframes?: boolean;
    gravity?: number;
    mouseConstraintStiffness?: number;
    fontSize?: string;
    splitBy?: 'word' | 'line';
    boxClassName?: string;
    containerClassName?: string;
    boxWidth?: number;
    boxHeight?: number;
}

const FallingText: React.FC<FallingTextProps> = ({
    text = '',
    highlightWords = [],
    trigger = 'auto',
    backgroundColor = 'transparent',
    wireframes = false,
    gravity = 1,
    mouseConstraintStiffness = 0.2,
    fontSize = '1rem',
    splitBy = 'word',
    boxClassName = '',
    containerClassName = '',
    boxWidth,
    boxHeight
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const canvasContainerRef = useRef<HTMLDivElement | null>(null);

    const [effectStarted, setEffectStarted] = useState(false);

    // Split text into spans and highlight specified words
    useEffect(() => {
        if (!textRef.current) return;

        if (splitBy === 'line') {
            const lines = text.split('\n').filter(line => line.trim());
            const newHTML = lines
                .map(line => {
                    return `<div data-block class="inline-flex mx-2 my-1.5 select-none ${boxClassName}" style="font-family: var(--font-helvetica);">${line.trim()}</div>`;
                })
                .join('');
            textRef.current.innerHTML = newHTML;
            return;
        }

        const words = text.split(' ');

        const newHTML = words
            .map(word => {
                const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                const isHighlighted = highlightWords.some(hw =>
                    cleanWord.toLowerCase() === hw.toLowerCase() ||
                    word.toLowerCase().startsWith(hw.toLowerCase())
                );
                return `<span class="inline-block mx-[4px] select-none ${isHighlighted ? 'text-fuchsia-400 font-bold' : 'text-gray-800'
                    }" style="font-family: var(--font-helvetica);">
                    ${word}
                </span>`;
            })
            .join(' ');

        textRef.current.innerHTML = newHTML;
    }, [text, highlightWords, splitBy, boxClassName]);

    // Handle intersection observer for scroll trigger (triggers when element reaches the middle of the screen)
    useEffect(() => {
        if (trigger === 'auto') {
            setEffectStarted(true);
            return;
        }
        if (trigger === 'scroll' && containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setEffectStarted(true);
                        observer.disconnect();
                    }
                },
                { 
                    rootMargin: "-40% 0px -40% 0px", // Triggers when element is in the middle of the screen
                    threshold: 0 
                }
            );
            observer.observe(containerRef.current);
            return () => observer.disconnect();
        }
    }, [trigger]);

    // Matter.js physics engine loop
    useEffect(() => {
        if (!effectStarted) return;

        const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

        if (!containerRef.current || !canvasContainerRef.current || !textRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const width = containerRect.width;
        
        // Dynamically compute the container's height excluding the placeholder.
        // We use textRef's height (which contains the original spans before they are absolute positioned)
        // and add the container's padding. This prevents the height from being measured as double
        // when both the original spans and the placeholder are in the flow.
        const containerStyle = window.getComputedStyle(containerRef.current);
        const paddingTop = parseFloat(containerStyle.paddingTop) || 0;
        const paddingBottom = parseFloat(containerStyle.paddingBottom) || 0;
        const height = textRef.current.offsetHeight + paddingTop + paddingBottom;

        console.log("FallingText container dimensions:", { width, height, containerRect });

        if (width <= 0 || height <= 0) {
            console.warn("FallingText warning: Container dimensions are 0 or negative.");
            return;
        }

        const engine = Engine.create();
        engine.world.gravity.y = gravity;

        const render = Render.create({
            element: canvasContainerRef.current,
            engine,
            options: {
                width,
                height,
                background: backgroundColor,
                wireframes
            }
        });

        // Set static boundaries around the container
        // Top edge of the floor is at Y = height + 10 - 25 = height - 15 (fully visible at the bottom)
        const boundaryOptions = {
            isStatic: true,
            render: { fillStyle: 'transparent' }
        };
        const floor = Bodies.rectangle(width / 2, height + 10, width, 50, boundaryOptions);
        const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
        const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
        const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

        const wordSpans = textRef.current.querySelectorAll<HTMLElement>(splitBy === 'line' ? '[data-block]' : 'span');
        console.log("FallingText blocks found:", wordSpans.length);

        // Measure initial layouts of spans before setting position absolute
        const wordBodies = Array.from(wordSpans).map((elem, idx) => {
            const rect = elem.getBoundingClientRect();

            const w = boxWidth || rect.width;
            const h = boxHeight || rect.height;

            // Calculate center coordinates of the span relative to containerRef (its positioned parent)
            const x = rect.left - containerRect.left + w / 2;
            const y = rect.top - containerRect.top + h / 2;
            console.log(`Span ${idx} rect:`, { text: elem.innerText, rect, x, y, w, h });

            const body = Bodies.rectangle(x, y, w, h, {
                render: { fillStyle: 'transparent' },
                restitution: 0.6,
                frictionAir: 0.02,
                friction: 0.1
            });

            // Add slight initial random velocity for organic fall
            Matter.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 3,
                y: (Math.random() - 0.2) * 2
            });
            Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

            return { elem, body };
        });

        // Setup the initial layout styles for physics elements
        // Removing relative from textRef makes containerRef the absolute positioning target
        wordBodies.forEach(({ elem, body }) => {
            elem.style.position = 'absolute';
            elem.style.left = `${body.position.x}px`;
            elem.style.top = `${body.position.y}px`;
            elem.style.transform = 'translate(-50%, -50%)';
            elem.style.zIndex = '50';
        });

        // Mouse interaction constraint
        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: mouseConstraintStiffness,
                render: { visible: false }
            }
        });
        render.mouse = mouse;

        World.add(engine.world, [
            floor,
            leftWall,
            rightWall,
            ceiling,
            mouseConstraint,
            ...wordBodies.map(wb => wb.body)
        ]);

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        let animationFrameId: number;

        // Custom update loop for updating HTML nodes position with physics engine bodies
        const updateLoop = () => {
            wordBodies.forEach(({ body, elem }) => {
                const { x, y } = body.position;
                elem.style.left = `${x}px`;
                elem.style.top = `${y}px`;
                elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
            });
            animationFrameId = requestAnimationFrame(updateLoop);
        };
        updateLoop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas && canvasContainerRef.current) {
                canvasContainerRef.current.removeChild(render.canvas);
            }
            World.clear(engine.world, false);
            Engine.clear(engine);
        };
    }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness, splitBy, boxWidth, boxHeight]);

    const handleTrigger = () => {
        if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
            setEffectStarted(true);
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative z-30 w-3/4 mx-auto cursor-pointer text-center py-6 overflow-visible select-none ${containerClassName}`}
            onClick={trigger === 'click' ? handleTrigger : undefined}
            onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
        >
            {/* The physics-enabled text container - removed 'relative' so that absolute children position against containerRef */}
            <div
                ref={textRef}
                className="z-10 w-full"
                style={{
                    fontSize,
                    lineHeight: 1.6
                }}
            />

            {/* Invisible placeholder of the text to keep container dimensions stable and prevent collapse after animation starts */}
            {effectStarted && splitBy === 'line' && (
                <div
                    className="opacity-0 select-none pointer-events-none w-full"
                    style={{
                        fontSize,
                        lineHeight: 1.6
                    }}
                >
                    {text.split('\n').filter(line => line.trim()).map((line, idx) => (
                        <div key={idx} className={`inline-flex mx-2 my-1.5 ${boxClassName}`}>
                            {line.trim()}
                        </div>
                    ))}
                </div>
            )}
            {effectStarted && splitBy !== 'line' && (
                <div
                    className="opacity-0 select-none pointer-events-none w-full"
                    style={{
                        fontSize,
                        lineHeight: 1.6
                    }}
                >
                    {text.split(' ').map((word, idx) => {
                        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                        const isHighlighted = highlightWords.some(hw =>
                            cleanWord.toLowerCase() === hw.toLowerCase() ||
                            word.toLowerCase().startsWith(hw.toLowerCase())
                        );
                        return (
                            <span key={idx} className={`inline-block mx-[4px] ${isHighlighted ? 'font-bold' : ''}`}>
                                {word}
                            </span>
                        );
                    })}
                </div>
            )}

            {/* Matter.js canvas element container */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" ref={canvasContainerRef} />
        </div>
    );
};

export default FallingText;

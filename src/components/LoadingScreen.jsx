import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/c2_logo.png';

const LoadingScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // Initial set
        gsap.set(containerRef.current, { opacity: 1 });
        gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
        gsap.set(progressRef.current, { width: '0%' });

        // Animation sequence
        tl.to(logoRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        })
            .to(progressRef.current, {
                width: '100%',
                duration: 1.5,
                ease: 'power2.inOut'
            }, '-=0.5')
            .to(logoRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                delay: 0.2
            })
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in'
            });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
            <div className="relative mb-8">
                <img
                    ref={logoRef}
                    src={logo}
                    alt="Loading..."
                    className="h-24 w-auto object-contain"
                />
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                    ref={progressRef}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
            </div>

            <p className="mt-4 text-gray-500 font-mono text-sm animate-pulse">
                INITIALIZING SYSTEM...
            </p>
        </div>
    );
};

export default LoadingScreen;

import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

// Lazy load the 3D component to avoid main thread blocking
const SplineScene = lazy(() =>
    import('./ui/splite').then(module => ({ default: module.SplineScene }))
);

const Hero = () => {
    const [isDesktop, setIsDesktop] = React.useState(true);

    React.useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        // Initial check
        checkIsDesktop();

        // Listener
        window.addEventListener('resize', checkIsDesktop);
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-bg-grid"></div>
            <div className="container hero-container">
                <div className="hero-content-wrapper">
                    <div className="hero-text-content">
                        <h1 className="hero-main-title">
                            <span className="hero-title-line">CHANGING YOUR</span>
                            <span className="hero-title-line">IDEA OF WHAT</span>
                            <span className="hero-title-line hero-title-accent">ROBOTS CAN DO</span>
                        </h1>

                        <p className="hero-description">
                            Master robotics and hardware from scratch with our beginner-friendly online courses.
                            Learn Arduino, sensors, microcontrollers, and build real projects that solve actual problems.
                        </p>

                        <div className="hero-actions">
                            <Link to="/courses" className="hero-btn hero-btn-primary">Start Learning</Link>
                            <Link to="/learning" className="hero-btn hero-btn-secondary">Read Docs</Link>
                        </div>
                    </div>

                    <div className="hero-robot">
                        {isDesktop && (
                            <Suspense fallback={<div className="hero-spline-placeholder" style={{ height: '500px', width: '100%' }}></div>}>
                                <SplineScene
                                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                    className="hero-spline-scene"
                                />
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

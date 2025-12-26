import React from 'react';
import { Link } from 'react-router-dom';
import { SplineScene } from './ui/splite';

const Hero = () => {
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
                        <SplineScene 
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="hero-spline-scene"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import './WhatIsCircuitCrate.css';

const WhatIsCircuitCrate = () => {
    const stats = [
        { value: "50+", label: "Active Projects" },
        { value: "10k+", label: "Students Enrolled" },
        { value: "200+", label: "Hardware Components" },
        { value: "4.9/5", label: "Learner Rating" }
    ];

    return (
        <section className="what-is-section">
            <div className="what-is-bg-texture"></div>
            <div className="container what-is-container">
                <div className="what-is-header">
                    <h2 className="what-is-title-top">WHAT IS</h2>
                    <h2 className="what-is-title-bottom">CIRCUITCRATE!</h2>
                </div>

                <div className="what-is-content">
                    <p>
                        CircuitCrate is your premier destination for mastering robotics and electronics.
                        We aim to fast-track your journey from a curious beginner to a hardware expert.
                        CircuitCrate isn't just a course; it's a 360-degree holistic experience that offers
                        comprehensive learning through hands-on kits, personalized mentorship, real-world
                        project building, and a vibrant community of makers.
                    </p>
                    <p>
                        We provide a wide range of support, including detailed documentation, video guides,
                        and forum support to help you bring your innovative ideas to life.
                    </p>
                </div>

                <div className="what-is-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="what-is-stat-item">
                            <div className="what-is-stat-value">{stat.value}</div>
                            <div className="what-is-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIsCircuitCrate;

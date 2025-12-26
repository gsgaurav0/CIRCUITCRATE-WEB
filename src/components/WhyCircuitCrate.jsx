import React from 'react';


import { FaUserFriends, FaHandHoldingHeart, FaRocket } from 'react-icons/fa';
// importing the generated image - assuming it will be moved to assets or used from artifacts
// For now, I will use a placeholder path, and we will move the artifact later.
import aboutImage from '../assets/about_robotics_hands.png';

const WhyCircuitCrate = () => {
    const features = [
        { icon: <FaUserFriends />, text: 'For All Ages & Backgrounds' },
        { icon: <FaHandHoldingHeart />, text: 'Beginner-Friendly Approach' },
        { icon: <FaRocket />, text: 'Industry-Relevant Skills' },
    ];

    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        About <span className="text-white">CircuitCrate</span>
                    </h2>
                    <p className="about-description">
                        CircuitCrate is your gateway to the exciting world of robotics and
                        hardware. We believe that everyone should have access to quality
                        robotics education, regardless of their background or experience level.
                    </p>
                    <p className="about-description">
                        Our platform is designed for students, working professionals, and anyone
                        curious about how robots work. We focus on practical, hands-on learning
                        that builds real skills you can use in the real world.
                    </p>
                    <ul className="about-features">
                        {features.map((feature, index) => (
                            <li key={index} className="about-feature-item">
                                <span className="about-feature-icon">{feature.icon}</span>
                                <span className="about-feature-text">{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="about-visual">
                    <img src={aboutImage} alt="Hands working on robotics" className="about-image" />
                    {/* Floating Cards for decoration */}
                    <div className="float-card float-icon-1">⚙️</div>
                    <div className="float-card float-icon-2">🤖</div>
                    <div className="float-card float-icon-3">💻</div>
                </div>
            </div>
        </section>
    );
};

export default WhyCircuitCrate;

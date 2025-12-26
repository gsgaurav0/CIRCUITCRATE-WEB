import React from 'react';
import { FaNetworkWired, FaTrophy, FaChartLine, FaCogs, FaRocket, FaGift } from 'react-icons/fa';
import './WhyParticipate.css';

const WhyParticipate = () => {
    const benefits = [
        {
            id: 1,
            title: "NETWORKING",
            icon: <FaNetworkWired />,
            description: "Network with leading professionals and startups, creating valuable connections to drive success."
        },
        {
            id: 2,
            title: "PRIZES",
            icon: <FaTrophy />,
            description: "Compete for cash prizes worth ₹2L+, offering essential funding to support your engineering journey."
        },
        {
            id: 3,
            title: "MENTORING",
            icon: <FaChartLine />,
            description: "Receive valuable insights through personalized mentorship from industry experts and experienced mentors."
        },
        {
            id: 4,
            title: "WORKSHOPS",
            icon: <FaCogs />,
            description: "Participate in transformative workshops led by renowned engineers, enhancing your practical knowledge and skills."
        },
        {
            id: 5,
            title: "PROJECTS",
            icon: <FaRocket />,
            description: "Build real-world projects that solve actual problems, propelling your portfolio to new heights."
        },
        {
            id: 6,
            title: "BENEFITS",
            icon: <FaGift />,
            description: "Enjoy exclusive perks and offers from renowned companies, maximizing your learning potential."
        }
    ];

    return (
        <section className="why-participate-section">
            <div className="container why-participate-container">
                <div className="why-participate-header">
                    <h2 className="why-participate-title-top">WHY</h2>
                    <h2 className="why-participate-title-bottom">CIRCUITCRATE!</h2>
                </div>

                <div className="why-participate-grid">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="why-participate-card">
                            <h3 className="card-title">{benefit.title}</h3>
                            <div className="card-visual">
                                <div className="card-icon">
                                    {benefit.icon}
                                </div>
                                {/* Ornamental dots for tech look */}
                                <div className="card-dot dot-tl"></div>
                                <div className="card-dot dot-tr"></div>
                                <div className="card-dot dot-bl"></div>
                                <div className="card-dot dot-br"></div>
                            </div>
                            <p className="card-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyParticipate;

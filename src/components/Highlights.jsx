import React from 'react';

const Highlights = () => {
    const highlights = [
        { id: 1, title: 'Robotics Fundamentals', icon: '🤖' },
        { id: 2, title: 'Electronics Basics', icon: '⚡' },
        { id: 3, title: 'Arduino & ESP32', icon: '📟' },
        { id: 4, title: 'IoT & Automation', icon: '🌐' },
        { id: 5, title: 'Real-World Projects', icon: '🚀' },
    ];

    return (
        <section className="highlights">
            <div className="container">
                <div className="highlights-grid">
                    {highlights.map((item) => (
                        <div key={item.id} className="highlight-card">
                            <div className="highlight-icon">{item.icon}</div>
                            <h3 className="highlight-title">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;

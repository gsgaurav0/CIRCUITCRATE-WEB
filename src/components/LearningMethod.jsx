import React from 'react';
import { Lightbulb, Cpu, Code, Bot, Rocket } from 'lucide-react';
import './LearningMethod.css';

const steps = [
    {
        id: 1,
        number: '01',
        title: 'Start from Basics',
        description: 'Learn core concepts of electronics and robotics with zero assumptions.',
        icon: <Lightbulb size={24} />,
    },
    {
        id: 2,
        number: '02',
        title: 'Understand Components',
        description: 'Explore sensors, motors, microcontrollers, and how they work in real life.',
        icon: <Cpu size={24} />,
    },
    {
        id: 3,
        number: '03',
        title: 'Write Simple Code',
        description: 'Learn beginner-friendly coding for Arduino & ESP32 with clear explanations.',
        icon: <Code size={24} />,
    },
    {
        id: 4,
        number: '04',
        title: 'Build Real Hardware',
        description: 'Assemble circuits, robots, and IoT projects using actual components.',
        icon: <Bot size={24} />, // Approximation for Robot
    },
    {
        id: 5,
        number: '05',
        title: 'Improve Through Projects',
        description: 'Strengthen skills by building and upgrading real-world projects.',
        icon: <Rocket size={24} />,
    },
];

const LearningMethod = () => {
    return (
        <section className="learning-method-section">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="learning-header">
                    <h2 className="learning-title">Learning Method</h2>
                    <p className="learning-subtitle">
                        A simple step-by-step approach to master robotics and hardware
                    </p>
                </div>

                {/* Steps Container */}
                <div className="learning-steps-container">
                    {steps.map((step) => (
                        <div key={step.id} className="learning-card">
                            <span className="step-number">{step.number}</span>

                            <div className="card-icon-wrapper">
                                {step.icon}
                            </div>

                            <h3 className="card-title">{step.title}</h3>
                            <p className="card-desc">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningMethod;

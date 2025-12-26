import React from 'react';
import { Zap, Cpu, Code2, Bot, Rocket, Battery, Wifi, Activity, Speaker, ToggleLeft, Layers, Terminal, AlertTriangle, Thermometer } from 'lucide-react';
import './ProjectRoadmap.css';

const roadmapData = [
    {
        step: "01",
        title: "Start from Basics",
        projects: [
            {
                name: "LED Circuit Logic",
                desc: "Master voltage and current by building basic light circuits.",
                icon: <Zap size={20} />,
                tags: ["Analog", "Power"]
            },
            {
                name: "Series & Parallel",
                desc: "Understand how components share or split power in circuits.",
                icon: <Layers size={20} />,
                tags: ["Physics", "Circuits"]
            },
            {
                name: "Switch Logic Gates",
                desc: "Build physical AND/OR gates using mechanical switches.",
                icon: <ToggleLeft size={20} />,
                tags: ["Logic", "Hardware"]
            }
        ]
    },
    {
        step: "02",
        title: "Understand Components",
        projects: [
            {
                name: "Smart Night Light",
                desc: "Automate lights using LDR sensors and transistors.",
                icon: <Battery size={20} />,
                tags: ["Sensors", "Automation"]
            },
            {
                name: "Capacitor Fade",
                desc: "Visualize charge and discharge cycles with LEDs.",
                icon: <Activity size={20} />,
                tags: ["Timing", "Components"]
            },
            {
                name: "DC Motor Control",
                desc: "Learn motor driver basics and diode protection.",
                icon: <Cpu size={20} />,
                tags: ["Motors", "Movement"]
            }
        ]
    },
    {
        step: "03",
        title: "Write Simple Code",
        projects: [
            {
                name: "Arduino Blink",
                desc: "The 'Hello World' of hardware programming.",
                icon: <Code2 size={20} />,
                tags: ["C++", "Arduino"]
            },
            {
                name: "Traffic Light Sim",
                desc: "Program timing logic for a realistic traffic system.",
                icon: <AlertTriangle size={20} />,
                tags: ["Logic", "Timing"]
            },
            {
                name: "Serial Chat",
                desc: "Send messages between your computer and the microcontroller.",
                icon: <Terminal size={20} />,
                tags: ["Comms", "UART"]
            }
        ]
    },
    {
        step: "04",
        title: "Build Real Hardware",
        projects: [
            {
                name: "Distance Alarm",
                desc: "Create a security alarm using ultrasonic sensors.",
                icon: <Speaker size={20} />,
                tags: ["Security", "Sensors"]
            },
            {
                name: "Digital Thermometer",
                desc: "Display real-time temperature on an LCD screen.",
                icon: <Thermometer size={20} />,
                tags: ["Displays", "Data"]
            },
            {
                name: "Servo Robotic Arm",
                desc: "Control precise movement using PWM signals.",
                icon: <Bot size={20} />,
                tags: ["Robotics", "Servo"]
            }
        ]
    },
    {
        step: "05",
        title: "Improve Through Projects",
        projects: [
            {
                name: "Line Follower Robot",
                desc: "An autonomous robot that traces path lines.",
                icon: <Bot size={20} />,
                tags: ["Autonomous", "AI"]
            },
            {
                name: "Bluetooth RC Car",
                desc: "Drive a robot wirelessly using a smartphone app.",
                icon: <Wifi size={20} />,
                tags: ["Wireless", "IoT"]
            },
            {
                name: "IoT Weather Station",
                desc: "Log climate data to the cloud using ESP32.",
                icon: <Rocket size={20} />,
                tags: ["Cloud", "ESP32"]
            }
        ]
    }
];

const ProjectRoadmap = () => {
    return (
        <section className="roadmap-section">
            <div className="container mx-auto px-4">
                <div className="roadmap-header">
                    <h2 className="roadmap-title">Project Roadmap</h2>
                    <p className="roadmap-subtitle">
                        From your first circuit to autonomous robots—here is what you will build.
                    </p>
                </div>

                <div className="roadmap-grid">
                    {roadmapData.map((category, index) => (
                        <div key={index} className="roadmap-category" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="category-header">
                                <span className="category-number">{category.step}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="projects-list">
                                {category.projects.map((project, idx) => (
                                    <div key={idx} className="project-card">
                                        <div className="project-icon">
                                            {project.icon}
                                        </div>
                                        <h4 className="project-name">{project.name}</h4>
                                        <p className="project-desc">{project.desc}</p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectRoadmap;

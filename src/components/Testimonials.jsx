import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            company: "TechNova",
            text: "Joining CircuitCrate was the turning point for our hardware team. The structured learning path and hands-on projects gave us the confidence to prototype our first commercial robot in just 3 months.",
            logoColor: "#f59e0b" // Amber
        },
        {
            id: 2,
            company: "RoboSystems",
            text: "The mentorship provided is world-class. We were stuck on a sensor integration problem for weeks, and the CircuitCrate community helped us solve it in hours. Highly recommended!",
            logoColor: "#3b82f6" // Blue
        },
        {
            id: 3,
            company: "InnovateLabs",
            text: "As a student-led startup, funding and guidance were our biggest hurdles. CircuitCrate's challenges not only polished our skills but connected us with investors who believed in our vision.",
            logoColor: "#10b981" // Emerald
        },
        {
            id: 4,
            company: "FutureMakers",
            text: "The variety of components and the depth of the workshops are unmatched. We built a fully functional drone swarm system using the knowledge gained here.",
            logoColor: "#8b5cf6" // Violet
        },
        {
            id: 5,
            company: "AutoBotics",
            text: "CircuitCrate transformed our hobbyist group into a professional robotics collective. The prize money from the competitions helped us incorporate and launch our first product.",
            logoColor: "#ec4899" // Pink
        },
        {
            id: 6,
            company: "ElectroWiz",
            text: "I've taken many online electronics courses, but nothing comes close to the hands-on kit experience provided here. It's the perfect blend of theory and practice.",
            logoColor: "#ef4444" // Red
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-switching effect
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(interval);
    }, [activeIndex]); // Re-set interval on interaction so it doesn't jump immediately after a click

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const active = testimonials[activeIndex];

    return (
        <section className="testimonials-section">
            <div className="container testimonials-container">
                <h2 className="testimonials-title">TESTIMONIALS</h2>

                <div className="testimonials-content-wrapper">
                    {/* Left Side: 3D Stacked Cards */}
                    <div className="testimonials-visual">
                        <div className="card-stack" key={active.id}> {/* Key triggers shuffle animation */}
                            <div className="stack-card card-back-2 animate-card delay-2"></div>
                            <div className="stack-card card-back-1 animate-card delay-1"></div>
                            <div className="stack-card card-front animate-card">
                                <div className="testimonial-logo" key={active.id}> {/* Key to trigger animation */}
                                    <div className="logo-icon" style={{ color: active.logoColor }}>
                                        <FaQuoteLeft />
                                    </div>
                                    <span className="logo-text">{active.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="testimonials-text-content" key={active.id}> {/* Key triggers re-render animation */}
                        <h3 className="testimonial-company-name animate-text">{active.company}</h3>
                        <p className="testimonial-quote animate-text delay-1">
                            "{active.text}"
                        </p>
                        <p className="testimonial-credit animate-text delay-2">
                            Appreciate all the good work initiated by CircuitCrate team!
                        </p>

                        <div className="testimonial-controls">
                            <button className="control-btn prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                                <FaChevronLeft />
                            </button>
                            <button className="control-btn next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

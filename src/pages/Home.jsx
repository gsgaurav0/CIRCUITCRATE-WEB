import React from 'react';
import Hero from '../components/Hero';
import WhyCircuitCrate from '../components/WhyCircuitCrate';
import Contact from '../components/Contact';
import WhatIsCircuitCrate from '../components/WhatIsCircuitCrate';
import WhyParticipate from '../components/WhyParticipate';
import Testimonials from '../components/Testimonials';
import { DemoOne } from '../components/demo-flip-links';
import FAQs from '../components/ui/text-reveal-faqs';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <WhatIsCircuitCrate />
            <WhyParticipate />
            <Testimonials />
            <WhyCircuitCrate />
            <Contact />
            <FAQs />
            <DemoOne />
        </div>
    );
};

export default Home;

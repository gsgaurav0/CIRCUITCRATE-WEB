import React from 'react';
import LearningMethod from '../components/LearningMethod';
import ProjectsShowcase from '../components/ProjectsShowcase';

const LearningPage = () => {
    return (
        <div className="page-container" style={{ paddingTop: '80px' }}>
            <LearningMethod />
            <ProjectsShowcase />
        </div>
    );
};

export default LearningPage;

import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Clock, Wrench, X, PlayCircle, CheckCircle2 } from 'lucide-react';
import './ProjectsShowcase.css';

const ProjectsShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeProject, setActiveProject] = useState(null);

    const categories = ['All', ...new Set(projectsData.map(p => p.category))];

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);

    return (
        <section className="showcase-section">
            <div className="container mx-auto">
                <div className="showcase-header">
                    <h2 className="showcase-title">Build These Projects</h2>

                    <div className="filter-container">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="showcase-card">
                            <div className="card-image-wrapper">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <span className="difficulty-badge">{project.difficulty}</span>
                            </div>

                            <div className="card-content">
                                <span className="card-category">{project.category}</span>
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-desc">{project.desc}</p>

                                <div className="card-footer">
                                    <div className="time-Estimate">
                                        <Clock size={16} />
                                        {project.time}
                                    </div>
                                    <button
                                        className="build-btn"
                                        onClick={() => setActiveProject(project)}
                                    >
                                        Build This <PlayCircle size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {activeProject && (
                <div className="modal-overlay" onClick={() => setActiveProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <img src={activeProject.image} alt={activeProject.title} />
                            <button className="close-btn" onClick={() => setActiveProject(null)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="modal-body">
                            <h3 className="modal-title">{activeProject.title}</h3>

                            <div className="steps-container">
                                <div className="tools-column">
                                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Wrench size={20} className="text-blue-400" /> Required Tools
                                    </h4>
                                    <div className="tools-list">
                                        <ul>
                                            {activeProject.tools.map((tool, idx) => (
                                                <li key={idx}>
                                                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                                                    {tool}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="instructions-column">
                                    <h4 className="text-xl font-bold text-white mb-4">How to Build</h4>
                                    <div className="instruction-steps">
                                        <ol>
                                            {activeProject.steps.map((step, idx) => (
                                                <li key={idx}>{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsShowcase;

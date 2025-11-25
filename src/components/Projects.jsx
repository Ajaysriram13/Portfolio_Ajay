import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Pharmacy Inventory System',
            company: 'ZautoAI',
            role: 'Full Stack Engineer',
            tech: ['React.js', 'NestJS', 'PostgreSQL', 'JWT'],
            desc: 'Enterprise system for pharmacy operations with real-time stock updates and role-based access.',
            metrics: 'Real-time updates, Optimized UI',
            link: '',
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isPrivate: true
        },
        {
            id: 2,
            title: 'AI Railway Assistant',
            company: 'ZautoAI - Ninja Media',
            role: 'Frontend + Realtime',
            tech: ['React.js', 'WebSockets', 'Node.js'],
            desc: 'AI-based chat + voice assistant for railway inquiries with live PNR status and train schedules.',
            metrics: 'Instant AI responses, Streaming data',
            link: '',
            image: 'https://images.unsplash.com/photo-1474487548417-781cb714c2f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isPrivate: true
        },
        {
            id: 3,
            title: 'RACPAD Production Platform',
            company: 'Avasoft',
            role: 'Software Engineer',
            tech: ['React.js', 'Express.js', 'PostgreSQL'],
            desc: 'Core enterprise UI + backend framework handling millions of page loads.',
            metrics: '2.9M+ Page Loads, 99.9% Uptime',
            link: '',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isPrivate: true
        },
        {
            id: 4,
            title: 'Open Source / Personal',
            company: 'GitHub',
            role: 'Creator',
            tech: ['React.js', 'Node.js', 'AI Tools'],
            desc: 'Various open source tools, Node backends, and React UI utilities.',
            metrics: 'Active Contributions',
            link: 'https://github.com/Ajaysriram13',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            isPrivate: false
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2 className="section-title neon-text">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card glass"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            {!project.isPrivate && (
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                                        Open Project <FaExternalLinkAlt />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-company">{project.company}</span>
                            </div>
                            <p className="project-role">{project.role}</p>
                            <p className="project-desc">{project.desc}</p>
                            <p className="project-metrics neon-text">{project.metrics}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="projects-cta">
                <a href="https://github.com/Ajaysriram13" target="_blank" rel="noopener noreferrer">
                    <button className="btn-secondary">View All Projects <FaGithub /></button>
                </a>
            </div>
        </section>
    );
};

export default Projects;

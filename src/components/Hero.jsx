import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    const stats = [
        { id: 1, text: '2+ Years', label: 'Full Stack Experience' },
        { id: 2, text: '2.9M+', label: 'Page Loads Handled' },
        { id: 3, text: '500K+', label: 'Payments Processed' },
        { id: 4, text: '40% Faster', label: 'UI Optimization' },
    ];

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="greeting neon-text"
                >
                    Hi — I'm Ajaysriram
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="role"
                >
                    Full Stack Developer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="tech-stack"
                >
                    React.js | Node.js | Express.js | PostgreSQL
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="cta-buttons"
                >
                    <Link to="projects" smooth={true} duration={500} offset={-80}>
                        <button className="btn-primary">View Projects</button>
                    </Link>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="btn-secondary">Download Resume</button>
                    </a>
                </motion.div>
            </div>

            <div className="stats-container">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                        className="stat-card glass"
                        whileHover={{ y: -10, boxShadow: "0 0 20px rgba(0, 229, 255, 0.5)" }}
                    >
                        <h3 className="stat-number neon-text">{stat.text}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;

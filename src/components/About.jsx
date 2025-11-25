import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    const tags = ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Full Stack'];

    return (
        <section id="about" className="about">
            <h2 className="section-title neon-text">About Me</h2>
            <div className="about-container">
                <motion.div
                    className="about-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="profile-img-container glass">
                        <img src={profileImg} alt="Ajaysriram R" className="profile-img" />
                    </div>
                </motion.div>

                <motion.div
                    className="about-right"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="about-text">
                        I am a <strong>Full Stack Developer</strong> specializing in building scalable, performant web applications using <strong>React.js</strong> and <strong>Node.js</strong>.
                        With experience in handling production-scale systems, I focus on creating seamless user experiences and robust backend architectures.
                    </p>
                    <p className="about-text">
                        My expertise includes building RESTful APIs with <strong>Express.js</strong> and <strong>NestJS</strong>, integrating databases like <strong>PostgreSQL</strong> and <strong>MongoDB</strong>, and optimizing frontend performance for high-traffic platforms.
                    </p>

                    <div className="tags-container">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag glass neon-text">{tag}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

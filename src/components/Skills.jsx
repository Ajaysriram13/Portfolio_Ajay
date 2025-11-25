import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaLightbulb } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: 'Frontend',
            icon: <FaReact />,
            skills: ['React.js', 'Context API', 'HTML/CSS', 'TailwindCSS', 'Framer Motion']
        },
        {
            category: 'Backend',
            icon: <FaNodeJs />,
            skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs']
        },
        {
            category: 'Database',
            icon: <FaDatabase />,
            skills: ['PostgreSQL', 'MongoDB', 'Mongoose']
        },
        {
            category: 'Tools',
            icon: <FaTools />,
            skills: ['Git', 'Docker', 'Jest', 'VS Code', 'Postman']
        },
        {
            category: 'Concepts',
            icon: <FaLightbulb />,
            skills: ['JWT Auth', 'CI/CD', 'Performance Optimization', 'Agile']
        }
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="section-title neon-text">Skills & Expertise</h2>
            <div className="skills-container">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        className="skill-category glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, boxShadow: "0 0 15px rgba(0, 229, 255, 0.3)" }}
                    >
                        <div className="category-header">
                            <span className="category-icon neon-text">{category.icon}</span>
                            <h3 className="category-title">{category.category}</h3>
                        </div>
                        <div className="skill-list">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-item">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

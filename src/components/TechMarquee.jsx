import React from 'react';
import './TechMarquee.css';

const TechMarquee = () => {
    const techStack = [
        'React.js', 'Context API', 'JavaScript ES6+', 'TypeScript',
        'Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Docker'
    ];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {techStack.map((tech, index) => (
                    <span key={index} className="tech-item glass neon-text">
                        {tech}
                    </span>
                ))}
                {/* Duplicate for seamless loop */}
                {techStack.map((tech, index) => (
                    <span key={`dup-${index}`} className="tech-item glass neon-text">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;

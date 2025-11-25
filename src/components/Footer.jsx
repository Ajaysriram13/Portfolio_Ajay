import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright">© 2025 Ajaysriram R. All rights reserved.</p>
            <div className="footer-links">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                <a href="https://github.com/Ajaysriram13" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/ajaysriram-r/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </footer>
    );
};

export default Footer;

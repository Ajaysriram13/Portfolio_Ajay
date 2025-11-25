import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import './Navbar.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleNav = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'home', text: 'Home' },
        { id: 2, link: 'about', text: 'About' },
        { id: 3, link: 'skills', text: 'Skills' },
        { id: 4, link: 'projects', text: 'Projects' },
        { id: 5, link: 'contact', text: 'Contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <img src={profileImg} alt="Profile" className="logo-circle" />
                    <h1 className="logo-text">Ajaysriram R</h1>
                </div>

                <ul className="nav-links">
                    {links.map(({ id, link, text }) => (
                        <li key={id}>
                            <Link
                                to={link}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                activeClass="active"
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mobile-icon" onClick={handleNav}>
                    {nav ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                <ul className={`mobile-menu ${nav ? 'active glass' : ''}`}>
                    {links.map(({ id, link, text }) => (
                        <li key={id}>
                            <Link
                                onClick={() => setNav(false)}
                                to={link}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

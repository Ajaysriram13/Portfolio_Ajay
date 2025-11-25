import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:ajaysriram16@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    };

    const socialLinks = [
        { icon: <FaGithub />, link: 'https://github.com/Ajaysriram13' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/ajaysriram-r/' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/itsz_ajay_?igsh=MWM1Ym13azc4eW9wZw==' },
        { icon: <FaWhatsapp />, link: 'https://wa.me/9585767867' }
    ];

    return (
        <section id="contact" className="contact">
            <h2 className="section-title neon-text">Let's Connect</h2>
            <p className="contact-subtitle">Find me on these platforms or send a message</p>

            <div className="social-links">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon glass"
                        whileHover={{ scale: 1.2, color: '#00E5FF', boxShadow: "0 0 15px rgba(0, 229, 255, 0.5)" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>

            <motion.form
                className="contact-form glass"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-input"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-input"
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="glass-input"
                        rows="5"
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
            </motion.form>
        </section>
    );
};

export default Contact;

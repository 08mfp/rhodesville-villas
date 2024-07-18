import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.webp';
import callIcon from '../../assets/icons/call.png';
import mailIcon from '../../assets/icons/mail.webp';
import './Footer.css';

const Footer: React.FC = () => (
    <footer className="footer">
        <div className="footer-content">
            <a href="https://wa.me/yourphonenumber" className="footer-link">
                <img src={whatsappIcon} alt="WhatsApp" className="footer-icon" />
                <span className="footer-text">WhatsApp Us</span>
            </a>
            <a href="tel:yourphonenumber" className="footer-link">
                <img src={callIcon} alt="Call" className="footer-icon" />
                <span className="footer-text">Call Us</span>
            </a>
            <a href="mailto:youremail@example.com" className="footer-link">
                <img src={mailIcon} alt="Email" className="footer-icon" />
                <span className="footer-text">Email Us</span>
            </a>
        </div>
        <p>© 2024 Rhodesville Villas. All rights reserved.</p>
    </footer>
);

export default Footer;

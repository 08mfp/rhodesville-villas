import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <nav className="navbar">
                <button className="navbar-toggler" onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/amenities" onClick={closeMenu}>Amenities</Link></li>
                    <li><Link to="/neighborhood" onClick={closeMenu}>Location</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

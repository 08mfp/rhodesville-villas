import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav>
                <div className="navbar-brand">
                    <button className="navbar-toggler" onClick={toggleMenu}>
                        &#9776;
                    </button>
                </div>
                <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/amenities">Amenities</Link></li>
                    <li><Link to="/neighborhood">Location</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

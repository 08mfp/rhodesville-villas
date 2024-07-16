import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => (
    <header className="header">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/villas">Villas</Link></li>
                <li><Link to="/amenities">Amenities</Link></li>
                <li><Link to="/neighborhood">Neighborhood</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;

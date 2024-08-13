import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { styles } from './styles';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <Link to="/" className={styles.logoContainer}>
                    <img src={logo} className={styles.logoImage} alt="Logo" />
                    <span className={styles.logoText}>Rhodesville Zambia</span>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={styles.menuButton}
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className={styles.menuIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={styles.menuContainer(isOpen)} id="navbar-default">
                    <ul className={styles.menuList}>
                        <li className="md:ml-auto">
                            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-villas" onClick={() => setIsOpen(false)}>Villas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-apartments" onClick={() => setIsOpen(false)}>Apartments</NavLink>
                        </li>
                        <li>
                            <NavLink to="/availability" onClick={() => setIsOpen(false)}>Availability</NavLink>
                        </li>
                        <li>
                            <NavLink to="/amenities" onClick={() => setIsOpen(false)}>Amenities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/neighborhood" onClick={() => setIsOpen(false)}>Neighborhood</NavLink>
                        </li>
                        <li className="md:mr-auto">
                            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Custom NavLink Component
const NavLink: React.FC<any> = ({ to, children, ...props }) => {
    return (
        <Link
            to={to}
            {...props}
            className={styles.menuItem}
        >
            {children}
        </Link>
    );
};

export default Header;

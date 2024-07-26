import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-l flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-12" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rhodesville Zambia</span>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:justify-between rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="md:ml-auto">
                            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-villas" onClick={() => setIsOpen(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Availability</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/amenities" onClick={() => setIsOpen(false)}>Amenities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/neighborhood" onClick={() => setIsOpen(false)}>Location</NavLink>
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
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg md:text-xl"
        >
            {children}
        </Link>
    );
};

export default Header;

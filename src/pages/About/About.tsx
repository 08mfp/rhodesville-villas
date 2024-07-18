import React from 'react';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const About: React.FC = () => (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Us</h1>

        {/* Images Row for Desktop */}
        <div className="hidden md:flex justify-center space-x-8 mb-8">
            <img
                src={apartmentImage}
                alt="About Us"
                className="w-1/4 border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg" // Modify image size here
            />
            <img
                src={apartmentImage}
                alt="Strategic Location"
                className="w-1/4 border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg" // Modify image size here
            />
            <img
                src={apartmentImage}
                alt="Community"
                className="w-1/4 border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg" // Modify image size here
            />
        </div>

        {/* Individual Images for Mobile */}
        <div className="flex flex-col items-center mb-8 md:hidden">
            <img
                src={apartmentImage}
                alt="About Us"
                className="w-4/5 border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4" // Modify image size here
            />
            <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
                At Rhodesville, we are committed to providing luxury living spaces that blend modern design with
                the serene beauty of our surroundings. Our mission is to create a community where residents can
                enjoy unparalleled comfort, convenience, and style.
            </p>
        </div>

        <div className="flex flex-col items-center mb-8 md:hidden">
            <img
                src={apartmentImage}
                alt="Strategic Location"
                className="w-4/5 border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4" // Modify image size here
            />
            <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
                Our properties are strategically located to offer easy access to essential amenities such as shopping
                centers, schools, and hospitals, ensuring that everything you need is just a stone's throw away. We
                believe in the importance of quality and excellence, which is reflected in every aspect of our developments.
            </p>
        </div>

        <div className="flex flex-col items-center mb-8 md:hidden">
            <img
                src={apartmentImage}
                alt="Community"
                className="w-4/5 border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4" // Modify image size here
            />
            <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
                Join us at Rhodesville and experience the perfect blend of luxury and convenience. We are more than just
                a place to live; we are a community dedicated to enhancing your lifestyle and well-being.
            </p>
        </div>

        {/* Paragraphs for Desktop */}
        <div className="hidden md:flex flex-col items-center space-y-8">
            <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 text-center">
                At Rhodesville, we are committed to providing luxury living spaces that blend modern design with
                the serene beauty of our surroundings. Our mission is to create a community where residents can
                enjoy unparalleled comfort, convenience, and style.
            </p>
            <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 text-center">
                Our properties are strategically located to offer easy access to essential amenities such as shopping
                centers, schools, and hospitals, ensuring that everything you need is just a stone's throw away. We
                believe in the importance of quality and excellence, which is reflected in every aspect of our developments.
            </p>
            <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 text-center">
                Join us at Rhodesville and experience the perfect blend of luxury and convenience. We are more than just
                a place to live; we are a community dedicated to enhancing your lifestyle and well-being.
            </p>
        </div>
    </div>
);

export default About;

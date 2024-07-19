import React from 'react';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const About: React.FC = () => (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Us</h1>

        {/* Cards Layout */}
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="About Us"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">About Us</h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        At Rhodesville, we are committed to providing luxury living spaces that blend modern design with the serene beauty of our surroundings. Our mission is to create a community where residents can enjoy unparalleled comfort, convenience, and style.
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="Strategic Location"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Strategic Location</h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Our properties are strategically located to offer easy access to essential amenities such as shopping centers, schools, and hospitals, ensuring that everything you need is just a stone's throw away. We believe in the importance of quality and excellence, which is reflected in every aspect of our developments.
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="Community"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Community</h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Join us at Rhodesville and experience the perfect blend of luxury and convenience. We are more than just a place to live; we are a community dedicated to enhancing your lifestyle and well-being.
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="Community"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Community</h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Join us at Rhodesville and experience the perfect blend of luxury and convenience. We are more than just a place to live; we are a community dedicated to enhancing your lifestyle and well-being.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;

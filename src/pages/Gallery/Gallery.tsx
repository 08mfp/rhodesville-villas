import React, { useState } from 'react';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const imageGallery = [
    { src: apartmentImage, category: 'Property' },
    { src: apartmentImage, category: 'Apartment' },
    { src: apartmentImage, category: 'Kitchen' },
    { src: apartmentImage, category: 'Living Rooms' },
    { src: apartmentImage, category: 'Bedrooms' },
    { src: apartmentImage, category: 'Pool' },
    { src: apartmentImage, category: 'Garden' },
    { src: apartmentImage, category: 'Other' },
    // Add more images as needed
];

const categories = [
    'All categories', 
    'Property', 
    'Apartment', 
    'Kitchen', 
    'Living Rooms', 
    'Bedrooms', 
    'Pool', 
    'Garden', 
    'Other'
];

const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All categories');

    const filteredImages = selectedCategory === 'All categories' 
        ? imageGallery 
        : imageGallery.filter(image => image.category === selectedCategory);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">Gallery</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                {categories.map((category, index) => (
                    <button 
                        key={index} 
                        type="button" 
                        onClick={() => setSelectedCategory(category)}
                        className={`text-${category === selectedCategory ? 'white' : 'gray-900'} hover:text-white border ${category === selectedCategory ? 'border-blue-600 bg-blue-700' : 'border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800'} focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-4 py-2 text-center me-3 mb-3 dark:text-${category === selectedCategory ? 'white' : 'gray-300'} dark:focus:ring-gray-800 text-sm md:text-base`}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map((image, index) => (
                    <div key={index}>
                        <img className="h-auto max-w-full rounded-lg" src={image.src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

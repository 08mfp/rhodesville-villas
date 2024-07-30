import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-8 text-center">Gallery</h1>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {categories.map((category, index) => (
            <button 
              key={index} 
              type="button" 
              onClick={() => setSelectedCategory(category)}
              className={`text-${category === selectedCategory ? 'white' : 'gray-900'} hover:text-red-500 border ${category === selectedCategory ? 'border-blue-600 bg-blue-700' : 'border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800'} focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-4 py-2 text-center me-3 mb-3 dark:text-${category === selectedCategory ? 'white' : 'gray-300'} dark:focus:ring-gray-800 text-sm md:text-base`}>
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

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="home">
      {/* Modal */}
      {showModal && (
        <div id="default-modal" className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
          <div className="relative p-4 w-full max-w-2xl max-h-full mt-24 md:mt-32">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Note</h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModal}>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  This website is still under development, some features may not work as expected. We apologize for any inconvenience caused.
                </p>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={closeModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I understand</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Jumbotron Section */}
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-gray-900/75 sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-12 lg:flex lg:h-screen lg:items-center lg:text-left"
        >
          <div className="max-w-xl text-center lg:text-left lg:max-w-full lg:pr-16">
            <h1 className="text-4xl font-extrabold text-white sm:text-6xl lg:text-7xl">
              Step into a world of luxury and comfort at
              <strong className="block font-extrabold text-rose-500"> Rhodesville Villas </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl lg:text-2xl">
              Rhodesville Villas is a luxury residential development located in the heart of Lusaka, designed to provide a comfortable and luxurious living experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center lg:text-left">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Opening August 2024
              </a>

              <a
                href="about-villas"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Component */}
      <Gallery />
    </div>
  );
};

export default Home;

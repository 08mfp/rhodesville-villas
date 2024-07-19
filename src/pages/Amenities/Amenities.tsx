import React, { useState } from 'react';
import './Amenities.css';

const Amenities: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([1]); // By default, the first section is open

  const toggleSection = (section: number) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter(s => s !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const isSectionOpen = (section: number) => openSections.includes(section);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Amenities</h1>
      <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 text-center">All of our villas include:</p>
      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
            onClick={() => toggleSection(1)}
            aria-expanded={isSectionOpen(1)}
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              Swimming Pool
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transform ${isSectionOpen(1) ? '' : 'rotate-180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-1" className={`${isSectionOpen(1) ? '' : 'hidden'}`} aria-labelledby="accordion-open-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Enjoy a refreshing swim in our state-of-the-art swimming pool, designed for both leisure and fitness.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
            onClick={() => toggleSection(2)}
            aria-expanded={isSectionOpen(2)}
            aria-controls="accordion-open-body-2"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              Fitness Center
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transform ${isSectionOpen(2) ? '' : 'rotate-180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-2" className={`${isSectionOpen(2) ? '' : 'hidden'}`} aria-labelledby="accordion-open-heading-2">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our fitness center is equipped with the latest equipment to help you stay fit and healthy.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
            onClick={() => toggleSection(3)}
            aria-expanded={isSectionOpen(3)}
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              Community Hall
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transform ${isSectionOpen(3) ? '' : 'rotate-180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-3" className={`${isSectionOpen(3) ? '' : 'hidden'}`} aria-labelledby="accordion-open-heading-3">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The community hall is perfect for events, gatherings, and celebrations.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
            onClick={() => toggleSection(4)}
            aria-expanded={isSectionOpen(4)}
            aria-controls="accordion-open-body-4"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              Playground
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transform ${isSectionOpen(4) ? '' : 'rotate-180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-4" className={`${isSectionOpen(4) ? '' : 'hidden'}`} aria-labelledby="accordion-open-heading-4">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our playground offers a safe and fun environment for children to play and make friends.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
            onClick={() => toggleSection(5)}
            aria-expanded={isSectionOpen(5)}
            aria-controls="accordion-open-body-5"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              24/7 Security
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transform ${isSectionOpen(5) ? '' : 'rotate-180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-5" className={`${isSectionOpen(5) ? '' : 'hidden'}`} aria-labelledby="accordion-open-heading-5">
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our 24/7 security ensures that you and your loved ones are safe and secure at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuthHeader } from '../../utils/auth';

type Section = {
  title: string;
  content: string;
};

const Amenities: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const toggleSection = (section: number) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter(s => s !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const isSectionOpen = (section: number) => openSections.includes(section);

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const loadingTimeout = setTimeout(() => setError(true), 15000);

      try {
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/amenities', {
          headers: {
            'Authorization': getAuthHeader()
          }
        });

        clearTimeout(loadingTimeout);

        const duration = Date.now() - start;
        const remainingTime = Math.max(2000 - duration, 0);

        setTimeout(() => {
          setSections(response.data);
          setLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error('Error fetching amenities data:', error);
        setLoading(false);
        setError(true);
        clearTimeout(loadingTimeout);
      }
    };

    fetchData();
  }, []);

  const renderSkeleton = () => {
    const skeletons = Array(4).fill(0).map((_, index) => (
      <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 mb-4 border border-gray-200 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    ));

    return (
      <div className="flex flex-col space-y-4">
        {skeletons}
      </div>
    );
  };

  const renderErrorModal = () => (
    <div id="alert-additional-content-2" className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
      <div className="flex items-center">
        <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">Failed to get data</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">
        There seems to be an error with our server, please try again after a few minutes. If the problem persists, please contact us directly.
      </div>
      <div className="flex">
        <button type="button" className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
          </svg>
          +260 970000000
        </button>
        <button type="button" className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
          Dismiss
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen flex flex-col">
      <br />
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Amenities</h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 text-center">Tap on any section to read more:</p>
      {loading && !error && renderSkeleton()}
      {error && renderErrorModal()}
      {!loading && !error && (
        <div id="accordion-open" data-accordion="open">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 id={`accordion-open-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                  onClick={() => toggleSection(index)}
                  aria-expanded={isSectionOpen(index)}
                  aria-controls={`accordion-open-body-${index}`}
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                    </svg>
                    {section.title}
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transform ${isSectionOpen(index) ? '' : 'rotate-180'} shrink-0`}
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
              <div
                id={`accordion-open-body-${index}`}
                className={`${isSectionOpen(index) ? '' : 'hidden'}`}
                aria-labelledby={`accordion-open-heading-${index}`}
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="w-full md:w-3/4 p-4 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Still have questions?</h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">If you require further assistance, feel free to contact us.</p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          {/* <Link to="/contact" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="me-3 w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> 
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg>
            Contact Us
          </Link> */}
        </div>
      </div>

      <div className="flex items-center mt-4 mx-auto">
        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.91</p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">19 reviews</a>
      </div>
    </div>
  );
};

export default Amenities;

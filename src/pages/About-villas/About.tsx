import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuthHeader } from '../../utils/auth';

type AboutSection = {
  title: string;
  image: string;
  content: string;
};

const AboutVillas: React.FC = () => {
  const [sections, setSections] = useState<AboutSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const loadingTimeout = setTimeout(() => setError(true), 15000);

      try {
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/about', {
          headers: {
            'Authorization': getAuthHeader()
          }
        });

        clearTimeout(loadingTimeout);

        const duration = Date.now() - start;
        const remainingTime = Math.max(1000 - duration, 0);

        setTimeout(() => {
          setSections(response.data);
          setLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setLoading(false);
        setError(true);
        clearTimeout(loadingTimeout);
      }
    };

    fetchData();
  }, []);

  const renderSkeleton = () => {
    const skeletons = Array(4).fill(0).map((_, index) => (
      <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 animate-pulse">
        <div className="w-full h-48 md:h-64 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-200 dark:text-gray-600 text-xl font-semibold">Loading...</span>
        </div>
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-2"></div>
      </div>
    ));

    return (
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:max-w-3/4 mx-auto">
          {skeletons}
        </div>
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
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen">
      <br/>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Us</h1>
      {loading && !error && renderSkeleton()}
      {error && renderErrorModal()}
      {!loading && !error && (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:max-w-3/4 mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                />
                <h2 className="text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2">{section.title}</h2>
                <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutVillas;

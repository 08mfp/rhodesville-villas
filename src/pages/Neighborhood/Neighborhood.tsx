import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from '../../components/MapComponent/MapComponent';
import { getAuthHeader } from '../../utils/auth';

type Location = {
  lat: number;
  lng: number;
  name: string;
  description: string;
  category: string;
  icon: string;
  'time-from-villa': number;
};

const Neighborhood: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [visibleCounts, setVisibleCounts] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const loadingTimeout = setTimeout(() => setError(true), 15000);

      try {
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/locations', {
          headers: {
            'Authorization': getAuthHeader()
          }
        });

        clearTimeout(loadingTimeout);

        const duration = Date.now() - start;
        const remainingTime = Math.max(3000 - duration, 0);

        setTimeout(() => {
          const data: Location[] = response.data;
          setLocations(data);

          const uniqueCategories = Array.from(new Set(data.map(location => location.category)));
          setCategories(uniqueCategories);

          const initialVisibleCounts = uniqueCategories.reduce((acc, category) => ({ ...acc, [category]: 3 }), {});
          setVisibleCounts(initialVisibleCounts);

          setLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error('Error fetching locations data:', error);
        setLoading(false);
        setError(true);
        clearTimeout(loadingTimeout);
      }
    };

    fetchData();
  }, []);

  const handleSeeMore = (category: string) => {
    setVisibleCounts({
      ...visibleCounts,
      [category]: visibleCounts[category] + 3
    });
  };

  const handleSeeLess = (category: string) => {
    setVisibleCounts({
      ...visibleCounts,
      [category]: 3
    });
  };

  const renderSkeleton = () => {
    const skeletons = categories.map((category, categoryIndex) => (
      <div key={categoryIndex} className="bg-gray-100 dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{category}</h3>
        <ul className="space-y-4 md:space-y-6">
          {Array(3).fill(0).map((_, index) => (
            <li key={index} className="bg-white dark:bg-gray-600 border rounded-lg p-2 md:p-4 shadow-md animate-pulse">
              <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2"></div>
            </li>
          ))}
        </ul>
      </div>
    ));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen">
      <br/>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Location</h1>
      <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 text-center">Explore our neighbourhood using the map below:</p>
      <div className="mb-8 md:mb-12 p-2 md:p-4 rounded-lg">
        <MapComponent />
      </div>
      <div className="pb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">Nearby Landmarks</h1>
        {loading && !error && renderSkeleton()}
        {error && renderErrorModal()}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {categories.map(category => (
              <div key={category} className="bg-gray-100 dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{category}</h3>
                <ul className="space-y-4 md:space-y-6">
                  {locations
                    .filter(location => location.category === category)
                    .sort((a, b) => a['time-from-villa'] - b['time-from-villa'])
                    .slice(0, visibleCounts[category])
                    .map((location, index) => (
                      <li key={index} className="bg-white dark:bg-gray-600 border rounded-lg p-2 md:p-4 shadow-md">
                        <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-4">
                          <img
                            src={location.icon}
                            alt={location.category}
                            className="w-8 h-8 md:w-12 md:h-12"
                          />
                          <h3 className="text-lg md:text-2xl text-gray-900 dark:text-white">{location.name}</h3>
                        </div>
                        <p className='text-sm md:text-lg text-gray-700 dark:text-gray-300'>{location.description}</p>
                        <p className='text-sm md:text-lg text-gray-700 dark:text-gray-300'>{location['time-from-villa']} minutes away</p>
                      </li>
                    ))}
                </ul>
                <div className="flex justify-between mt-4">
                  {visibleCounts[category] > 3 && locations.filter(location => location.category === category).length > 2 && (
                    <button onClick={() => handleSeeLess(category)} className="bg-red-500 text-white text-sm md:text-base px-2 md:px-4 py-1 md:py-2 rounded-lg">See Less</button>
                  )}
                  {locations.filter(location => location.category === category).length > visibleCounts[category] && (
                    <button onClick={() => handleSeeMore(category)} className="bg-blue-500 text-white text-sm md:text-base px-2 md:px-4 py-1 md:py-2 rounded-lg">See More</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Neighborhood;

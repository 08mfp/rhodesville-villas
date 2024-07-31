import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from '../../components/MapComponent/MapComponent';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/locations');
        const data: Location[] = response.data;

        setLocations(data);

        const uniqueCategories = Array.from(new Set(data.map(location => location.category)));
        setCategories(uniqueCategories);

        const initialVisibleCounts = uniqueCategories.reduce((acc, category) => ({ ...acc, [category]: 3 }), {});
        setVisibleCounts(initialVisibleCounts);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching locations data:', error);
        setLoading(false);
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

  if (loading) {
    return <div>Loading...</div>;
  }

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
      </div>
    </div>
  );
};

export default Neighborhood;

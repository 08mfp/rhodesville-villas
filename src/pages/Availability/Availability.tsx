import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const Availability: React.FC = () => {
  const [villas, setVillas] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/availability');
        setVillas(response.data.villas);
        setApartments(response.data.apartments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching availability data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const statusStyles: { [key: string]: string } = {
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  const dotStyles: { [key: string]: string } = {
    green: 'bg-green-500',
    red: 'bg-red-500'
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen flex flex-col items-center">
      <div className="w-full md:w-3/4">
        <br/>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Availability</h1>
        <br/><br/>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Villas:</h2>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {villas.map((villa: any) => (
            <div key={villa.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-16 h-16 rounded-full" src={apartmentImage} alt={`${villa.name} image`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold text-gray-900 truncate dark:text-white">
                    {villa.name}
                  </p>
                  <p className="text-base text-gray-500 truncate dark:text-gray-400">
                    {villa.email}
                  </p>
                </div>
              </div>
              <span className={`inline-flex items-center ${statusStyles[villa.statusColor]} text-sm font-medium px-3 py-1 rounded-full mt-4`}>
                <span className={`w-3 h-3 me-1 ${dotStyles[villa.statusColor]} rounded-full`}></span>
                {villa.status}
              </span>
            </div>
          ))}
        </div>
        <br/><br/>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Apartments:</h2>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apartment: any) => (
            <div key={apartment.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-16 h-16 rounded-full" src={apartmentImage} alt={`${apartment.name} image`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold text-gray-900 truncate dark:text-white">
                    {apartment.name}
                  </p>
                  <p className="text-base text-gray-500 truncate dark:text-gray-400">
                    {apartment.email}
                  </p>
                </div>
              </div>
              <span className={`inline-flex items-center ${statusStyles[apartment.statusColor]} text-sm font-medium px-3 py-1 rounded-full mt-4`}>
                <span className={`w-3 h-3 me-1 ${dotStyles[apartment.statusColor]} rounded-full`}></span>
                {apartment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Availability;

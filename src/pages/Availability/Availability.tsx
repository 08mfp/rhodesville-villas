import React from 'react';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const Availability: React.FC = () => {
  // State to manage availability
  const villas = [
    { id: 1, name: 'Villa 1', status: 'Ready for viewing', statusColor: 'green', email: 'Contact us now to arrange a Viewing' },
    { id: 2, name: 'Villa 2', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' },
    { id: 3, name: 'Villa 3', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' },
    { id: 4, name: 'Villa 4', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' },
    { id: 5, name: 'Villa 5', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' }
  ];

  const apartments = [
    { id: 1, name: 'Apartment 1', status: 'Booked', statusColor: 'red', email: 'Unavailable' },
    { id: 2, name: 'Apartment 2', status: 'Booked', statusColor: 'red', email: 'Unavailable' },
    { id: 3, name: 'Apartment 3', status: 'Booked', statusColor: 'red', email: 'Unavailable' },
    { id: 4, name: 'Apartment 4', status: 'Booked', statusColor: 'red', email: 'Unavailable' },
    { id: 5, name: 'Apartment 5', status: 'Booked', statusColor: 'red', email: 'Unavailable' },
    { id: 6, name: 'Apartment 6', status: 'Booked', statusColor: 'red', email: 'Unavailable' },
    { id: 7, name: 'Apartment 7', status: 'Booked', statusColor: 'red', email: 'Unavailable' },
    { id: 8, name: 'Apartment 8', status: 'Booked', statusColor: 'red', email: 'Unavailable' }
  ];

  const statusStyles: { [key: string]: string } = {
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };
  
  const dotStyles: { [key: string]: string } = {
    green: 'bg-green-500',
    red: 'bg-red-500'
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen flex flex-col items-center">
      <div className="w-full md:w-3/4">
        <br/>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Availability</h1>
        <br/><br/>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Villas:</h2>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {villas.map(villa => (
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
          {apartments.map(apartment => (
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

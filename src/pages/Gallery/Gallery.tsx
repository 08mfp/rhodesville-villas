import React from 'react';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const Gallery: React.FC = () => {
  // State to manage availability
  const apartments = [
    { id: 1, name: 'Villa 1', status: 'Ready for viewing', statusColor: 'green', email: 'Contact us now to arrange a Viewing' },
    { id: 2, name: 'Villa 2', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' },
    { id: 3, name: 'Villa 3', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' },
    { id: 4, name: 'Villa 4', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' },
    { id: 5, name: 'Villa 5', status: 'Under Construction', statusColor: 'red', email: 'Available August 2024' }
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
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Availabilty</h1>
        <br/><br/>
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {apartments.map(apartment => (
            <li key={apartment.id} className="py-4 sm:py-5">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-10 h-10 rounded-full" src={apartmentImage} alt={`${apartment.name} image`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    {apartment.name}
                  </p>
                  <p className="text-base text-gray-500 truncate dark:text-gray-400">
                    {apartment.email}
                  </p>
                </div>
                <span className={`inline-flex items-center ${statusStyles[apartment.statusColor]} text-sm font-medium px-3 py-1 rounded-full`}>
                  <span className={`w-3 h-3 me-1 ${dotStyles[apartment.statusColor]} rounded-full`}></span>
                  {apartment.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;

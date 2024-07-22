//! NEED TO CHANGE FOLDER AND FILE NAME< AND RELINK PROPERLY.
//! THIS IS A TEMPORARY FOX
import React, { useState } from 'react';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const Gallery: React.FC = () => {
  // State to manage availability
  const [availability, setAvailability] = useState(
    [true, true, true, true, true] // Initially, all apartments are available
  );

  const handleBooking = (apartmentNumber: number) => {
    // Logic to handle booking (e.g., update availability, contact owner, etc.)
    const newAvailability = [...availability];
    newAvailability[apartmentNumber] = false;
    setAvailability(newAvailability);
    alert(`Apartment ${apartmentNumber + 1} booked!`);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Availability
      </h1>

      {/* Apartment Cards */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-3/4 mx-auto">
          {[1, 2, 3, 4, 5].map((apartmentNumber) => (
            <div
              key={apartmentNumber}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12"
            >
              <img
                src={apartmentImage}
                alt={`Apartment ${apartmentNumber}`}
                className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2">
                Apartment {apartmentNumber}
              </h2>
              <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                {/* You can add apartment-specific details here */}
                Description for apartment {apartmentNumber}...
              </p>
              <button
                onClick={() => handleBooking(apartmentNumber - 1)}
                disabled={!availability[apartmentNumber - 1]}
                className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                {availability[apartmentNumber - 1] ? 'Is still under contruction' : 'Is still under contruction'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

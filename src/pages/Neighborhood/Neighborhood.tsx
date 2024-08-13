import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent/MapComponent';
import { getAuthHeader } from '../../utils/auth';
import { styles } from './styles';

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
        const start = Date.now();
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/locations', {
          headers: {
            Authorization: getAuthHeader(),
          },
        });
        const data: Location[] = response.data;

        setLocations(data);

        const uniqueCategories = Array.from(new Set(data.map((location) => location.category)));
        setCategories(uniqueCategories);

        const initialVisibleCounts = uniqueCategories.reduce((acc, category) => ({ ...acc, [category]: 3 }), {});
        setVisibleCounts(initialVisibleCounts);

        const duration = Date.now() - start;
        const remainingTime = Math.max(2000 - duration, 0); // 2 seconds

        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
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
      [category]: visibleCounts[category] + 3,
    });
  };

  const handleSeeLess = (category: string) => {
    setVisibleCounts({
      ...visibleCounts,
      [category]: 3,
    });
  };

  const renderSkeleton = () => {
    const skeletons = Array(6).fill(0).map((_, index) => (
      <div key={index} className={styles.skeletonCard}>
        <div className={styles.skeletonCardContentContainer}>
          <div className={styles.skeletonCardImageContainer}>
            <div className={styles.skeletonCardImage}>
              <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className={styles.skeletonCardTextContainer}>
            <div className={styles.skeletonLineLarge}></div>
            <div className={styles.skeletonLineMedium}></div>
          </div>
        </div>
        <div className={styles.skeletonLineSmall}></div>
      </div>
    ));

    return (
      <div className={styles.skeletonGridContainer}>
        {skeletons}
      </div>
    );
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <br />
        <h1 className={styles.title}>Loading Locations...</h1>
        <div className={styles.mapContainer}>
          <div className="animate-pulse h-72 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
        {renderSkeleton()}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <br />
      <h1 className={styles.title}>Our Neighbourhood</h1>
      <p className={styles.subtitle}>Explore our community using the map below:</p>
      <div className={styles.mapContainer}>
        <MapComponent />
      </div>
      <div className={styles.landmarksContainer}>
        <h1 className={styles.landmarksTitle}>Nearby Landmarks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category} className={styles.categoryContainer}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.locationList}>
                {locations
                  .filter((location) => location.category === category)
                  .sort((a, b) => a['time-from-villa'] - b['time-from-villa'])
                  .slice(0, visibleCounts[category])
                  .map((location, index) => (
                    <li key={index} className={styles.locationItem}>
                      <div className={styles.locationHeader}>
                        <img
                          src={location.icon}
                          alt={location.category}
                          className={styles.locationIcon}
                        />
                        <h3 className={styles.locationName}>{location.name}</h3>
                      </div>
                      <p className={styles.locationDescription}>{location.description}</p>
                      <p className={styles.locationTime}>{location['time-from-villa']} minutes away</p>
                    </li>
                  ))}
              </ul>
              <div className={styles.buttonContainer}>
                {visibleCounts[category] > 3 && locations.filter((location) => location.category === category).length > 2 && (
                  <button onClick={() => handleSeeLess(category)} className={styles.seeLessButton}>
                    See Less
                  </button>
                )}
                {locations.filter((location) => location.category === category).length > visibleCounts[category] && (
                  <button onClick={() => handleSeeMore(category)} className={styles.seeMoreButton}>
                    See More
                  </button>
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

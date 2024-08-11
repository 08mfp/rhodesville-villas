import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';
import { getAuthHeader } from '../../utils/auth';
import { styles } from './styles';

type StatusColor = 'green' | 'red';

const Availability: React.FC = () => {
  const [villas, setVillas] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const statusStyles: Record<StatusColor, string> = {
    green: styles.statusGreen,
    red: styles.statusRed,
  };

  const dotStyles: Record<StatusColor, string> = {
    green: styles.dotGreen,
    red: styles.dotRed,
  };

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const loadingTimeout = setTimeout(() => setError(true), 15000);

      try {
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/availability', {
          headers: {
            'Authorization': getAuthHeader()
          }
        });

        clearTimeout(loadingTimeout);

        const duration = Date.now() - start;
        const remainingTime = Math.max(2000 - duration, 0);

        setTimeout(() => {
          setVillas(response.data.villas);
          setApartments(response.data.apartments);
          setLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error('Error fetching availability data:', error);
        setLoading(false);
        setError(true);
        clearTimeout(loadingTimeout);
      }
    };

    fetchData();
  }, []);

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
        {skeletons}
      </div>
    );
  };

  const renderErrorModal = () => (
    <div id="alert-additional-content-2" className={styles.errorModal} role="alert">
      <div className={styles.errorModalContent}>
        <svg className={styles.errorModalIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <h3 className={styles.errorModalTitle}>Failed to get data</h3>
      </div>
      <div className={styles.errorModalBody}>
        There seems to be an error with our server, please try again after a few minutes. If the problem persists, please contact us directly.
      </div>
      <div className="flex">
        <button type="button" className={styles.errorButton}>
          <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
          </svg>
          +260 970000000
        </button>
        <button type="button" className={styles.errorDismissButton} data-dismiss-target="#alert-additional-content-2" aria-label="Close">
          Dismiss
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <br />
        <h1 className={styles.title}>Availability</h1>
        {loading && !error && renderSkeleton()}
        {error && renderErrorModal()}
        {!loading && !error && (
          <>
            <h2 className={styles.subtitle}>Villas:</h2>
            <br />
            <div className={styles.gridContainer}>
              {villas.map((villa: any) => (
                <div key={villa.id} className={styles.card}>
                  <div className={styles.cardContentContainer}>
                    <div className={styles.cardImageContainer}>
                      <img className={styles.cardImage} src={apartmentImage} alt={`${villa.name} image`} />
                    </div>
                    <div className={styles.cardTextContainer}>
                      <p className={styles.cardTitle}>
                        {villa.name}
                      </p>
                      <p className={styles.cardSubtitle}>
                        {villa.email}
                      </p>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${statusStyles[villa.statusColor as StatusColor]}`}>
                    <span className={`${styles.dot} ${dotStyles[villa.statusColor as StatusColor]}`}></span>
                    {villa.status}
                  </span>
                </div>
              ))}
            </div>
            <br />
            <br />
            <h2 className={styles.subtitle}>Apartments:</h2>
            <br />
            <div className={styles.gridContainer}>
              {apartments.map((apartment: any) => (
                <div key={apartment.id} className={styles.card}>
                  <div className={styles.cardContentContainer}>
                    <div className={styles.cardImageContainer}>
                      <img className={styles.cardImage} src={apartmentImage} alt={`${apartment.name} image`} />
                    </div>
                    <div className={styles.cardTextContainer}>
                      <p className={styles.cardTitle}>
                        {apartment.name}
                      </p>
                      <p className={styles.cardSubtitle}>
                        {apartment.email}
                      </p>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${statusStyles[apartment.statusColor as StatusColor]}`}>
                    <span className={`${styles.dot} ${dotStyles[apartment.statusColor as StatusColor]}`}></span>
                    {apartment.status}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Availability;

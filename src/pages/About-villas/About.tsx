import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuthHeader } from '../../utils/auth';
import { styles } from './styles';

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
            Authorization: getAuthHeader(),
          },
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
    const skeletons = Array(4)
      .fill(0)
      .map((_, index) => (
        <div key={index} className={styles.skeletonItem}>
          <div className={styles.skeletonImage}>
            <span className={styles.skeletonImageText}>Loading...</span>
          </div>
          <div className={styles.skeletonLineLarge}></div>
          <div className={styles.skeletonLineMedium}></div>
          <div className={styles.skeletonLineSmall}></div>
          <div className={styles.skeletonLineSmall}></div>
          <div className={styles.skeletonLineSmaller}></div>
        </div>
      ));

    return (
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonGrid}>{skeletons}</div>
      </div>
    );
  };

  const renderErrorModal = () => (
    <div
      id="alert-additional-content-2"
      className={styles.errorModalContainer}
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className={styles.errorModalHeader}>Failed to get data</h3>
      </div>
      <div className={styles.errorModalBody}>
        There seems to be an error with our server, please try again after a few
        minutes. If the problem persists, please contact us directly.
      </div>
      <div className="flex">
        <button type="button" className={styles.errorButton}>
          <svg
            className="me-2 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          +260 970000000
        </button>
        <button
          type="button"
          className={styles.errorDismissButton}
          data-dismiss-target="#alert-additional-content-2"
          aria-label="Close"
        >
          Dismiss
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <br />
      <h1 className={styles.title}>About Us</h1>
      {loading && !error && renderSkeleton()}
      {error && renderErrorModal()}
      {!loading && !error && (
        <div className={styles.sectionContainer}>
          <div className={styles.sectionGrid}>
            {sections.map((section, index) => (
              <div key={index} className={styles.sectionItem}>
                <img
                  src={section.image}
                  alt={section.title}
                  className={styles.sectionImage}
                />
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionContent}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutVillas;

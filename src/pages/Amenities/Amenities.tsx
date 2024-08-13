import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuthHeader } from '../../utils/auth';
import { styles } from './styles';

type Section = {
  title: string;
  content: string;
};

const Amenities: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const toggleSection = (section: number) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter(s => s !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  const isSectionOpen = (section: number) => openSections.includes(section);

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const loadingTimeout = setTimeout(() => setError(true), 15000);
      const urlweb = process.env.REACT_APP_API_BASE_URL || 'https://default-url.com';
      const fullurl = `${urlweb}/amenities`;

      try {
        const response = await axios.get(fullurl, {
          headers: {
            'Authorization': getAuthHeader()
          }
        });

        clearTimeout(loadingTimeout);

        const duration = Date.now() - start;
        const remainingTime = Math.max(2000 - duration, 0);

        setTimeout(() => {
          setSections(response.data);
          setLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error('Error fetching amenities data:', error);
        setLoading(false);
        setError(true);
        clearTimeout(loadingTimeout);
      }
    };

    fetchData();
  }, []);

  const renderSkeleton = () => {
    const skeletons = Array(8).fill(0).map((_, index) => (
      <div key={index} className={styles.skeletonAccordionItem}>
        <div className={styles.skeletonAccordionTitle}></div>
        <div className={styles.skeletonAccordionContent}></div>
      </div>
    ));

    return (
      <div className={styles.skeletonAccordionContainer}>
        {skeletons}
      </div>
    );
  };

  const renderErrorModal = () => (
    <div id="alert-additional-content-2" className={styles.errorModalContainer} role="alert">
      <div className="flex items-center">
        <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <h3 className={styles.errorModalHeader}>Failed to get data</h3>
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
      <br />
      <h1 className={styles.title}>Amenities</h1>
      <p className={styles.subtitle}>Tap on any section to read more:</p>
      {loading && !error && renderSkeleton()}
      {error && renderErrorModal()}
      {!loading && !error && (
        <div id="accordion-open" data-accordion="open">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 id={`accordion-open-heading-${index}`}>
                <button
                  type="button"
                  className={styles.accordionButton}
                  onClick={() => toggleSection(index)}
                  aria-expanded={isSectionOpen(index)}
                  aria-controls={`accordion-open-body-${index}`}
                >
                  <span className="flex items-center">
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                    </svg>
                    {section.title}
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transform ${isSectionOpen(index) ? '' : 'rotate-180'} shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5L5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-open-body-${index}`}
                className={`${isSectionOpen(index) ? '' : 'hidden'}`}
                aria-labelledby={`accordion-open-heading-${index}`}
              >
                <div className={styles.accordionContent}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.footerContainer}>
        <h5 className={styles.footerTitle}>Still have questions?</h5>
        <p className={styles.footerText}>If you require further assistance, feel free to contact us.</p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        </div>
      </div>

      <div className={styles.ratingContainer}>
        <svg className={styles.ratingIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className={styles.ratingIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className={styles.ratingIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className={styles.ratingIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className={styles.ratingIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p className={styles.ratingText}>4.91</p>
        <span className={styles.separatorDot}></span>
        <a href="#" className={styles.ratingLink}>19 reviews</a>
      </div>
    </div>
  );
};

export default Amenities;

import React, { useState } from 'react';
import { styles } from './styles';
import Gallery from './Gallery';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className={styles.homeContainer}>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalBody}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Note</h3>
                <button
                  type="button"
                  className={styles.modalCloseButton}
                  onClick={closeModal}
                >
                  <svg
                    className={styles.modalCloseIcon}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className={styles.modalDescription}>
                <p>
                  This website is still under development, some features may not
                  work as expected. Some pages may load slowly, please be
                  patient.
                </p>
              </div>
              <div className={styles.modalFooter}>
                <button
                  onClick={closeModal}
                  className={styles.modalActionButton}
                >
                  I understand
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContentContainer}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              Step into a world of luxury and comfort at
              <strong className={styles.heroHighlight}>
                Rhodesville Villas
              </strong>
            </h1>

            <p className={styles.heroSubtitle}>
              Rhodesville Villas is a luxury residential development located in
              the heart of Lusaka, designed to provide a comfortable and
              luxurious living experience.
            </p>

            <div className={styles.heroButtonContainer}>
              <a
                href="#"
                className={styles.heroPrimaryButton}
              >
                Now Open!
              </a>

              <a
                href="about-villas"
                className={styles.heroSecondaryButton}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default Home;

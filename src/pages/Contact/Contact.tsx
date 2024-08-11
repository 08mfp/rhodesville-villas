import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuthHeader } from '../../utils/auth';
import { styles } from './styles';

type ContactInfo = {
title: string;
name: string;
email: string;
phone: string;
};

const Contact: React.FC = () => {
const [showModal, setShowModal] = useState(false);
const [modalContent, setModalContent] = useState('');
const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

const handleClose = () => setShowModal(false);
const handleShow = (content: string) => {
setModalContent(content);
setShowModal(true);
};

const copyToClipboard = (text: string) => {
navigator.clipboard.writeText(text);
alert('Contact details copied to clipboard!');
};

useEffect(() => {
const fetchData = async () => {
    const start = Date.now();
    const loadingTimeout = setTimeout(() => setError(true), 15000);

    try {
    const response = await axios.get('https://rhodesville-backend.vercel.app/api/contact', {
        headers: {
        'Authorization': getAuthHeader()
        }
    });

    clearTimeout(loadingTimeout);

    const duration = Date.now() - start;
    const remainingTime = Math.max(2000 - duration, 0);

    setTimeout(() => {
        setContactInfo(response.data);
        setLoading(false);
    }, remainingTime);
    } catch (error) {
    console.error('Error fetching contact data:', error);
    setLoading(false);
    setError(true);
    clearTimeout(loadingTimeout);
    }
};

fetchData();
}, []);

const renderSkeleton = () => {
const skeletons = Array(3).fill(0).map((_, index) => (
    <div key={index} className={styles.skeletonItem}>
    <div className={styles.skeletonLineLarge}></div>
    <div className={styles.skeletonLineMedium}></div>
    <div className={styles.skeletonLineSmall}></div>
    <div className={styles.skeletonLineMedium}></div>
    <div className={styles.skeletonLineSmall}></div>
    </div>
));

return (
    <div className={styles.skeletonContainer}>
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
    <h1 className={styles.title}>Contact Us</h1>
    <p className={styles.subtitle}>Get in touch with us for more information.</p>
    {loading && !error && renderSkeleton()}
    {error && renderErrorModal()}
    {!loading && !error && (
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
        {contactInfo.map((info, index) => (
            <div key={index} className={styles.contactCard}>
            <h2 className={styles.contactTitle}>{info.title}</h2>
            <address className={styles.addressContainer}>
                <div className={styles.addressLabel}>
                Name <br />
                Email <br />
                Phone Number
                </div>
                <div id="contact-details" className={styles.addressDetails}>
                {info.name} <br />
                {info.email} <br />
                {info.phone}
                </div>
                <button onClick={() => copyToClipboard(`${info.name}\n${info.email}\n${info.phone}`)} className={styles.copyButton}>
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
                </button>
            </address>
            <button className={`${styles.actionButton} bg-${index === 0 ? 'blue' : index === 1 ? 'red' : index === 2 ? 'red' : 'green'}-500`} onClick={() => handleShow(`${info.title}`)}>More Info</button>
            </div>
        ))}
        </div>

        <p className={styles.footerText}>
        We aim to respond in 1-2 business days.
        </p>

        <div className={styles.ratingContainer}>
        <svg className={styles.ratingIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p className={styles.ratingText}>4.91</p>
        <span className={styles.separatorDot}></span>
        <a href="#" className={styles.ratingLink}>19 reviews</a>
        </div>
    </div>
    )}

    {showModal && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className={styles.modalOverlay} onClick={handleClose}></div>
        <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>More Information</h2>
            <button className={styles.closeButton} onClick={handleClose}>
            <svg className={styles.closeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            </button>
        </div>
        <p className={styles.modalBody}>{modalContent}</p>
        <button className={styles.modalActionButton} onClick={handleClose}>Close</button>
        </div>
    </div>
    )}
</div>
);
};

export default Contact;
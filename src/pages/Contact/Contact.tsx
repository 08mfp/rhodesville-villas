import React, { useEffect, useState } from 'react';
import axios from 'axios';
import whatsappIcon from '../../assets/icons/whatsapp.webp';
import callIcon from '../../assets/icons/call.png';
import mailIcon from '../../assets/icons/mail.webp';

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
            try {
                const response = await axios.get('/api/contact');
                setContactInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contact data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
            <br/>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Us</h1>
            <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 text-center">Get in touch with us for more information.</p>
            
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-lg p-5">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h2>
                            <address className="relative bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-2">
                                <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                                    Name <br />
                                    Email <br />
                                    Phone Number
                                </div>
                                <div id="contact-details" className="space-y-2 text-gray-900 dark:text-white font-medium leading-loose">
                                    {info.name} <br />
                                    {info.email} <br />
                                    {info.phone}
                                </div>
                                <button onClick={() => copyToClipboard(`${info.name}\n${info.email}\n${info.phone}`)} className="absolute end-2 top-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                    </svg>
                                </button>
                            </address>
                            <button className={`bg-${index === 0 ? 'blue' : index === 1 ? 'red' : index === 2 ? 'red' : 'green'}-500 text-white py-2 px-4 rounded mt-4`} onClick={() => handleShow(`${info.title}`)}>More Info</button>
                        </div>
                    ))}
                </div>

                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-4 mb-0 text-center">
                    We aim to respond in 1-2 business days.
                </p>
                
                <div className="flex items-center justify-center mt-8">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.91</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">19 reviews</a>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 z-50">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">More Information</h2>
                            <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100" onClick={handleClose}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{modalContent}</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;

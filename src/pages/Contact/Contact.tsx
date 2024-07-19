import React, { useState } from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.webp';
import callIcon from '../../assets/icons/call.png';
import mailIcon from '../../assets/icons/mail.webp';

const Contact: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleClose = () => setShowModal(false);
    const handleShow = (content: string) => {
        setModalContent(content);
        setShowModal(true);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Us</h1>
            <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 text-center">Get in touch with us for more information.</p>
            
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">For bookings:</h2>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                            <span>example@email.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={callIcon} alt="Call" className="h-5 md:h-6" />
                            <span>+260 0000000000</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                            <a href="https://wa.me/yourphonenumber" className="hover:underline">WhatsApp Us</a>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={() => handleShow('For bookings content here...')}>More Info</button>
                    </div>
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">For General Enquiries:</h2>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                            <span>example@email.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={callIcon} alt="Call" className="h-5 md:h-6" />
                            <span>+260 0000000000</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                            <a href="https://wa.me/yourphonenumber" className="hover:underline">WhatsApp Us</a>
                        </div>
                        <button className="bg-gray-500 text-white py-2 px-4 rounded mt-4" onClick={() => handleShow('For general enquiries content here...')}>More Info</button>
                    </div>
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">For Feedback/Complaints:</h2>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                            <span>example@email.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={callIcon} alt="Call" className="h-5 md:h-6" />
                            <span>+260 0000000000</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                            <a href="https://wa.me/yourphonenumber" className="hover:underline">WhatsApp Us</a>
                        </div>
                        <button className="bg-red-500 text-white py-2 px-4 rounded mt-4" onClick={() => handleShow('For feedback/complaints content here...')}>More Info</button>
                    </div>
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Website/Online Team:</h2>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                            <span>example@email.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={callIcon} alt="Call" className="h-5 md:h-6" />
                            <span>+260 0000000000</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                            <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                            <a href="https://wa.me/yourphonenumber" className="hover:underline">WhatsApp Us</a>
                        </div>
                        <button className="bg-green-500 text-white py-2 px-4 rounded mt-4" onClick={() => handleShow('Website/Online team content here...')}>More Info</button>
                    </div>
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
            
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-4 mb-0 text-center">
                We aim to respond in 1-2 business days.
            </p>
        </div>
    );
};

export default Contact;

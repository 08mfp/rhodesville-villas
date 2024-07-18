import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.webp';
import callIcon from '../../assets/icons/call.png';
import mailIcon from '../../assets/icons/mail.webp';

const Contact: React.FC = () => (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen pb-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Us</h1>
        <p className="text-lg md:text-3xl text-gray-700 dark:text-gray-300 mb-8 text-center">Get in touch with us for more information.</p>
        <div className="max-w-screen-lg mx-auto space-y-8">
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">For bookings:</h2>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                    <span>example@email.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={callIcon} alt="Call" className="h-5 md:h-6" />
                    <span>+260 0000000000</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                    <a href="https://wa.me/yourphonenumber" className="hover:underline">WhatsApp Us</a>
                </div>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">For General Enquiries:</h2>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                    <span>example@email.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={callIcon} alt="Call" className="h-5 md:h-6" />
                    <span>+260 0000000000</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                    <a href="https://wa.me/yourphonenumber" className="hover:underline">WhatsApp Us</a>
                </div>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">For Feedback/Complaints:</h2>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                    <span>example@email.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={callIcon} alt="Call" className="h-5 md:h-6" />
                    <span>+260 0000000000</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                    <a href="https://wa.me/yourphonenumber" className="hover:underline">WhatsApp Us</a>
                </div>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Website/Online Team:</h2>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                    <span>example@email.com</span>
                </div>
            </div>
        </div>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-4 mb-0 text-center">
            We aim to respond in 1-2 business days.
        </p>
    </div>
);

export default Contact;

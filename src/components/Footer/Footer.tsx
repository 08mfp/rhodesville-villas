import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.webp';
import callIcon from '../../assets/icons/call.png';
import mailIcon from '../../assets/icons/mail.webp';
import logo from '../../assets/images/logo.png';

const Footer: React.FC = () => (
    <footer className="bg-gray-100 dark:bg-gray-700 py-4 md:py-8 w-full">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="WhatsApp" className="h-8" />
                    <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap dark:text-white">Rhodesville Villas & Apartments</span>
                </div>
                <div className="flex space-x-4">
                    <a href="https://wa.me/yourphonenumber" className="flex items-center text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline space-x-2">
                        <img src={whatsappIcon} alt="WhatsApp" className="h-5 md:h-6" />
                        <span>WhatsApp</span>
                    </a>
                    <a href="mailto:youremail@example.com" className="flex items-center text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline space-x-2">
                        <img src={mailIcon} alt="Email" className="h-5 md:h-6" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
            <span className="block text-sm md:text-base text-gray-500 sm:text-center dark:text-gray-400"><i>By using this site, you agree to our Terms and Conditions, Privacy Policy, and Cookie Policy, acknowledge our disclaimer of liability, 
            intellectual property rights, and that information provided is not professional, 
            with jurisdiction governed by The Republic of Zambia.</i></span>  
            <br/>
            <span className="block text-sm md:text-base text-gray-500 sm:text-center dark:text-gray-400">© 2024 Rhodesville Villas.</span>
            <span className="block text-sm md:text-base text-gray-500 sm:text-center dark:text-gray-400">Website managed by © no name company. All rights reserved.</span>          
        </div>
    </footer>
);

export default Footer;

// cant use json type formatting in this file as it would affect styling
import React from 'react';
import apartmentImage from '../../../src/assets/images/apartment.jpeg';

const AboutVillas: React.FC = () => (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
        <br/>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Us</h1>
        {/* <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 text-center">Experience the Ultimate in Luxury and Elegance</p> */}

            
        {/* Cards Layout */}
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:max-w-3/4 mx-auto">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="About Us"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2">Rhodesville</h2>
                    <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    We have five years of experience providing serviced long-term apartments and have built a strong track record of satisfied customers.
                    <br/> <br/>
                    Our luxury villas in the heart of Lusaka are designed to offer the highest level of comfort and convenience. 
                    These villas come fully furnished with everything you need, so you can simply move in and start enjoying your new home immediately. 
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="Strategic Location"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2">The Villas</h2>
                    <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    Our gated community of five luxury villas offers the ultimate in privacy and comfort. Each villa features a private pool and garden, 
                    a parking area, and state-of-the-art appliances, including high-definition TVs, stylish furniture, and fast WiFi (up to 150MBps).
                    <br/> <br/>
                    The villas, ideal for families, come with 24/7 security, including day and night shift guards, a visitor logging system, and CCTV coverage. 
                    Additionally, each villa is equipped with a solar and inverter backup system to ensure uninterrupted power supply during outages.
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="Community"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2">Location</h2>
                    <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    Our villas are nestled in the main area of Lusaka, offering an unbeatable central location that ensures you are always close to the best the city has to offer.
                    <br/> <br/> 
                    Just a short walk or a three-minute drive will take you to schools (ISL, Italian School), state-of-the-art hospitals (CFB, Forest Park, Medcross), 
                    and the city's biggest shopping malls (East Park, Manda Hill, Arcades). Everything is conveniently within reach from Rhodesville.
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
                    <img
                        src={apartmentImage}
                        alt="Community"
                        className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
                    />
                    <h2 className="text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2">Booking Policy</h2>
                    <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    At Rhodesville, we specialize in long-term rentals of 6 months or more, providing a stable and luxurious living experience. 
                    While we do not offer bed & breakfast or weekly bookings like Airbnb, we may accommodate shorter-term contracts depending on availability.
                    <br/> <br/> 
                    Please contact us directly to discuss your specific needs.
                    To inquire about availability or start the booking process, fill out our contact form or reach out via phone or email. Our team is ready to assist you and help you find the perfect villa for your stay in Lusaka.
                    We look forward to welcoming you!
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default AboutVillas;

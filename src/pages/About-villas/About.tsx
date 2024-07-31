import React, { useEffect, useState } from 'react';
import axios from 'axios';

type AboutSection = {
  title: string;
  image: string;
  content: string;
};

const AboutVillas: React.FC = () => {
  const [sections, setSections] = useState<AboutSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rhodesville-backend.vercel.app/api/about');
        setSections(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about data:', error);
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
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Us</h1>

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:max-w-3/4 mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4"
              />
              <h2 className="text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2">{section.title}</h2>
              <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutVillas;

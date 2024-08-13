import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuthHeader } from '../../utils/auth';
import { styles } from './styles';

type ImageGallery = {
src: string;
category: string;
};

type HomeData = {
imageGallery: ImageGallery[];
categories: string[];
};

const Gallery: React.FC = () => {
const [selectedCategory, setSelectedCategory] = useState('All categories');
const [imageGallery, setImageGallery] = useState<ImageGallery[]>([]);
const [categories, setCategories] = useState<string[]>([]);
const [loading, setLoading] = useState(true);
const urlweb = process.env.REACT_APP_API_BASE_URL || 'https://default-url.com';
const fullurl = `${urlweb}/home`;

useEffect(() => {
const fetchData = async () => {
    try {
    const response = await axios.get(fullurl, {
        headers: {
        'Authorization': getAuthHeader(),
        },
    });
    const data: HomeData = response.data;
    setImageGallery(data.imageGallery);
    setCategories(data.categories);
    setLoading(false);
    } catch (error) {
    console.error('Error fetching home data:', error);
    setLoading(false);
    }
};

fetchData();
}, []);

if (loading) {
return <div>Loading...</div>;
}

const filteredImages =
selectedCategory === 'All categories'
    ? imageGallery
    : imageGallery.filter((image) => image.category === selectedCategory);

return (
<div className={styles.container}>
    <h1 className={styles.title}>Gallery</h1>
    <div className={styles.buttonContainer}>
    {categories.map((category, index) => (
        <button
        key={index}
        type="button"
        onClick={() => setSelectedCategory(category)}
        className={styles.categoryButton(category === selectedCategory)}
        >
        {category}
        </button>
    ))}
    </div>

    <div className={styles.galleryGrid}>
    {filteredImages.map((image, index) => (
        <div key={index}>
        <img className={styles.galleryImage} src={image.src} alt={image.category} />
        </div>
    ))}
    </div>
</div>
);
};

export default Gallery;
import React, { useState } from 'react';
import './Neighborhood.css';
import MapComponent from '../../components/MapComponent/MapComponent';
import locations from '../../data/locations.json';

const categories = Array.from(new Set(locations.map(location => location.category)));

const Neighborhood: React.FC = () => {
    const [visibleCounts, setVisibleCounts] = useState<{ [key: string]: number }>(
        categories.reduce((acc, category) => ({ ...acc, [category]: 5 }), {})
    );

    const handleSeeMore = (category: string) => {
        setVisibleCounts({
            ...visibleCounts,
            [category]: visibleCounts[category] + 5
        });
    };

    const handleSeeLess = (category: string) => {
        setVisibleCounts({
            ...visibleCounts,
            [category]: Math.max(5, visibleCounts[category] - 5)
        });
    };

    return (
        <div className="neighborhood">
            <h1>Location</h1>
            <p>Explore our neighbourhood using the map below:</p>
            <div className="map-section">
                <MapComponent />
            </div>
            <div className="distances-section">
                <h1>Nearby Landmarks</h1>
                {categories.map(category => (
                    <div key={category} className="category-section">
                        <h3 className="category-header">{category}</h3>
                        <ul className="distance-list">
                            {locations
                                .filter(location => location.category === category)
                                .sort((a, b) => a['time-from-villa'] - b['time-from-villa'])
                                .slice(0, visibleCounts[category])
                                .map((location, index) => (
                                    <li key={index} className="distance-card">
                                        <div className="distance-card-header">
                                            <img
                                                src={location.icon}
                                                alt={location.category}
                                                className="location-icon"
                                            />
                                            <h3>{location.name}</h3>
                                        </div>
                                        <p>{location.description}</p>
                                        <p>{location['time-from-villa']} minutes away</p>
                                    </li>
                                ))}
                        </ul>
                        <div className="buttons-container">
                            {visibleCounts[category] > 3 && (
                                <button onClick={() => handleSeeLess(category)} className="see-less-button">See Less</button>
                            )}
                            {locations.filter(location => location.category === category).length > visibleCounts[category] && (
                                <button onClick={() => handleSeeMore(category)} className="see-more-button">See More</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Neighborhood;

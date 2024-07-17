import React from 'react';
import './Neighborhood.css';
import MapComponent from '../../components/MapComponent/MapComponent';
import locations from '../../data/locations.json';

const categories = Array.from(new Set(locations.map(location => location.category)));

// Define the icon paths
const iconMap: { [key: string]: string } = {
    "Shopping Centers:": '/icons/shopping.png',
    "Schools:": '/icons/education.png',
    " ": '/icons/main.png', // One space category
    "Default": '/icons/default.png'
};

const Neighborhood: React.FC = () => (
    <div className="neighborhood">
        <h1>Location</h1>
        <p>Explore our neighbourhood using the map below:</p>
        <div className="map-section">
            <MapComponent />
        </div>
        <div className="distances-section">
            <h1 >Nearby Landmarks</h1>
            {categories.map(category => (
                <div key={category} className="category-section">
                    <h3 className="category-header">{category}</h3>
                    <ul className="distance-list">
                        {locations
                            .filter(location => location.category === category)
                            .sort((a, b) => a['time-from-villa'] - b['time-from-villa'])
                            .map((location, index) => (
                                <li key={index} className="distance-card">
                                    <div className="distance-card-header">
                                        <img
                                            src={iconMap[location.category] || iconMap['Default']}
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
                </div>
            ))}
        </div>
    </div>
);

export default Neighborhood;

import React from 'react';
import './Neighborhood.css';
import MapComponent from '../../components/MapComponent/MapComponent';

const Neighborhood: React.FC = () => (
    <div className="neighborhood">
        <h1>Neighborhood</h1>
        <p>Explore the vibrant community around our apartments. Discover local shops, restaurants, and parks that make living here a delight.</p>
        <MapComponent />
    </div>
);

export default Neighborhood;

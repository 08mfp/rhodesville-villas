import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapComponent.css';
import locations from '../../data/locations.json'; // Import the JSON file

// Set your Mapbox access token here
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

interface Location {
    lat: number;
    lng: number;
    name: string;
    description: string;
    category: string;
    'time-from-villa': number;
}

// Define the icon paths
const iconMap: { [key: string]: string } = {
    "Shopping Centers:": '/icons/shopping.png',
    "Schools:": '/icons/education.png',
    " ": '/icons/main.png', // One space category
    "Default": '/icons/default.png'
};

const MapComponent: React.FC = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [28.312117, -15.403841],
                zoom: 14,
            });

            mapRef.current.on('load', () => {
                if (mapRef.current) {
                    locations.forEach(location => {
                        const icon = iconMap[location.category] || iconMap['Default'];

                        new mapboxgl.Marker({
                            element: createMarkerElement(icon)
                        })
                            .setLngLat([location.lng, location.lat])
                            .setPopup(
                                new mapboxgl.Popup({ offset: 25 })
                                    .setHTML(`<h3>${location.name}</h3><p>${location.description}</p>`)
                            )
                            .addTo(mapRef.current!);
                    });
                }
            });
        }

        return () => {
            if (mapRef.current) mapRef.current.remove();
        };
    }, []);

    const createMarkerElement = (iconUrl: string) => {
        const img = document.createElement('img');
        img.src = iconUrl;
        img.style.width = '30px';
        img.style.height = '30px';
        return img;
    };

    return <div className="map-container" ref={mapContainerRef} />;
};

export default MapComponent;

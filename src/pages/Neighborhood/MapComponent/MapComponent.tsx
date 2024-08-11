import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import { getAuthHeader } from '../../../utils/auth';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

interface Location {
    lat: number;
    lng: number;
    name: string;
    description: string;
    category: string;
    icon: string;
    'time-from-villa': number;
}

const MapComponent: React.FC = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://rhodesville-backend.vercel.app/api/locations', {
                    headers: {
                        'Authorization': getAuthHeader()
                    }
                });
                setLocations(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations data:', error);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const zoomLevel = isMobile ? 13 : 14;

        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [28.312117, -15.403861],
                zoom: zoomLevel,
            });

            mapRef.current.on('load', () => {
                if (mapRef.current) {
                    locations.forEach(location => {
                        new mapboxgl.Marker({
                            element: createMarkerElement(location.icon)
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
            if (mapRef.current) {
                mapRef.current = null; //cleanup for removeeventlistener errors.
            }
        };
    }, [locations]);

    const createMarkerElement = (iconUrl: string) => {
        const img = document.createElement('img');
        img.src = iconUrl;
        img.style.width = '30px';
        img.style.height = '30px';
        return img;
    };

    if (loading) {
        return (
            <div className="border-4 border-gray-600 dark:border-gray-300 rounded-lg overflow-hidden h-72 md:h-96">
                <div className="animate-pulse h-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
        );
    }

    return (
        <div className="border-4 border-gray-600 dark:border-gray-300 rounded-lg overflow-hidden h-72 md:h-96" ref={mapContainerRef} />
    );
};

export default MapComponent;

import React, { Suspense } from 'react';

const LazyMapComponent = React.lazy(() => import('./MapComponent/MapComponent'));

const MapWrapper: React.FC = () => (
    <Suspense fallback={<div>Loading map...</div>}>
        <LazyMapComponent />
    </Suspense>
);

export default MapWrapper;

// Add an empty export to ensure it's treated as a module
export {};

import React, { Suspense } from 'react';

const LazyMapComponent = React.lazy(() => import('./MapComponent'));

const MapWrapper: React.FC = () => (
    <Suspense fallback={<div>Loading map...</div>}>
        <LazyMapComponent />
    </Suspense>
);

export default MapWrapper;

export {};

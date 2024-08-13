import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About-villas/About';
import AboutApt from './pages/About-apt/About';
import Availability from './pages/Availability/Availability';
import Contact from './pages/Contact/Contact';
import Neighborhood from './pages/Neighborhood/Neighborhood';
import Amenities from './pages/Amenities/Amenities';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-villas" element={<About/>} />
            <Route path="/about-apartments" element={<AboutApt/>} />
            <Route path="/availability" element={<Availability/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/neighborhood" element={<Neighborhood />} />
            <Route path="/amenities" element={<Amenities />} />
        </Routes>
        <Footer />
        <Analytics />
        <div>
            {/* ... */}
            <SpeedInsights />
        </div>
    </Router>
);

export default App;



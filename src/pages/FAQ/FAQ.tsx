import React from 'react';
import './FAQ.css';

const FAQ: React.FC = () => (
    <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-item">
            <h2>What is the leasing process?</h2>
            <p>Our leasing process is simple and straightforward. You can apply online or visit our office.</p>
        </div>
        <div className="faq-item">
            <h2>Are pets allowed?</h2>
            <p>Yes, we are a pet-friendly community. Please check our pet policy for more details.</p>
        </div>
        {/* Add more FAQ items as needed */}
    </div>
);

export default FAQ;

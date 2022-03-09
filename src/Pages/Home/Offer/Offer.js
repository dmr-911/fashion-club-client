import React from 'react';
import './Offer.css';
import { Container } from 'react-bootstrap';

const Offer = () => {
    return (
        <div className="offer-container mb-5 text-white">
            <div className="offer">
                <span className="offer-header">Flat</span>
                <h1 className="offer-body">20%</h1>
                <span className="offer-footer">Off</span>
            </div>
        </div>
    );
};

export default Offer;
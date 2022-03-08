import React from 'react';
import './MiddleBanner.css';
import { Container } from 'react-bootstrap';


const MiddleBanner = () => {
    return (
        <Container fluid className="mid-banner text-white">
            <Container className="d-flex h-100 justify-content-around align-items-center">
                <h2>Fashion Club</h2>
                <p>Free ad, get bonus, free ad, get bonus, free ad, get bonus</p>
            </Container>
        </Container>
    );
};

export default MiddleBanner;
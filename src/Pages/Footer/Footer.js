import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import FooterHeader from './FooterHeader/FooterHeader';

const Footer = () => {
    return (
        <Container fluid className="footer-container">
            <FooterHeader></FooterHeader>
        </Container>
    );
};

export default Footer;
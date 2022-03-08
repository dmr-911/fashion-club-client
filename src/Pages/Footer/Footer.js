import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import FooterBody from './FooterBody/FooterBody';
import FooterHeader from './FooterHeader/FooterHeader';

const Footer = () => {
    return (
        <Container fluid className="footer-container">
            <FooterHeader></FooterHeader>
            <FooterBody></FooterBody>
        </Container>
    );
};

export default Footer;
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import FooterBody from './FooterBody/FooterBody';
import FooterHeader from './FooterHeader/FooterHeader';
import FooterTail from './FooterTail/FooterTail';

const Footer = () => {
    return (
        <Container fluid className="footer-container">
            <FooterHeader></FooterHeader>
            <FooterBody></FooterBody>
            <FooterTail></FooterTail>
        </Container>
    );
};

export default Footer;
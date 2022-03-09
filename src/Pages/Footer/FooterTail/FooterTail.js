import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterTail.css';

const FooterTail = () => {
    return (
        <Container className="mt-5 pb-5 text-start footer-tail">
            <small className="text-white me-4 copyright">&copy; 2022 Fashion Club Limited</small>
            <div className="tail-links">
            <a as={Link} to="/" className="footer-tail-link">Support</a><a as={Link} to="/" className="footer-tail-link">Privacy policy</a><a as={Link} to="/" className="footer-tail-link">Terms of use</a><a as={Link} to="/" className="footer-tail-link">Coockie policy</a>
            </div>
        </Container>
    );
};

export default FooterTail;
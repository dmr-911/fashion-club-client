import React from 'react';
import { Container } from 'react-bootstrap';
import './FooterHeader.css';

const FooterHeader = () => {
    return (
        <Container className="py-5 text-white d-flex justify-content-between">
            <h5 className="footer-header-title">Zzazzo Fashion</h5>
            <small className="d-block text-start footer-header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit et sed in semper arcu sed et, id tellus. Et senectus cum sagittis faucibus sit ultricies. Amet consectetur ante diam faucibus in arcu. Ultricies pellentesque rhoncus est aliquam. Turpis pretium morbi penatibus auctor mattis mauris ut sit.</small>
        </Container>
    );
};

export default FooterHeader;
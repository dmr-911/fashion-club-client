import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterBody.css';

const FooterBody = () => {
    return (
        <div className="footer-body-container text-white text-start">
          <Container>
            <Row xs={1} lg={2} className="g-0">
            <Col xs={12} lg={7} className="left-footer-section">
            <Row xs={1} md={3}>
                <Col>
                <h5>How can we help?</h5>
                <ul className="text-start">
                    <li><a as={Link} className="footer-link">Help</a></li>
                    <li><a as={Link} className="footer-link">Track my order</a></li>
                    <li><a as={Link} className="footer-link">Returns</a></li>
                    <li><a as={Link} className="footer-link">Size guide</a></li>
                    <li><a as={Link} className="footer-link">Student discount</a></li>
                    <li><a as={Link} className="footer-link">Discounts and promo codes</a></li>
                    <li><a as={Link} className="footer-link">Get exclusive offers and update</a></li>
                </ul>
                </Col>
                <Col>
                <h5>About us</h5>
                <ul>
                    <li><a as={Link} className="footer-link">About Fashion Club</a></li>
                    <li><a as={Link} className="footer-link">Investor relations</a></li>
                    <li><a as={Link} className="footer-link">Careers</a></li>
                    <li><a as={Link} className="footer-link">Become an affilitate</a></li>
                    <li><a as={Link} className="footer-link">Become a partner</a></li>
                    <li><a as={Link} className="footer-link">Contact us</a></li>
                    <li><a as={Link} className="footer-link">Press</a></li>
                </ul>
                </Col>
                <Col>
                <h5>Social</h5>
                <ul>
                    <li><a as={Link} className="footer-link">Facebook</a></li>
                    <li><a as={Link} className="footer-link">Instragram</a></li>
                    <li><a as={Link} className="footer-link">YouTube</a></li>
                    <li><a as={Link} className="footer-link">Twitter</a></li>
                </ul>
                </Col>
            </Row>
            </Col>
            <Col xs={12} lg={5} className="right-footer-section px-4 pt-5 pb-4">
                <div className="mx-auto">
                <div>
                <h5 className="my-4">EXTRA 10% DISCOUNT EVERYTHING!</h5> 
                <small className="d-block mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas sit orci et tellus id non. Elit lectus egestas bibendum ultrices ut.</small>
                <div className="input-section">
                <input type="text" className="notify-input"/><button className="btn-footer  mt-2">Subscribe</button>
                </div>
                </div>   
                </div>
            </Col>
            </Row>
            </Container>  
        </div>
    );
};

export default FooterBody;
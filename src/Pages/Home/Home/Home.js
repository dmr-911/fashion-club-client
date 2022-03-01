import React from 'react';
import { Container } from 'react-bootstrap';
import BannerProduct from '../BannerProduct/BannerProduct';
import './Home.css';

const Home = () => {
    return (
        <Container fluid className="mt-5 pt-2">
            <hr />
            <BannerProduct></BannerProduct>
        </Container>
    );
};

export default Home;
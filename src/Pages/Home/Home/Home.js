import React from 'react';
import { Container } from 'react-bootstrap';
import BannerProduct from '../BannerProduct/BannerProduct';
import Trending from '../Trending/Trending/Trending';
import './Home.css';

const Home = () => {
    return (
        <Container fluid className="mt-5 pt-2">
            <hr />
            <BannerProduct></BannerProduct>
            <hr />
            <Trending></Trending>
        </Container>
    );
};

export default Home;
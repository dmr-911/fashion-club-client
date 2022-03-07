import React from 'react';
import { Container } from 'react-bootstrap';
import BannerProduct from '../BannerProduct/BannerProduct';
import Categories from '../Categories/Categories/Categories';
import Trending from '../Trending/Trending/Trending';
import './Home.css';

const Home = () => {
    return (
        <Container fluid className="mt-5 pt-2">
            <BannerProduct></BannerProduct>
            <hr />
            <Trending></Trending>
            <Categories></Categories>
        </Container>
    );
};

export default Home;
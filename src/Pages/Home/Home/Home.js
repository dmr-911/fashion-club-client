import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import BannerProduct from '../BannerProduct/BannerProduct';
import Categories from '../Categories/Categories/Categories';
import Exclusives from '../Exclusives/Exclusives';
import HotDeals from '../HotDeals/HotDeals';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import Notify from '../Notify/Notify';
import Offer from '../Offer/Offer';
import Trending from '../Trending/Trending/Trending';
import './Home.css';

const Home = () => {
    return (
        <Container fluid className="mt-5 pt-2">
            <BannerProduct></BannerProduct>
            <hr />
            <Trending></Trending>
            <Categories></Categories>
            <MiddleBanner></MiddleBanner>
            <Exclusives></Exclusives>
            <Offer></Offer>
            <HotDeals></HotDeals>
            <Notify></Notify>
            <Footer></Footer>
        </Container>
    );
};

export default Home;
import React from 'react';
import { Container } from 'react-bootstrap';
import './Trending.css';

const Trending = () => {
    return (
        <Container>
            <div className="d-flex justify-content-between">
                <b>Trending Clothes</b>
                <button>View all</button>
            </div>
        </Container>
    );
};

export default Trending;
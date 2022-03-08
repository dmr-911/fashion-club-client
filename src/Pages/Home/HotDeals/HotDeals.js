import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Deal from './Deal/Deal';

const HotDeals = () => {
    const [deals, setDeals] = useState([]);
    useEffect(()=>{
        fetch('/hotDeals.json')
        .then(res => res.json())
        .then(data => setDeals(data))
    },[]);

    return (
        <Container className="mb-5">
            <h2 className="text-start mb-4 g-3">Hot deals!</h2>
            <Row xs={1} md={4}>
                {
                    deals.map(deal =><Deal
                    key={deal.id}
                    deal={deal}
                    ></Deal>)
                }
            </Row>
        </Container>
    );
};

export default HotDeals;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Item from './Item/Item';

const Exclusives = () => {
    const {products} = useProducts();
    const navigate =  useNavigate();
    const handleClick = () =>{
        navigate('/allProducts');
    };
    return (
        <Container className="my-5">
            <div className="d-flex justify-content-between mb-3">
                <h4><b>Zzazzo Fashion exclusives</b></h4>
                <button className="btn-general" onClick={handleClick}>View all</button>
            </div>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    products.map(product => <Item
                    key={product.id}
                    product = {product}
                    ></Item>)
                }
            </Row>
        </Container>
    );
};

export default Exclusives;
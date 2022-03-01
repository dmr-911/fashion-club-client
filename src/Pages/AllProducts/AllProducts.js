import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Home/Trending/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

    return (
        <>
        {   products.length ?     <Container className="mt-5 py-5">
            <Row xs={1} className="g-3">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    ></Product>)
                }
            </Row>
        </Container>
        :
        <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
        <div>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        </div>
      </div>}   
        </>
    );
};

export default AllProducts;
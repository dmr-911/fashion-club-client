import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from '../Home/Trending/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/allProducts');
    };
    return (
        <>
        <Container className="mt-5 py-5">
            <Row xs={1} className="g-3">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    ></Product>)
                }
            </Row>
        </Container>   
        </>
    );
};

export default AllProducts;
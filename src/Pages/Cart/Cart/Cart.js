import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from '../Item/Item';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [newCart, setNewCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [finalProduct, setFinalProduct] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(data=>setCart(data.products))
    },[]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data));
    },[])

    useEffect(()=>{
        let newCart = [];
        for(const product of cart){
            newCart.push(product)
        };
        setNewCart(newCart);
    },[cart])

    useEffect(()=>{
        let result = products.filter(p1 => newCart.some(p2 => p1.id === p2.productId));
        setFinalProduct(result);
    },[products, newCart]);

    return (
        <>
         <Container className="mt-5 pt-5">
            <Row xs={1} className="g-4">
                {
                    finalProduct.length && finalProduct.map(item => <Item
                    key={item.id}
                    item={item}
                    ></Item>)
                }
            </Row>    
         </Container>   
        </>
    );
};

export default Cart;
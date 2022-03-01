import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './Product.css';
import love from '../../../../images/navigation/wishlist.svg';

const Product = ({product}) => {
    const [disabled, setDisabled] = useState(false);
    const [clicked, setClicked] = useState(false);
    const {image, title, description, price, id} = product;
    const handleAddCart = (id) =>{
        setDisabled(true);
        fetch('https://fakestoreapi.com/carts/1',{
            method:"PATCH",
            body:JSON.stringify(
                {
                    userId: 1,
                    date: new Date(),
                    products:[{productId: id,quantity: 1}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    };

    const handleClick = () =>{
        setClicked(true);
    };

    return (
        <Row xs={1} md={2} className="border border-1 rounded mt-3 mb-1 py-3">
            <Col md={4}>
                <img src={image} className="trending-product-img" alt="" />
            </Col>
            <Col md={8} className="text-start">
                <h5>{title}</h5>
                <p>{description}</p>
                <del className="me-3">${price + (price*20/100)}</del>
                <b style={{fontSize: '22px'}}>${price}</b>
                <div className="d-flex align-items-center my-3">
                <p><small><Rating
                                initialRating={product.rating?.rate}
                                readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                />({product.rating?.count})
                    </small>
                </p>
                <button className="btn-favorite ms-5" onClick={handleClick}>{
                    clicked ? <i class="fa-solid fa-heart favorite-icon d-block"></i> : <img src={love} className="favorite-img" alt="" />
                }</button>
                </div>
                <button className="btn-general" onClick={()=> handleAddCart(id)} disabled={disabled}>Add to cart</button>
            </Col>
        </Row>
    );
};

export default Product;
import React, { useState } from 'react';
import './Item.css';
import love from '../../../../images/navigation/wishlist.svg';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const Item = ({product}) => {
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
            .then(json=>{
                console.log(json);
                toast("Added to the cart")
            })
    };

    const handleClick = () =>{
        setClicked(true);
    };
    return (
        <Col className="item-card">
        {/* <div xs={1} md={2} className="border border-1 rounded mt-3 mb-1 py-1"> */}
                <img src={image} className="trending-product-img mb-3" alt="" />
            <Col className="text-start">
                <h5 title={title}>{title.slice(0,20)}...</h5>
                <p title={description}><small className="description-container">{description?.slice(0,150)}...</small></p>
                <del className="me-3">${price + (price*20/100)}</del>
                <b style={{fontSize: '18px'}}>${price}</b>
                <div className="d-flex my-1">
                <p className="pt-3"><small><Rating
                                initialRating={product.rating?.rate}
                                readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                />({product.rating?.count})
                    </small>
                </p>
                <button className="btn-favorite ms-5" onClick={handleClick}>{
                    clicked ? <i className="fa-solid fa-heart favorite-icon d-block"></i> : <img src={love} className="favorite-img" alt="" />
                }</button>
                </div>
                <button className="btn-general" onClick={()=> handleAddCart(id)} disabled={disabled}>Add to cart</button>
            </Col>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </Col>
    );
};

export default Item;
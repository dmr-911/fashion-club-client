import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bannerImage from '../../../images/banner/lovely-european-model-stylish-fur-coat-dress-wearing-ankle-boot-black-leather-holding-brown-handbag.png';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';
import './BannerProduct.css';
import PurchaseModal from './PurchaseModal';

const BannerProduct = () => {
    const [product, setProduct] = useState({});
    const [index, setIndex] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const colors = [
        "red", "green", "blue"
    ];

    useEffect(()=>{
        fetch('/product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);

    const handleAddToBag = (id) =>{
        toast("Added to the cart");
        setDisabled(true)

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
            })
    };
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);}

    const [modalShow, setModalShow] = React.useState(false);
    const handleModal = () =>{
        setModalShow(true);
    };
    const handleSelectColor = (value) =>{
        console.log(value);
        toast(`${value} color selected.`)
    };

    return (
        <Container className="mt-5">
            {
                product.title ?
                <div>
                    <Container className="pt-3">
            </Container>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col xs={12} md={4} style={{height: "auto"}}>
                    <Carousel className="h-75 banner-slider" activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                            src={bannerImage}
                            className="banner-img"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className="bottom-banner">
                    <Row xs={1} md={3} lg={3} className="side-banner g-2">
                        <Col>
                            <img src={banner1} className="tail-banner-img img-fluid" alt="" />
                        </Col>
                        <Col>
                            <img src={banner2} className="tail-banner-img img-fluid" alt="" />
                        </Col>
                        <Col>
                            <img src={banner3} className="tail-banner-img img-fluid" alt="" />
                        </Col>
                    </Row>
                    </div>
                    </Col>
                    <Col xs={12} md={7} className="text-start">
                        <p>Zzazzo Fashion exclusives</p>
                        <h4>{product?.title}</h4>
                        <b><small>{product.category}</small></b><br />
                        <p>{product.description}</p>
                        {/* <del>Price : ${product?.price}</del> */}
                        <p><span className="text-danger fw-bold fs-3">${Math.ceil(product?.price - (20*product?.price/100))}</span> (20% off)</p>
                        <p><b>Colour : </b> Coming soon</p>
                        <p><b>Options : </b> Coming soon</p>
                        <button className="my-3 me-3 btn-general" onClick={()=>handleAddToBag(product.id)} disabled={disabled}>ADD TO BAG</button>
                        {/* <button className="my-3 me-3 btn-banner" onClick={()=>handleAddToBag(product.id)} disabled={disabled}>ADD TO BAG</button> */}
                        <button className="btn-danger my-3 btn-banner" onClick={handleModal}>Purchase Now</button>

                        {
                            product?.features && <>
                            <h5><b>Details</b></h5>
                            {
                                product?.features?.map(pd =>
                                    <small key={pd.value}>
                                    <li>{pd?.description}</li>
                                    <li>{pd?.value}</li>
                                    </small>)
                            }
                            </> 
                        }   
                    <div className="w-50 d-flex justify-content-between align-items-center my-3">
                        <b>Available colors</b>
                        <div className="round">
                            {
                                colors.map((color, i) =><button key={i} onClick={()=>handleSelectColor(color)} className="color-btn mx-1" style={{backgroundColor: `${color}`}}></button>)
                            }
                        </div>
                    </div>    
                    <div className="w-50 d-flex justify-content-between"> 
                     <b>Product reviews</b>  
                     <div>
                        <p><small><Rating
                                initialRating={product.rating?.rate}
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star icon-color"
                                />({product.rating?.count})
                            </small>
                        </p>
                    </div>  
                    </div>   
                    <div className="w-50 d-flex justify-content-between">
                        <b>Delivery information</b>
                        <p>Free shipping</p>    
                    </div> 
                    </Col>
                </Row>
                <PurchaseModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>
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
                </div>
                :
                <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
                <div>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
                </div>
              </div>
            }
        </Container>
    );
};

export default BannerProduct;
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './Deal.css';

const Deal = ({deal}) => {
    const {img, name} = deal;
    const [show, setShow] = useState(false);
    const handleMouseOver = () =>{
        setShow(true);
    }
    const handleMouseOut = () =>{
        setShow(false);
    };

    return (
        <Col className="deal-container" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} style={{backgroundImage: `url(${img})`}}>
            {
                show && <div className="deal h-100 w-100 d-flex justify-content-center align-items-center text-white">
                <h3>{name}</h3>
                </div>
            }
        </Col>
    );
};

export default Deal;
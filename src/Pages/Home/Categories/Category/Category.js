import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './Category.css';

const Category = ({category}) => {
    const {title, image} = category;
    const [show, setShow] = useState(false);

    const handleMouseOver = () =>{
        setShow(true);
    };

    const handleMouseLeave = () =>{
        setShow(false);
    }
    return (
      <Col className="deal-container border border-1 rounded category-container" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} style={{backgroundImage: `url(${image})`}}>
      {
          show && <div className="deal h-100 w-100 d-flex justify-content-center align-items-center text-white">
          <h3>{title}</h3>
          </div>
      }
  </Col>
    );
};

export default Category;
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
        <Col>
        <Card onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <div className="service-card rounded" style={{backgroundImage : `linear-gradient(rgba(68, 114, 151, 0.5), rgba(0,0,0,0.9)), url(${image})`}}>
            <Card.Img
              className="service-img"
              height="200px"
              variant="top"
              src={image}
            />
            {
                show && <h5 className="service-title fw-bold text-dark">{title.slice(0, 20)}...</h5>
            }
          </div>
        </Card>
      </Col>
    );
};

export default Category;
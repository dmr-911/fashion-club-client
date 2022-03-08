import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data=>setCategories(data))
    },[]);
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/allProducts');
    };

    return (
        <Container className="my-4">
            <div className="d-flex justify-content-between mb-3">
                <h4><b>Shop by categories</b></h4>
                <button className="btn-general" onClick={handleClick}>View all</button>
            </div>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    categories.map(category =><Category
                    key={category.id}
                    category={category}
                    ></Category>)
                }
            </Row>
        </Container>
    );
};

export default Categories;
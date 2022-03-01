import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Category from '../Category/Category';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data=>setCategories(data))
    },[]);

    return (
        <Container className="my-4">
            <div className="d-flex justify-content-between mb-3">
                <h4><b>Shop by categories</b></h4>
                <button className="btn-general">View all</button>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
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
import React, { useEffect, useState } from 'react';
import './Navigation.css';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    const [item, setItem] = useState({});
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(json=>{
                setItem(json)
                setProducts(json.products)
            })
    },[]);
    useEffect(()=>{
        let newCount = 0;
        for(const product of products){
            newCount = newCount + product.quantity;
        }
        setCount(newCount)
    },[products])
    
    return (
        <Navbar variant="light" expand="lg" className="fixed-top" bg="light">
                <Navbar.Brand as={Link} to="/"><h2>Fashion Club</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mx-auto w-100 my-2 my-lg-0 justify-content-around"
                >
                    
                    <div className="d-flex align-items-center nav-drop">
                    <NavDropdown className="mx-2" title="Men" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-2" title="Women" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Women</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-2" title="Kids" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Kids</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="mx-2" as={Link} to={user.email ? "" : "/login"} title={user.email ? user.displayName : "Login"} className="mx-auto">
                        Beauty
                    </Nav.Link>
                    </div>
                    <div className="d-flex align-items-center nav-drop">

                    <Nav.Link className="mx-2" as={Link} to={user.email ? "" : "/login"} title={user.email ? user.displayName : "Login"} className="mx-auto">
                        <span className="nav-icon nav-account">
                        </span>
                    </Nav.Link>
                    <Nav.Link className="mx-2" as={Link} to="/" className="mx-auto" disabled>
                        <span className="nav-icon nav-wishlist">
                        </span>
                    </Nav.Link>
                    <Nav.Link className="mx-2" as={Link} to="/cart" className="mx-auto">
                        <span className="nav-icon nav-cart">
                            <span className="nav-text">{count}</span>
                        </span>
                    </Nav.Link>
                    {user.email && <button className="btn btn-danger" onClick={logOut}>LogOut</button>}
                    </div>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
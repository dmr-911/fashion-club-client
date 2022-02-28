import React from 'react';
import './Navigation.css';
import { Badge, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const {count, user, logOut} = useAuth();
    console.log(user);
    return (
        <Navbar variant="light" expand="lg" className="fixed-top" bg="light">
            <Container fluid className="d-flex justify-content-between">
                <Navbar.Brand as={Link} to="/">
                    Fashion Club
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/"><h2>eMarket</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ maxHeight: '100px'}}>
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link as={Link} to={user.email ? "" : "/login"} title={user.email ? user.displayName : "Login"} className="mx-auto">
                        <span className="nav-icon nav-account">
                        </span>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/" className="mx-auto">
                        <span className="nav-icon nav-wishlist">
                        </span>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/bag" className="mx-auto">
                        <span className="nav-icon nav-cart">
                            <span className="nav-text">{count <100 ? count : 'NL'}</span>
                        </span>
                    </Nav.Link>
                    {user.email && <button className="btn btn-danger" onClick={logOut}>LogOut</button>}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
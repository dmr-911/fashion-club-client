import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './LogIn.css';
import GoogleButton from 'react-google-button';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
  const { user, googleSignIn, error, login} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const destination = location?.state?.from || '/';

  const [loginDetails, setLoginDetails] = useState({
    name: "",
    password: ""
  });
    const handleOnBlur = (e) =>{
      const field = e.target.name;
      const value = e.target.value;
      const newState = {...loginDetails};
      newState[field] = value;
      setLoginDetails(newState);
    }
    const handleGoogleSignIn = () =>{
      googleSignIn(location, navigate);
    };

    const handleSubmit = (e) =>{
      e.preventDefault();

      login(loginDetails.email, loginDetails.password);
    };

    console.log(loginDetails);
    console.log(user);



    return (
      <Container className="my-5 pt-5">
      <div className="login-form-container border border-1">
          <div className="page-title text-center">
              Login page
          </div>
          <p>Login using social network</p>
          <GoogleButton className="mx-auto mb-4" onClick={handleGoogleSignIn}/>
          <p>Or insert your account information : </p>
          <form  onSubmit={handleSubmit} className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="name"
               className="green-form-email green-form-control" 
               type="text" 
               placeholder="Enter user name" 
               onBlur={handleOnBlur}
               />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control 
              name="password"
              className="green-form-password green-form-control" 
              type="password" 
              placeholder="Password" 
              onBlur={handleOnBlur}
              />
          </Form.Group>
          <Button className="login-register-btn" variant="primary" type="submit">
              Login
          </Button>
          </form>
                {error && <small className="text-danger">{error}</small>}
              <p className="fw-bold">
               New to our site ? Please create an account{" "}
               <Link to="/signUp"><i className="fas fa-sign-in">Sign up</i></Link>
             </p>
      </div>
  </Container>
    );
};

export default LogIn;
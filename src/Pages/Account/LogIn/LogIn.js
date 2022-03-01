import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './LogIn.css';
import GoogleButton from 'react-google-button';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
  const {user, login, setError, googleSignIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location?.state?.from || '/';

  const [loginDetails, setLoginDetails] = useState({
    email: "",
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
    //   googleSignIn(location, navigate);
      googleSignIn()
      .then((result) => {
        navigate(destination);
    }).catch((error) => {
      setError(error.message);
    });
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      login(loginDetails.email, loginDetails.password)
      .then(user =>{
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message)
      });
    }



    return (
      <>
            <Container className="mt-5 pt-5">
        
        <div className="login-form-container border border-1">
            <div className="page-title text-center">
                Login page
            </div>
            <b className="d-block my-2">Insert your account information : </b>
            <form  onSubmit={handleSubmit} className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                name="email"
                 className="green-form-email green-form-control" 
                 type="email" 
                 placeholder="Enter email" 
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
            <b className="d-block my-2">Or Login using social network</b>
            <GoogleButton className="mx-auto mb-4" onClick={handleGoogleSignIn}/>
            </form>
                  {/* {error && <small className="text-danger">{error}</small>} */}
                <p className="fw-bold">
                 New to our site ? Please create an account{" "}
                 <Link to="/signUp">Signup</Link>
               </p>
        </div>
    </Container></>
    );
};

export default LogIn;
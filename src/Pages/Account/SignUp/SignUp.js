import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import GoogleButton from 'react-google-button';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
  const {isLoading, error, registerUser, setError} = useAuth();
  setError('');
  
  const [registerData, setRegisterData] = useState({});
  const navigation = useNavigate();
    
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = {...registerData};
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    };

    const handleRegisterSubmit=(e)=>{
      e.preventDefault();
      if(registerData.password !== registerData.password2){
        return
      }
      registerUser(registerData.email, registerData.password, registerData.name, navigation)
    };

    return (
    <Container className="my-5 pt-5">
    <div className="login-form-container border border-1">
    <div className="page-title text-center">
        Create an account
    </div>
    <p>Give the information's</p>
      {
        !isLoading &&     <form onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            className="border border-1 border-dark"
            name="name"
            onBlur={handleOnBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="border border-1 border-dark"
            name="email"
            onBlur={handleOnBlur}
          />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className="border border-1 border-dark"
            name="password"
            onBlur={handleOnBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Control
            type="password"
            placeholder="Re-type Password"
            className="border border-1 border-dark"
            name="password2"
            onBlur={handleOnBlur}
          />
        </Form.Group>
        <Button className="login-register-btn" variant="primary" type="submit">
            Register
        </Button>
        </form>
      }
    {error && <small className="text-danger">{error}</small>}
              <p className="fw-bold">
               Already have an account ? Please{" "}
               <Link to="/login"><i className="fas fa-sign-in">Login</i></Link>
             </p>
    <p className="mt-3"><b>Join us using social network</b></p>
    <GoogleButton className="mx-auto mb-4" />
    </div>
    </Container>
    );
};

export default SignUp;
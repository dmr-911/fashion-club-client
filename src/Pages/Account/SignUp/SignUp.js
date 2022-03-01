import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css';
import GoogleButton from 'react-google-button';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
  const {signUp, googleSignIn, setError} = useAuth();
  setError('');
  
  const [registerData, setRegisterData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location?.state?.from || '/';
    
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
      signUp(registerData.email, registerData.password, registerData.name, navigate)
    };

    const handleGoogleSignIn = () =>{
      googleSignIn()
      .then((result) => {
        navigate(destination);
    }).catch((error) => {
      setError(error.message);
    });
    }

    return (
      <Container className="mt-5 pt-5 mb-2">
      <div className="login-form-container border border-1">
      <div className="page-title text-center">
          Create an account
      </div>
      <b className="d-block mb-2">Give the information's</b>
        {
          // !isLoading &&
               <form onSubmit={handleRegisterSubmit}>
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
              Signup
          </Button>
          </form>
        }
      {/* {error && <small className="text-danger">{error}</small>} */}
                <p className="fw-bold my-2">
                 Already have an account ? Please{" "}
                 <Link to="/login">Login</Link>
               </p>
      <p className="mt-3"><b>Join us using social network</b></p>
      <GoogleButton onClick={handleGoogleSignIn} className="mx-auto" />
      </div>
      </Container>
    );
};

export default SignUp;
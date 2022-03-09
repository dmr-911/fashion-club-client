import React from 'react';
import { Container } from 'react-bootstrap';
import './Notify.css';

const Notify = () => {
    return (
        <Container className="mid-banner notify-banner mb-5">
            <h5 className="text-white">Get access to exclusives deals</h5>
            <form>
                <input className="notify-input" type="text" placeholder="Enter your email or phone number" /><button className="btn-general">Notify Me</button>
            </form>
        </Container>
    );
};

export default Notify;
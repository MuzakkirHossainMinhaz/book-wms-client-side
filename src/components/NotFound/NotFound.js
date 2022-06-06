import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className='my-5'>
            <h1 className='text-danger fs-1 fw-bold'>404</h1>
            <img style={{width: "400px"}} src="https://i.ibb.co/4dQVkB9/empty.gif" alt="empty" />
            <h1 className='text-warning fs-2 fw-bold'>Page not found..!</h1>
        </Container>
    );
};

export default NotFound;
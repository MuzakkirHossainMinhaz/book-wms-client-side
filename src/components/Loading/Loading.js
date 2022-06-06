import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;
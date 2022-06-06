import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const navigate = useNavigate();
    const navigateToInventory = () => {
        navigate('/inventories');
    }
    return (
        <div className='my-2'>
            <Button onClick={navigateToInventory} variant='success' className='fs-5 fw-bold py-2 px-5 rounded-3'>Manage Inventories</Button>
        </div>
    );
};

export default ManageInventories;
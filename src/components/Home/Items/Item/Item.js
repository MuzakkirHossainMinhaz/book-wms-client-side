import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {_id, img, name, author, description, price, quantity, supplierName} = item;
    let short_desc = description.slice(0, 80) + '...';
    
    const navigate = useNavigate();

    const navigateToManageInventory = _id => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-start d-flex justify-content-between'>
                        <h4>{name}</h4>
                        <h4>${price}</h4>
                    </Card.Title>
                    <small className='text-start d-block'><span className='bg-success py-1 px-2 text-white rounded'>Author :</span> <em>{author}</em></small>
                    <p className='text-start mt-3'>
                        {short_desc}
                    </p>
                    <div className='d-flex justify-content-between'>
                        <small>Supplier name : {supplierName}</small>
                        <small><span className='bg-warning fw-bold px-2 rounded py-1'>In Stock : {quantity}</span></small>
                    </div>
                </Card.Body>
                <Button onClick={() => navigateToManageInventory(_id)} variant="info text-black-50 fw-bold">Manage</Button>
            </Card>
        </Col>
    );
};

export default Item;
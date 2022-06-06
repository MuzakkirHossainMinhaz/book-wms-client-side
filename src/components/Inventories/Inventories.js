import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Inventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-cove-25322.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    let serial = 0;
    const navigate = useNavigate();
    const navigateToAddBook = () => {
        navigate('/add-book');
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://mysterious-cove-25322.herokuapp.com/book/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            });
        }
    }

    return (
        <Container className='my-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='fs-2 fw-bold text-center mb-4 text-success'>Manage Inventory Items</h1>
                <Button variant='success' onClick={navigateToAddBook}>Add New Book</Button>
            </div>
            <Table striped borderless hover>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Price ($)</th>
                        <th>In Stock</th>
                        <th>Sold</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) =>
                            <tr  key={item._id}>
                                <td>{++serial}</td>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.sold}</td>
                                <td><Button className='bg-transparent border-0' onClick={() => handleDelete(item._id)}>&#10060;</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Inventories;
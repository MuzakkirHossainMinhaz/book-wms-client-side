import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Item from './Item/Item';

const Items = () => {
    let books = [];
    let count = 0;
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-cove-25322.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);


    // select six items for home page
    items.map(item => {
        if (count < 6) {
            books.push(item);
            count++;
        }
    });

    return (
        <Container className='my-5'>
            <h1 className='fs-1 fw-bold text-center mb-4 text-success'>Manage Inventory Items</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    books.map((item) => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </Row>
        </Container>
    );
};

export default Items;
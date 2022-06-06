import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

// This page designed for find best seller book 
const Category = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-cove-25322.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    items.sort((a, b) => b.sold - a.sold);

    
    let books = [];
    let count = 0;
    items.map(item => {
        if (count < 3) {
            books.push(item);
            count++;
        }
    });

    return (
        <Container className='my-5'>
            <h1 className='fs-1 fw-bold text-center mb-4 text-success'>Best Seller Book</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    books.map(item =>
                        <Col>
                            <Card className="mb-2 bg-info text-white rounded-3">
                                <Card.Header>Total Sold : <span className='fw-bold'>{item.sold}</span></Card.Header>
                                <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Category;
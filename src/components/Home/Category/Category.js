import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Category = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-cove-25322.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    // find distict function
    const distict = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    let arr = [];
    items.map(item => arr.push(item.author));

    // find distict author
    arr = arr.filter(distict);

    return (
        <Container className='my-5'>
            <h1 className='fs-1 fw-bold text-center mb-4 text-success'>Author List</h1>
            <Row xs={1} md={3} className="g-3">
                {
                    arr.map(item =>
                        <Col>
                            <Card className="mb-2 bg-primary text-white rounded-3">
                                <Card.Header>{item}</Card.Header>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Category;
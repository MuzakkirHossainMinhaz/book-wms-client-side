import React, { useEffect, useState } from 'react';
import {  Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ManageInventories from '../../ManageInventories/ManageInventories';
import { useForm } from "react-hook-form";

const ItemDetails = () => {
    const { _id } = useParams();
    const [items, setItems] = useState([]);

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const url = `https://mysterious-cove-25322.herokuapp.com/book/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookList(data));
    }, []);

    let { img, name, author, description, price, quantity, supplierName, sold } = bookList;

    let sell = parseInt(sold);
    let stock = parseInt(quantity);
    const { register, handleSubmit } = useForm();

    // add (restock) item 
    const onSubmit = data => {
        if (data.quantity <= 0) {
            data.quantity = 0;
        }
        data.sold = sell;
        stock += parseInt(data.quantity);
        data.quantity = stock.toString();
        const url = `https://mysterious-cove-25322.herokuapp.com/book/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Added Successfully.');
                window.location.reload();
            });
    }

    // function for delivered button
    const onDelivered = data => {
        stock -= 1;
        sell += 1;
        data.quantity = stock.toString();
        data.sold = sell.toString();
        const url = `https://mysterious-cove-25322.herokuapp.com/book/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Delivered');
                window.location.reload();
            });
    }

    return (
        <Container>
            <div className='my-5'>
                <h1 className='text-center fs-1 fw-5 my-5 text-info mb-1'>{name}</h1>
                <p><small className='bg-success py-1 px-2 text-white rounded'><b>Author :</b> <em>{author}</em></small></p>
                <img className='d-inline-block' src={img} alt="book cover page" />

                <div className='my-4 text-start'>
                    <h5>Short Description:</h5>
                    <p style={{ textAlign: "justify" }}>{description}</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <h4>Price: <span className='text-success fw-bold'>${price}</span></h4>
                    <p><small className='bg-info py-1 px-2 text-white rounded'><b>Supplier name :</b> <em>{supplierName}</em></small></p>
                    <h4><span className='px-2 rounded py-1'>In Stock : <span className='text-danger fw-bold'>{quantity}</span></span></h4>
                    <h4><span className='px-2 rounded py-1'>Total Sold : <span className='text-danger fw-bold'>{sold}</span></span></h4>
                </div>

                <br />

                <div className='d-flex justify-content-between align-items-center my-4 border rounded-3 p-3'>
                    <form className='d-flex flex-column my-5' onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='text-start'>Restock:</h5>
                        <input className='mb-2 p-2 border rounded-2' placeholder='Restock Item' type="number" {...register("quantity")} />
                        <input className='bg-success text-white border-0 p-2 rounded-2 fw-bold' value='ADD' type="submit" />
                    </form>

                    <div className='d-flex justify-content-end flex-column'>
                        <form className='d-flex flex-column my-1' onSubmit={handleSubmit(onDelivered)}>
                            <input className='bg-primary fs-5 text-white border-0 p-2 rounded-2 fw-bold' value='Delivered' type="submit" />
                        </form>
                        <ManageInventories></ManageInventories>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default ItemDetails;
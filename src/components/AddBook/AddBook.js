import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const AddBook = () => {
    const [
        user,
        loading,
        error,
    ] = useAuthState(auth);

    // added book on the server
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://mysterious-cove-25322.herokuapp.com/books`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result));
    }

    // loading function
    if (loading) {
        return <Loading></Loading>
    }

    const handleAddBook = () => {
        alert("Successfully Added.")
        window.location.reload();
    }

    return (
        <Container className='w-50'>
            <h1 className='fs-2 mt-5 text-success fw-bold'>Add New Book</h1>

            {/* add new book form (use react hook form) */}
            <form className='d-flex flex-column mt-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
                <h6 className='text-start'>Image URL:</h6>
                <input className='mb-2 p-2 border rounded-2' placeholder='Image URL' {...register("image", {required: true})} />
                <h6 className='text-start'>Book Name:</h6>
                <input className='mb-2 p-2 border rounded-2' placeholder='Book Name' {...register("name", { required: true})} />
                <h6 className='text-start'>Author Name:</h6>
                <input className='mb-2 p-2 border rounded-2' placeholder='Book Author Name' {...register("author", {required: true})} />
                <h6 className='text-start'>Price:</h6>
                <input className='mb-2 p-2 border rounded-2' placeholder='Book Price' type="number" {...register("price", {required: true})} />
                <h6 className='text-start'>In Stock:</h6>
                <input className='mb-2 p-2 border rounded-2' placeholder='No. of Book in Stock' type="number" {...register("quantity", {required: true})} />
                <h6 className='text-start'>Supplier Email:</h6>
                <input className='mb-2 p-2 border rounded-2' placeholder='Supplier Name' value={user.email} type="text" {...register("supplierName", {required: true})} />
                <h6 className='text-start'>Sold Book Amount:</h6>
                <input className='mb-2 p-2 border rounded-2' value={0} placeholder='No. of Sold Book (by default type 0)' type="number" {...register("sold", {required: true})} />
                <h6 className='text-start'>Short Description:</h6>
                <textarea className='mb-2 p-2 border rounded-2' placeholder='Short Description' {...register("description", {required: true})} />
                {/* button  */}
                <input className='bg-success text-white border-0 p-2 rounded-2 fw-bold' onClick={handleAddBook} value='ADD BOOK' type="submit" />
            </form>
        </Container>
    );
};

export default AddBook;
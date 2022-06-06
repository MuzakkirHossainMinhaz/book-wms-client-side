import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../firebase.init';
import LoginSocial from '../LoginSocial/LoginSocial'

const Signin = () => {

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let email, password;
    const handleSubmit = (event) => {
        event.preventDefault();
        email = emailRef.current.value;
        password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    if (error) {
        alert('Please enter correct email and password');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigateResister = () => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
    }

    return (
        <div className='text-start my-5 mx-auto w-25 border rounded-3 shadow p-5'>
            <Form className='mx-auto' onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Email</Form.Label>
                        <Form.Control ref={emailRef} style={{ fontSize: "17px" }} type="email" placeholder="Email" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Password</Form.Label>
                        <Form.Control ref={passwordRef} style={{ fontSize: "17px" }} type="password" placeholder="Password" required />

                    </Form.Group>
                </Row>
                <Button style={{ fontSize: "16px" }} type="submit" className='w-100 btn-success my-3'>SIGNIN</Button>
            </Form>

            <div>
                Forgot password?
                <button
                    className='btn btn-link bg-none text-decoration-none'
                    onClick={resetPassword}
                >
                    Reset password
                </button>
            </div>

            {/* Social Login */}
            <LoginSocial></LoginSocial>

            {/* show toast */}
            <ToastContainer />

            <div>
                <p className='text-center mt-3'>Don't have an account? <span className='text-primary' style={{ cursor: "pointer" }} onClick={navigateResister}>Please register</span></p>
            </div>
        </div>
    );
};

export default Signin;
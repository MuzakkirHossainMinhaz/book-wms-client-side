import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../firebase.init';

// Implement Google Social Login/Signin method

const SocialLink = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <hr className='w-50' />
                <p className='mb-2'>or</p>
                <hr className='w-50' />
            </div>

            <ToastContainer />

            <p>{errorElement}</p>

            <div className='d-flex justify-content-center align-items-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className="border-0 rounded-3 py-1 px-5">
                    <img className='mx-2' src="..."style={{ width: "20px" }} alt="" />
                    Google Sign In
                </button>
            </div>

        </div>
    );
};

export default SocialLink;
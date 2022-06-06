import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import LoginSocial from '../LoginSocial/LoginSocial';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { auth } from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/home');
    }

    return (
        <div className='text-start mx-auto my-5 w-25 border rounded-3 shadow p-5'>
            <Form className='mx-auto' onSubmit={handleRegister}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Full Name</Form.Label>
                        <Form.Control
                            style={{ fontSize: "17px" }}
                            name="fullName"
                            required
                            type="text"
                            placeholder="Full Name"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Email</Form.Label>
                        <Form.Control style={{ fontSize: "17px" }} type="email" name="email" placeholder="Email" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label className='fs-5'>Password</Form.Label>
                        <Form.Control style={{ fontSize: "17px" }} type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                </Row>
                <Button style={{ fontSize: "16px" }} type="submit" className='w-100 my-3 btn-success'>REGISTER</Button>
            </Form>

            {/* Social Login */}
            <LoginSocial></LoginSocial>

            
            <div>
                <p className='text-center mt-3'>Already have an account? <Link to='/signin' className='text-primary text-decoration-none' style={{ cursor: "pointer" }}>Signin</Link></p>
            </div>
        </div>
    );
};

export default Register;
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleManageItems = () => {
        navigate('/inventories');
    }
    
    const handleAddBook = () => {
        navigate('/add-book');
    }
    
    const handleMyItems = () => {
        navigate('/my-items');
    }

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fs-4 fw-bold'>Book Store WMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>

                    {
                        // user logged in or not
                        user ?
                            <div>
                                <Button className="border-0 bg-transparent" onClick={handleManageItems}>Manage Items</Button>
                                <Button className="border-0 bg-transparent" onClick={handleAddBook}>Add Book</Button>
                                <Button className="border-0 bg-transparent" onClick={handleMyItems}>My items</Button>
                                <Button className="border-0 bg-transparent" onClick={handleSignOut}>SignOut</Button>
                            </div>
                            :
                            <Nav>
                                <Nav.Link as={Link} to="/signin">Sign in</Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </Nav>
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
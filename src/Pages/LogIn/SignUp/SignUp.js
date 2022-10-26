import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e));
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4"></Col>
                    <Col lg='4'>
                        <h2 className='text-center fw-bolder'>Create A Free <br /><span className='text-danger'>Account</span> </h2>
                        <div className='shadow p-3 mt-3'>
                            <Form onSubmit={handleSignUp}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-semibold'>Your Name<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control className='bg-light py-2' type="text" name="name" placeholder="Your name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-semibold'>Photo URL</Form.Label>
                                    <Form.Control className='bg-light py-2' type="text" name="photoURL" placeholder="Photo URL" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='fw-semibold'>Email Address<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control className='bg-light py-2' type="email" name="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='fw-semibold d-flex align-items-center justify-content-between'><span>Password</span><Button className='text-dark' onClick={togglePassword} variant="link"><FaEye></FaEye></Button></Form.Label>
                                    <Form.Control className='bg-light py-2' type={passwordShown ? "text" : "password"} name="password" placeholder="Password" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox" onClick={handleAccepted}
                                        label={<>Accept <Link to='/terms'>Terms & Condition...</Link></>} required />
                                </Form.Group>

                                <div className='d-flex align-items-center'>
                                    <Button className='mx-auto block text-center px-5' variant="danger" type="submit" disabled={!accepted}>
                                        Sign UP
                                    </Button>
                                </div>
                                <Form.Text className="text-danger me-2 mt-2">
                                    {error}
                                </Form.Text>
                                <div className='d-flex align-items-center text-center justify-content-center'>
                                    <span>Already have an account?</span> <span><Link className='text-decoration-none ms-2' to='/login'>Login</Link></span>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;
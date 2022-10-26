import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState();
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordShown, setPasswordShown] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.log(e))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.log(e))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='4'></Col>
                    <Col lg='4'>
                        <h2 className='text-center fw-bolder'>Log In To <br />
                            get <span className='text-danger'>Premium Courses.</span></h2>

                        <div className='shadow p-3 mt-3'>
                            <div className='mt-1 mx-auto row'>
                                <Button onClick={handleGoogleSignIn} variant="danger" className=''><FaGoogle className='mb-1'></FaGoogle> Log in with Google</Button>
                                <Button onClick={handleGithubSignIn} variant="danger" className='mt-2'> <FaGithub className='mb-1'></FaGithub> Log in with Github</Button>
                                <small className='text-center text-secondary my-3'>Or, sign in with your email</small>
                                <hr className='w-75 mx-auto' />
                            </div>

                            <div className='mt-3 mx-auto'>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fw-semibold'>Email Address</Form.Label>
                                        <Form.Control className='bg-light py-2' name="email" type="email" placeholder="Enter email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='fw-semibold d-flex align-items-center justify-content-between'><span>Password</span><Button className='text-dark' onClick={togglePassword} variant="link"><FaEye></FaEye></Button></Form.Label>
                                        <Form.Control className='bg-light py-2' type={passwordShown ? "text" : "password"} name="password" placeholder="Password" required />
                                    </Form.Group>

                                    <div className='d-flex align-items-center'>
                                        <Button className='mx-auto block text-center px-5' variant="danger" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                    <Form.Text className="text-danger ms-2">
                                        {error}
                                    </Form.Text>
                                </Form>
                            </div>
                            <div className='d-flex align-items-center text-center justify-content-center'>
                                <span>New here?</span> <span><Link className='text-decoration-none ms-2' to='/signup'>Sign Up</Link></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;
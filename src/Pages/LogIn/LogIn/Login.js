import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState();
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
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

    return (
        <div>
            <h2>Login</h2>
            <div className='mt-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="danger" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger ms-2">
                        {error}
                    </Form.Text>
                </Form>
            </div>
            <ButtonGroup className='mt-4 d-flex flex-column flex-lg-row'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className=''><FaGoogle className='mb-1'></FaGoogle> Log in with Google</Button>
                <Button variant="outline-dark" className=''> <FaGithub className='mb-1'></FaGithub> Log in with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;
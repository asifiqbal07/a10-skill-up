import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

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

    return (
        <div>
            <h2>SignUp</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox" onClick={handleAccepted}
                        label={<>Accept <Link to='/terms'>Terms & Condition...</Link></>} required />
                </Form.Group>

                <Button variant="danger" type="submit" disabled={!accepted}>
                    Sign UP
                </Button>
                <Form.Text className="text-danger me-2">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default SignUp;
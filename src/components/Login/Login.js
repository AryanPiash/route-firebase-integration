import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth } from 'firebase/auth';
import app from '../../firebase_init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2 className='text-center my-4'>Please Login.</h2>
            
            <div className='w-50 mx-auto border rounded p-4'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='me-4 px-5' variant="success" type="submit">
                        Log In
                    </Button>
                    <Button onClick={() => signInWithGoogle()} variant="info" type="button">
                        Sign In with Google
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
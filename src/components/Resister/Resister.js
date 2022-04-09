import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Resister = () => {
    return (
        <div>
            <h2 className='text-center my-4'>Resister</h2>
            <div className='w-50 mx-auto border rounded p-4'>
                <Form>

                    <Form.Group className="mb-3" controlId="validationCustom01">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control required type="text" placeholder="Name"/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

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
                        <Form.Check type="checkbox" label="Already Resistered?" />
                    </Form.Group>
                    <Button className='me-4 px-5' variant="success" type="submit">
                        Resister
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Resister;
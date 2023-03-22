import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Alert } from 'react-bootstrap'
import axios from 'axios'
import './SignUp.css';

export default function SignUp() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === rePassword) {
      const data = { firstName, lastName, emailAddress, contactNumber, password };
      // console.log(data);
      axios.post('http://localhost:5000/users/register', data)
        .then(response => {
          if (response.data.status === 200) {
            setIsSuccess(true);
            setMessage(response.data.success);

            setFirstName('');
            setLastName('');
            setEmailAddress('');
            setContactNumber('');
            setPassword('');
            setRePassword('');

            // console.log(isSuccess);
            // console.log(message);
          }
        })
        .catch(err => { console.log(err); });
    }
  }

  return (
    <div>
      <h1 className="text-center">Sign Up</h1>
      <Container className='mt-5'>
        {
          (isSuccess) &&
          (<Alert className='text-center' key='success' variant='success'>{message}</Alert>)
        }
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Row className="row">
              <Col md={6}>
                <Form.Control type='text' value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='Enter first name' />
              </Col>
              <Col md={6}>
                <Form.Control type='text' value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Enter last name' />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row className="row">
              <Col md={6}>
                <Form.Control type='email' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} placeholder='Enter email address' />
              </Col>
              <Col md={6}>
                <Form.Control type='tel' value={contactNumber} onChange={e => setContactNumber(e.target.value)} placeholder='Enter contact number' />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row className="row">
              <Col md={6}>
                <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter password' />
              </Col>
              <Col md={6}>
                <Form.Control type='password' value={rePassword} onChange={e => setRePassword(e.target.value)} placeholder='Re-enter password' />
              </Col>
            </Row>
          </Form.Group>

          <div className="text-center">
            <Button className='mt-3' variant="primary" type="submit">Sign Up</Button>
            <p className='mt-2'>Already have an account? <Link to="/">Login</Link></p>
          </div>
        </Form>
      </Container>
    </div>
  )
}
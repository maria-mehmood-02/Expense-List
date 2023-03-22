import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Login.css';
import axios from 'axios'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = (email, password);

    axios.post('http://localhost:5000/users/login', data)
      .then(response => {
        if (response.data.status === 200 && response.data.success === 1) {
          // console.log(response.data.success);
          navigate('/emp');
        }
      })
      .catch(err => { console.log(err); });
  }

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <Container className='mt-5'>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="center">
              <Col md={8}>
                <Form.Control type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter email address' />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="center">
              <Col md={8}>
                <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter password' />
              </Col>
            </Form.Group>
          </Row>
          <div className="text-center">
            <Button className='mt-3' variant="primary" type="submit">Login</Button>
            <p className='mt-2'>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
          </div>
        </Form>
      </Container>
    </div>
  )
}

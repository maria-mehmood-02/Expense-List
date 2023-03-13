import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './SignUp.css';

export default function SignUp() {
  return (
    <div>
      <h1 className="text-center">Sign Up</h1>
      <Container className='mt-5'>
        <Form>
          <Form.Group>
            <Row className="row">
              <Col md={6}>
                <Form.Control type='text' placeholder='Enter first name' />
              </Col>
              <Col md={6}>
                <Form.Control type='text' placeholder='Enter last name' />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row className="row">
              <Col md={6}>
                <Form.Control type='email' placeholder='Enter email address' />
              </Col>
              <Col md={6}>
                <Form.Control type='tel' placeholder='Enter contact number' />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row className="row">
              <Col md={6}>
                <Form.Control type='password' placeholder='Enter password' />
              </Col>
              <Col md={6}>
                <Form.Control type='password' placeholder='Re-enter password' />
              </Col>
            </Row>
          </Form.Group>

        </Form>
        <div className="text-center">
          <Button className='mt-3' variant="primary" type="submit">Sign Up</Button>
          <p className='mt-2'>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </Container>
    </div>
  )
}
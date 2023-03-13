import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Login.css';

export default function Login() {
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <Container className='mt-5'>
        <Form className="row-center">
          <Row>
            <Form.Group>
              <Col md={8}>
                <Form.Control type='email' placeholder='Enter email address' />
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Col md={8}>
                <Form.Control type='password' placeholder='Enter password' />
              </Col>
            </Form.Group>
          </Row>
        </Form>
        <div className="text-center">
          {/* <Col md={1}> */}
            <Button className='mt-3' variant="primary" type="submit">Login</Button>
          {/* </Col> */}
          {/* <Col md={4}> */}
            <p className='mt-2'>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
          {/* </Col> */}
        </div>
      </Container>
    </div>
  )
}

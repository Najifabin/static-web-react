import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center'>
        <div style={{ width: '500px' }} className='rounded p-5'>
          <h5 style={{ fontSize: '40px', color: '#dfe4fb' }} className=' text-center p-4'>Create an account</h5>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ color: '#dfe4fb' }}>Name <span className='text-danger'>*</span></Form.Label>
              <Form.Control style={{ backgroundColor: '#181b45' }} type="email" placeholder="Your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label style={{ color: '#dfe4fb' }}>Company Name <span className='text-danger'>*</span></Form.Label>
              <Form.Control style={{ backgroundColor: '#181b45' }} type="password" placeholder="Your company name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ color: '#dfe4fb' }}>Email <span className='text-danger'>*</span></Form.Label>
              <Form.Control style={{ backgroundColor: '#181b45' }} type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ color: '#dfe4fb' }}>Password <span className='text-danger'>*</span></Form.Label>
              <Form.Control style={{ backgroundColor: '#181b45' }} type="email" placeholder="Password(at least 10 characters)" />
            </Form.Group>
          </Form>
          <Button className='btn btn-info w-100 mt-3 '>
            Register
          </Button>
          <p className='text-center mt-3'>or</p>
          <Button variant='dark' className='btn w-100 '>
            Sign in with Google
          </Button>
          <p className='text-center mt-2'>Already have an account? <Link style={{textDecoration:'none'}} to={'/login'}>Sign in</Link></p>
        </div>


      </div></>
  )
}

export default Register
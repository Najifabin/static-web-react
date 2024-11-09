import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center'>
        <div style={{ width: '500px' }} className='rounded p-5'>
          <h5 style={{ fontSize: '40px', color: '#dfe4fb' }} className=' text-center p-4'>Welcome back</h5>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ color: '#dfe4fb' }}>Email</Form.Label>
              <Form.Control style={{ backgroundColor: '#181b45' }} type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <div className='d-flex justify-content-between'>
                <Form.Label style={{ color: '#dfe4fb' }}>Password</Form.Label>
                <div><Link to={'/Reset'} style={{ textDecoration: 'none' }} >Forgot?</Link></div>
              </div>
              <Form.Control style={{ backgroundColor: '#181b45' }} type="password" placeholder="Your Password" />
            </Form.Group>
          </Form>
          <Button className='btn btn-info w-100 mt-3 '>
            Sign in
          </Button>
          <p className='text-center mt-3'>or</p>
          <Button variant='dark' className='btn w-100 '>
            Sign in with Google
          </Button>
          <p className='text-center mt-2'>Don't you have an account? <Link style={{textDecoration:'none'}} to={'/Register'}>Sign Up</Link></p>
        </div>


      </div>
    </>
  )
}

export default Login
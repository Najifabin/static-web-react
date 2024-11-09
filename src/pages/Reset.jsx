import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Reset = () => {
  return (
    <>
    <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center'>
        <div style={{ width: '500px' }} className='rounded p-5'>
          <h3 style={{ fontSize: '30px', color: '#dfe4fb' }} className=' text-center p-4'>Reset your password</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ color: '#dfe4fb' }}>Email</Form.Label>
              <Form.Control style={{ backgroundColor: '#181b45' }} type="email" placeholder="Your email" />
            </Form.Group>
          </Form>
          <Button className='btn btn-info w-100 mt-3 '>
            Reset Password
          </Button>         
        </div>


      </div>
    </>
  )
}

export default Reset
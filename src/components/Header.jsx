import React from 'react'
import { Navbar, Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Header = () => {
  return (
  <div className='container mt-4 d-flex justify-content-center align-items-center'>
      <Navbar style={{zIndex:1,backgroundColor:'#0f1725'}} className="w-100  justify-content-between rounded-5">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Form inline>
          <Row>
            <Col xs="auto">
            <Link to={'/login'}><Button variant="dark outline-light" type="button">Sign In</Button></Link>
            </Col>
            <Col xs="auto">
              <Link to={'/Register'}><Button type="button" className='btn btn-info'>Register</Button></Link>
            </Col>
          </Row>
        </Form>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header
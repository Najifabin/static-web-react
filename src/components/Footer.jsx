import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className="d-flex justify-content-around">
        {/* links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link> 
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Register</Link> 
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Sign in</Link> 
        </div>
        <div className="d-flex flex-column">
          <h5>Company</h5>
          <a style={{textDecoration:'none',color:'white'}} href="#"target='_blank'>About us</a>
          <a style={{textDecoration:'none',color:'white'}} href="#" target='_blank'>Blog</a>
          <a style={{textDecoration:'none',color:'white'}} href="#" target='_blank'>Careers</a>
          <a style={{textDecoration:'none',color:'white'}} href="#" target='_blank'>Finantial statements</a>

        </div>
        {/* guides */}
        <div className="d-flex flex-column">
          <h5>Resources</h5>
          <a style={{textDecoration:'none',color:'white'}} href="#"target='_blank'>Community</a>
          <a style={{textDecoration:'none',color:'white'}} href="#" target='_blank'>Terms of service</a>
          <a style={{textDecoration:'none',color:'white'}} href="#" target='_blank'>Report a vulnerability</a>
        </div>
        {/* contact */}
        <div className="d-flex flex-column">
          <img className='img-fluid' style={{width:'30px',height:'30px'}} src={logo} alt="" />
          <p className='mt-4'>Code licensed ZERO, docs CC BY 3.0.</p>
          <div className="d-flex justify-content-around mt-1">
            <a href="" style={{textDecoration:'none',color:'#5155c7'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{textDecoration:'none',color:'#5155c7'}} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{textDecoration:'none',color:'#5155c7'}} target='_blank'><i className='fa-brands fa-github'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; July 2024 Batch, Static Website. Built with React</p>
    </div>
  )
}

export default Footer
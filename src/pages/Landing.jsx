import React from 'react'
import { useState } from 'react'
import videoImg from '../assets/videoImg.webp'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import feature from '../assets/features.webp'
import Footer from '../components/Footer'
import video from '../assets/video.mp4'
import { Modal } from 'react-bootstrap'

const Landing = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
      <>
      <div style={{ paddingTop: '100px' }} className='container align-items-center '>
        <h5 style={{ fontSize: '50px', color: '#dfe4fb' }} className=' text-center'>AI-driven tools for product teams</h5>
        <p style={{ color: '#575d82' }} className='text-center fs-5 p-3'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
        <div className='d-flex align-items-center justify-content-center'>
          <button type='button' className='btn btn-info me-3'>Start Building</button>
          <button type='button' className='btn btn-dark'>Schedule Demo</button>
        </div>
        <div className='position-relative'>
          <img className='img-fluid m-2 p-5 ' src={videoImg} alt="" />
          <div className='position-absolute top-50 start-50 translate-middle'><button onClick={handleShow} className='btn btn-dark rounded-5  '>Watch Demo</button></div>
        </div>
        <h3 style={{ fontSize: '50px', color: '#dfe4fb' }} className=' text-center'>Map your product journey</h3>
        <p style={{ color: '#575d82' }} className='text-center fs-5 p-3'>Simple and elegant interface to start collaborating with your team in minutes. It seamlessly integrates with your code and your favorite programming languages.</p>
        <div className='row'>
          <div style={{ backgroundColor: '#030712' }} className='col-lg-4 rounded border p-3 mt-2'>
            <img className='img-fluid' src={img1} alt="" />
            <br />
            <button type='button' className='btn btn-info btn-sm rounded-5 mt-3'>Built-in Tools</button>
            <p style={{ color: '#575d82' }} className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio at officia nemo laboriosam tenetur.</p>
          </div>

          <div style={{ backgroundColor: '#030712' }} className="col-lg-4 rounded border p-3 mt-2">
            <img className='img-fluid' src={img2} alt="" />
            <br />
            <button type='button' className='btn btn-info btn-sm rounded-5 mt-3'>Scale Instantly</button>
            <p style={{ color: '#575d82' }} className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio at officia nemo laboriosam tenetur.</p>
          </div>

          <div style={{ backgroundColor: '#030712' }} className="col-lg-4 rounded border p-3 mt-2 ">
            <img className='img-fluid' src={img3} alt="" />
            <br />
            <button type='button' className='btn btn-info btn-sm rounded-5 mt-3'>Tailored Flows</button>
            <p style={{ color: '#575d82' }} className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio at officia nemo laboriosam tenetur.</p>
          </div>


        </div>
        <hr />
        <h3 style={{ fontSize: '50px', color: '#dfe4fb' }} className=' text-center mt-5'>Built for modern product teams</h3>
        <p style={{ color: '#575d82' }} className='text-center fs-5 p-3'>Open AI reads and understands your files, and with nothing more than a single line of feedback, so you can go further than the speed of thought.</p>
        <img className='img-fluid' src={feature} alt="" />
        <hr />
        <Footer />
      </div>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="397" src={video} allowFullScreen  ></iframe>
        </Modal.Body>
        </Modal>
      </>
      )
}

      export default Landing
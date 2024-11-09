import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Reset from './pages/Reset'
function App() {
  

  return (
    <>
      
        <div style={{height:'100vh'}} className='maindiv w-100'>
          <Header/>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset' element={<Reset />} />
          </Routes>
        </div>
        
      
    </>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/homeImg .png'


const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'style={{minHeight:"100vh"}}>
        <h2 className="text-center mb-3">Task Management App</h2>
        <img src={home} width={"450px"} alt="" />
        <Link to={'/login'} className='btn mt-2 btn-success' >Get Started</Link>
    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'style={{minHeight:"100vh"}}>
        <h2 className="text-center mb-5">Task Management App</h2>
        <img src="https://media.licdn.com/dms/image/v2/D4D12AQEn7iaT75cWSw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1662465946904?e=2147483647&v=beta&t=zq_CLfKyigJbu5zeW-uEc5kum8QAFjMk0bgUBYnrDJU" width={"350px"} alt="" />
        <Link to={'/login'} className='btn mt-3 btn-success' >Get Started</Link>
    </div>
  )
}

export default Home
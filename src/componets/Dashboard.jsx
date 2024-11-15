import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = ({setIsCompleted,setIsDoItNow}) => {

  const navigate = useNavigate()
  
  const [username,setUsername] =  useState("")
  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("user")).username)
  },[])

  const handleAllTask = ()=>{
    setIsCompleted(false)
    setIsDoItNow(false)
  }
  const handleCompleteTask = ()=>{
    setIsCompleted(true)
    setIsDoItNow(false)
  }
  const handleDoItNow = ()=>{
    setIsDoItNow(true)
    setIsCompleted(true)

  }
  
  return (
    <div className='d-flex flex-column justify-content-evenly align-items-center border rounded' style={{minHeight:"100vh"}}>
        <h5>Welcome {username}</h5>
        <div className='d-flex flex-column align-items-center'>
            <button onClick={handleAllTask} className='btn'><i className="fa-solid fa-house"> All Task</i>
            </button>
        <br />
        <button onClick={handleCompleteTask} className='btn'><i className="fa-solid fa-list"> Completed</i>
        </button>
        <br />
        <button onClick={handleDoItNow} className='btn'><i className="fa-solid fa-bars-progress"> Do It Now</i>
        </button>
        </div>
        <button onClick={()=>navigate('/')} className='btn'>SignOut <i className="fa-solid fa-right-from-bracket"></i></button>
    </div>
  )
}

export default Dashboard
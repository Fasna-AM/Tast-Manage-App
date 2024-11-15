import React, { useState } from 'react'
import Dashboard from '../componets/Dashboard'
import AllTask from '../componets/AllTask'

const Landing = () => {

  const [isCompleted,setIsCompleted] = useState(false)
  const [isDoItNow,setIsDoItNow] = useState(false)


  return (
    <div className='row p-5'>
        <div className="col-lg-2">
            <Dashboard setIsCompleted={setIsCompleted} setIsDoItNow={setIsDoItNow}/>
        </div>
        <div className="col-lg-10">
            <AllTask isCompleted={isCompleted} isDoItNow={isDoItNow}/>
        </div>
    </div>
  )
}

export default Landing
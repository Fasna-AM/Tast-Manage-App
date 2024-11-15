import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Add from './Add'
import Edit from './Edit'
import { allTaskAPI, deleteTaskAPI } from '../services/allApis'

const AllTask = ({isCompleted,isDoItNow}) => {
    const [allTask, setAllTask] = useState([])
    const [addTaskResponse,setAddTaskResponse] =useState([])
    const [updateTaskResponse,setUpdateTaskResponse] = useState([])



    useEffect(() => {
        getAllTask()
    }, [addTaskResponse,updateTaskResponse])

    const getAllTask = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {            
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await allTaskAPI(reqHeader)
                // console.log(result);
                
                if (result.status == 200) {
                    setAllTask(result.data)
                }

            } catch (err) {
                console.log(err);

            }
        }
    }


    const handledelete =async(id)=>{
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try{
                await deleteTaskAPI(id,reqHeader)
                getAllTask()
            }catch(err){
                console.log(err);
                
            }
        }
    }

    // console.log(allTask?.length)

    return (
        <div className='p-3 border rounded' style={{ minHeight: "90vh" }}>
            <h3>All Task</h3>
           {
            !isCompleted?
            <div className="row">
           {
                allTask?.length > 0 &&
                
                allTask?.map(task => (
                    <Card key={task?._id} className='m-3 ' style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title> {task?.title}</Card.Title>
                            <Card.Text>
                               {task?.description}
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Card.Text>Start Date : {task?.startDate}</Card.Text>
                                <Card.Text>End Date : {task?.endDate}</Card.Text>
                            </div>
                            <div className="d-flex justify-content-between">

                                <Card.Text className='rounded border status px-4'>{task?.status}</Card.Text>

                                <div className="d-flex justify-content-evenly w-50">
                                    <Edit task ={task} setUpdateTaskResponse={setUpdateTaskResponse}/>
                                    <button onClick={()=>handledelete(task?._id)} className='btn btn-light'><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                ))

            }

           </div>
           :
           !isDoItNow ?
           <div className="row">
           {
                allTask?.filter(task=>task?.status=="Complete").map(task =>(
                    <Card key={task?._id} className='m-3 ' style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title> {task?.title}</Card.Title>
                            <Card.Text>
                               {task?.description}
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Card.Text>Start Date : {task?.startDate}</Card.Text>
                                <Card.Text>End Date : {task?.endDate}</Card.Text>
                            </div>
                            <div className="d-flex justify-content-between">

                                <Card.Text className='rounded border status px-4'>{task?.status}</Card.Text>

                                <div className="d-flex justify-content-evenly w-50">
                                    <Edit task ={task} setUpdateTaskResponse={setUpdateTaskResponse}/>
                                    <button onClick={()=>handledelete(task?._id)} className='btn btn-light'><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                ))

            }
            

           </div>
            :
           <div className="row">
           {
                allTask?.filter(task=>task?.status=="Do It Now").map(task =>(
                    <Card key={task?._id} className='m-3 ' style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title> {task?.title}</Card.Title>
                            <Card.Text>
                               {task?.description}
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Card.Text>Start Date : {task?.startDate}</Card.Text>
                                <Card.Text>End Date : {task?.endDate}</Card.Text>
                            </div>
                            <div className="d-flex justify-content-between">

                                <Card.Text className='rounded border status px-4'>{task?.status}</Card.Text>

                                <div className="d-flex justify-content-evenly w-50">
                                    <Edit task ={task} setUpdateTaskResponse={setUpdateTaskResponse}/>
                                    <button onClick={()=>handledelete(task?._id)} className='btn btn-light'><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                ))

            }
            

           </div>
           
           }
           
           <Card className='m-3 ' style={{ width: '25rem' }}>
                <Card.Body className=' d-flex justify-content-center align-items-center'>
                    <Add setAddTaskResponse={setAddTaskResponse}/>
                </Card.Body>
            </Card>

        </div>
    )
}

export default AllTask
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { updateTaskAPI } from '../services/allApis';


const Edit = ({task,setUpdateTaskResponse}) => {

    const[taskDetails,setTaskDetails] = useState({
        id:task._id,title: task.title, description: task.description, startDate: task.startDate, endDate: task.endDate, status: task.status
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = async () => {
        const { id,title, description, startDate, endDate, status } = taskDetails
        if (title && description && startDate && endDate && status) {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                // make api call
                try {
                    const result = await updateTaskAPI(id,taskDetails, reqHeader)
                    console.log(result);
                    
                    if (result.status == 200) {
                        alert("Task Updated successfully!!!")
                        setUpdateTaskResponse(result)
                        handleClose()
                    } else {
                        alert(result.response.data)
                    }

                } catch (err) {
                    console.log(err);

                }
            }

        } else {
            alert("Please fill the form completely")
        }

    }
    

    // console.log(task.status);
    
    return (
        <div>
            <button onClick={handleShow} className='btn btn-light'><i className="fa-solid fa-edit"></i></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Task Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInputTitle"
                        label="Task Title"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Task Title" value={taskDetails.title} onChange={e=>setTaskDetails({...taskDetails,title:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputdescription"
                        label="Task Description"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Task Description"  value={taskDetails.description} onChange={e=>setTaskDetails({...taskDetails,description:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputsdate"
                        label="Start Date"
                        className="mb-3"
                    >
                        <Form.Control type="date" placeholder="Start Date"  value={taskDetails.startDate} onChange={e=>setTaskDetails({...taskDetails,startDate:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputEdate"
                        label="Ending Date"
                        className="mb-3"
                    >
                        <Form.Control type="date" placeholder="Ending Date"  value={taskDetails.endDate} onChange={e=>setTaskDetails({...taskDetails,endDate:e.target.value})}/>
                    </FloatingLabel>
                    <Form.Select aria-label="Default select example"  onChange={e=>setTaskDetails({...taskDetails,status:e.target.value})}>
                        <option >{taskDetails.status} </option>
                        <option value="Do It Now">Do It Now</option>
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpdate} variant="success">Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Edit
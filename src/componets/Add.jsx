import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addTaskAPI } from '../services/allApis';


const Add = ({setAddTaskResponse}) => {

    const [taskDetails, setTaskDetails] = useState({
        title: "", description: "", startDate: "", endDate: "", status: ""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(taskDetails);

    const handleAdd = async () => {
        const { title, description, startDate, endDate, status } = taskDetails
        if (title && description && startDate && endDate && status) {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                // make api call
                try {
                    const result = await addTaskAPI(taskDetails, reqHeader)
                    console.log(result);
                    
                    if (result.status == 200) {
                        alert("Task Added successfully!!!")
                        setAddTaskResponse(result)
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


    return (


        <div>
            <button onClick={handleShow} className='btn '> + Add New Task</button>
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
                        <Form.Control type="text" placeholder="Task Title" onChange={e => setTaskDetails({ ...taskDetails, title: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputdescription"
                        label="Task Description"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Task Description" onChange={e => setTaskDetails({ ...taskDetails, description: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputsdate"
                        label="Start Date"
                        className="mb-3"
                    >
                        <Form.Control type="date" placeholder="Start Date" onChange={e => setTaskDetails({ ...taskDetails, startDate: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputEdate"
                        label="Ending Date"
                        className="mb-3"
                    >
                        <Form.Control type="date" placeholder="Ending Date" onChange={e => setTaskDetails({ ...taskDetails, endDate: e.target.value })} />
                    </FloatingLabel>
                    <Form.Select aria-label="Default select example" onChange={e => setTaskDetails({ ...taskDetails, status: e.target.value })}>
                        <option>Status</option>
                        <option value="Do It Now">Do It Now</option>
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleAdd} variant="success">Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add
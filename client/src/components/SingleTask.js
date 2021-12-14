import React from 'react'
// import { FaTimes } from 'react-icons/fa'
import Button from './Button'



function SingleTask({ task, onDelete }) {

    return (
        <div className="task">
            <div className='task-div'><h3>{task.task}</h3><Button color="green" text="Mark as Complete" onClick={() => { onDelete(task._id) }} /> </div>
            <div className='task-div'><p>{task.time}</p></div>
        </div>
    )
}

export default SingleTask

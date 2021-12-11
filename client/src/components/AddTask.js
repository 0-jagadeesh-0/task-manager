import { useState } from 'react'

function AddTask({ onAdd }) {
    const [task, setTask] = useState('')
    const [time, setDay] = useState('')
    // const [remainder, setRemainder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!task) {
            alert("Please Add the Task");
            return;
        }
        onAdd({ task, time })
        setTask('');
        setDay('');
        // setRemainder('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" name='task' value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Time</label>
                <input type="text" placeholder="Add Time" name='time' value={time} onChange={(e) => setDay(e.target.value)} />
            </div>
            {/* <div className="form-control">
                <label>Remainder</label>
                <input type="checkbox" value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)} />
            </div> */}
            <input className="submit-btn" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask

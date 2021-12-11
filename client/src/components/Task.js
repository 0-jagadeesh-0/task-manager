import SingleTask from "./SingleTask"


function Task({ tasks, onDelete }) {

    return (
        <div>
            {
                tasks.map((task) => {
                    return <SingleTask key={task._id} task={task} onDelete={onDelete} />
                })
            }

        </div>
    )
}

export default Task

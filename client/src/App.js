import Header from "./components/Header";
import Task from "./components/Task";
import { useState, useEffect } from 'react';
import AddTask from "./components/AddTask";
import axios from 'axios';
// import Signup from "./auth/Signup";



function App() {

  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTask();
      setTasks(taskFromServer);
    }
    getTasks();
  }, [])


  const fetchTask = async () => {
    const res = await axios.get('/tasks')
    return res.data;
  }



  const addTask = async (task) => {
    await axios.post('/add', task);
    const taskFromServer = await fetchTask();
    setTasks(taskFromServer);


  }

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    const taskFromServer = await fetchTask();
    setTasks(taskFromServer);
  }

  return (
    <div className="container">
      <Header title={"Task Manager"} onAdd={() => { setShowTask(!showTask) }} showAdd={showTask} />
      {showTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} /> : <h3 style={{ textAlign: "center" }}>No Tasks to Display</h3>
      }
    </div>
  );
}

export default App;

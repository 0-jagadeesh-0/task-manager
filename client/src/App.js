import Header from "./components/Header";
import Task from "./components/Task";
import { useState, useEffect } from 'react';
import AddTask from "./components/AddTask";
import axios from 'axios';
import { useNavigate } from 'react-router';
// import Signup from "./auth/Signup";
import './css/dashboard.css'
import Navbar from "./components/Navbar";


function App() {

  const navigate = useNavigate();

  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);



  useEffect(() => {
    axios.get('/tasks', { headers: { token: localStorage.getItem('token') } }).then((res) => {

      setTasks(res.data.tasks);
    })
  }, [])


  // const fetchTask = async () => {
  //   const res = await axios.get('/tasks', { headers: { token: localStorage.getItem('token') } })
  //   console.log(res);
  //   return res.data;
  // }



  const addTask = async (task) => {
    await axios.post('/add', task, { headers: { token: localStorage.getItem('token') } });
    axios.get('/tasks', { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })
    // const taskFromServer = await fetchTask();
    // setTasks(taskFromServer);


  }

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    axios.get('/tasks', { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })
    // const taskFromServer = await fetchTask();
    // setTasks(taskFromServer);
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <Header title={"Task Manager"} onAdd={() => { setShowTask(!showTask) }} showAdd={showTask} />
        {showTask && <AddTask onAdd={addTask} />}
        {
          tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} /> : <h3 style={{ textAlign: "center" }}>No Tasks to Display</h3>
        }

      </div>

    </div>

  );
}

export default App;

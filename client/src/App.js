import Header from "./components/Header";
import Task from "./components/Task";
import { useState, useEffect } from 'react';
import AddTask from "./components/AddTask";
import axios from 'axios';
import './css/dashboard.css'
import Navbar from "./components/Navbar";



function App() {

  const url = "http://127.0.0.1:5000";


  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${url}/tasks`, { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })
  }, [tasks.length])

  const addTask = async (task) => {
    await axios.post(`${url}/add`, task, { headers: { token: localStorage.getItem('token') } });
    await axios.get(`${url}/tasks`, { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })

  }

  const deleteTask = async (id) => {
    await axios.delete(`${url}/tasks/${id}`);
    await axios.get(`${url}/tasks`, { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })

  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <Header title={"Task Manager"} onAdd={() => { setShowTask(!showTask) }} showAdd={showTask} />
        {showTask && <AddTask onAdd={addTask} />}
        {
          tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} /> : <h3 style={{ textAlign: "center", marginTop: "3%" }}>No Tasks to Display</h3>
        }

      </div>

    </div>

  );
}

export default App;

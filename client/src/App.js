import Header from "./components/Header";
import Task from "./components/Task";
import { useState, useEffect } from 'react';
import { Navigate } from "react-router";
import AddTask from "./components/AddTask";
import axios from 'axios';
import './css/dashboard.css'
import Navbar from "./components/Navbar";



function App() {

  const url = "https://add-tasks-daily.herokuapp.com";

  // const url = "http://localhost:5000";


  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const notification = () => {

    tasks.forEach(task => {
      const today = new Date();
      var currtime = today.getHours() + ":" + today.getMinutes();
      if (task.time === currtime) {
        const notify = new Notification("New Messsage from task manager", {
          body: `Time to complete ${task.task}`
        });
      }
      else {
        console.log(currtime);
      }

    });
  }

  useEffect(() => {
    if (Notification.permission === "granted") {
      notification();
    }
  })

  useEffect(() => {
    axios.get(`${url}/tasks/${localStorage.getItem("userId")}`, { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })
  }, [tasks.length])

  const addTask = async (task) => {
    await axios.post(`${url}/add/${localStorage.getItem("userId")}`, task, { headers: { token: localStorage.getItem('token') } });
    await axios.get(`${url}/tasks/${localStorage.getItem("userId")}`, { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })

  }

  const deleteTask = async (id) => {
    await axios.delete(`${url}/delete/${id}`, { headers: { token: localStorage.getItem('token') } }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    await axios.get(`${url}/tasks/${localStorage.getItem("userId")}`, { headers: { token: localStorage.getItem('token') } }).then((res) => {
      setTasks(res.data.tasks);
    })

  }

  return (
    <>{localStorage.getItem("token") ? <div>
      <Navbar />
      <div className="container">
        <Header title={"Task Manager"} onAdd={() => { setShowTask(!showTask) }} showAdd={showTask} />
        {showTask && <AddTask onAdd={addTask} />}
        {
          tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} /> : <h3 style={{ textAlign: "center", marginTop: "3%" }}>No Tasks to Display</h3>
        }

      </div>

    </div> : <Navigate to="/" />}</>

  );
}

export default App;

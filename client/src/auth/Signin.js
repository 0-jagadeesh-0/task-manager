import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../css/signin.css'
import Navbar from '../components/Navbar';

function Signin() {
    const url = "http://127.0.0.1:5000";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {

        e.preventDefault();

        await axios.post(`${url}/login`, { username, password }).then((res) => {

            // console.log(token);

            const token = res.data.token;
            localStorage.setItem('token', token);
            navigate(`/dashboard`);


        }).catch((res) => {
            window.alert("User not found");
            setUsername('');
            setPassword('');
        })

    }
    return (
        <div>
            <Navbar />
            <div className='form'>
                <h3>Login</h3>
                <form className='sign-in-form' onSubmit={submitHandler}>
                    <div>
                        <label >Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label >Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <input className='sub-btn' type="submit" value="Login" />
                </form>
            </div>


        </div>

    )
}

export default Signin

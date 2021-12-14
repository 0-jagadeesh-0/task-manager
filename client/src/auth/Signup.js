import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

function Signup() {
    const url = "http://127.0.0.1:5000";

    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post(`${url}/register`, { username, password }).then((res) => {
            // console.log(res.status);
            const token = res.data.token;
            // console.log(token);
            localStorage.setItem('token', token);
            navigate(`/login`);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <Navbar />
            <div className='form'>
                <h3>Signup</h3>
                <form className='sign-in-form' onSubmit={submitHandler}>
                    <div>
                        <label >Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label >Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <input className='reg-btn' type="submit" value="Register" />
                </form>

            </div>


        </div>

    )
}

export default Signup

import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

function Signup() {
    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('/register', { username, password }).then((res) => {
            console.log(res.status);
            const token = res.data.token;
            console.log(token);
            localStorage.setItem('token', token);
            navigate('/login');
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <Navbar />
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

    )
}

export default Signup

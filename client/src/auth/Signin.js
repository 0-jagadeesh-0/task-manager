import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../css/signin.css'
import Navbar from '../components/Navbar';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {

        e.preventDefault();

        await axios.post('/login', { username, password }).then((res) => {
            const token = res.data.token;
            console.log(token);
            localStorage.setItem('token', token);
            navigate('/dashboard');
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
                <input className='sub-btn' type="submit" value="Login" />
            </form>

        </div>

    )
}

export default Signin

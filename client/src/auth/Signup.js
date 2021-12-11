import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async () => {
        await axios.post('/register', { username, password });
        navigate('/log');
    }
    return (
        <form className='sign-up-form' onSubmit={submitHandler}>
            <div>
                <label >Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label >Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Register" />
        </form>
    )
}

export default Signup

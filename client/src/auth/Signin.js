import React, { useState } from 'react'
import axios from 'axios';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async () => {
        await axios.post('/login', { username, password });
    }
    return (
        <form className='sign-in-form' onSubmit={submitHandler}>
            <div>
                <label >Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label >Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" />
        </form>
    )
}

export default Signin

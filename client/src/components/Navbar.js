import React from 'react'
import { useNavigate } from 'react-router'
import '../css/nav.css'
function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='nav'>
            <div style={{ cursor: "pointer" }} onClick={() => navigate('/')} className='title'>Task Manager</div>
            {window.location.pathname === '/' || window.location.pathname === '/signup' ? <button className='nav-btn' onClick={() => navigate('/login')}>Login</button> : window.location.pathname === '/login' ? <button className='nav-btn' onClick={() => navigate('/signup')}>Signup</button> : window.location.pathname === '/dashboard' ? <button className='nav-btn' onClick={() => {
                localStorage.removeItem('token')
                navigate('/')
            }}
            >Logout</button> : ''}




        </div>
    )
}

export default Navbar

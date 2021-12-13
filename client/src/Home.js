import React from 'react'
import { useNavigate } from 'react-router'
import image from './assets/task-icon.png'
import Navbar from './components/Navbar'
import './css/home.css'

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className='home'>
                <img className='src-img' src={image} alt="No internet" />
                <div className='home-div'>
                    <button className='sign-btn' onClick={() => navigate('/signup')}>Sign Up</button><br />
                    <div>
                        <h1>Manage your daily Tasks</h1>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home

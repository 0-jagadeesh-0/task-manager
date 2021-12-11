import React from 'react'
import Signup from './auth/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './auth/Signin';
import App from './App';

function Home() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={App} />
                <Route path="/log" component={Signin} />
                <Route path="/home" component={Signup} />
            </Routes>
        </Router>

    )
}

export default Home

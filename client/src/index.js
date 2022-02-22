import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './auth/Signin';
// import RequireAuth from './auth/RequireAuth';
import Signup from './auth/Signup';
import Home from './Home';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<App />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

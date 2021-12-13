import React from 'react'

function RequireAuth(Component) {
    return () => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = "/";
        }
        else {
            return <Component />
        }
    }
}

export default RequireAuth

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    // Get the user from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user data from localStorage
        navigate('/login'); // Redirect to login
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <span>Welcome, {user.username}</span>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;

import React from 'react';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="home-container">
            <h1>Welcome to MERN Auth App</h1>
            <p>Hello, {user?.username}! You are now logged in.</p>
            <p>This is a secure area of the application. You can only see this page if you're authenticated.</p>
        </div>
    );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/global.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.prevenDefault();

        if (!username || !password) {
            alert('Please in both username and password.');
            return;
        }

        alert(`Welcome, ${username}!`);
        console.log('Username:', username);
        console.log('Password:', password);

        setUsername('');
        setPassword('');
    }


    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={ username } onChange={(e) => setUsername (e.target.value)} placeholder="Enter your username" /> 
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" value={ password } onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" /> 
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>  
            </div>
    );
}

export default Login;
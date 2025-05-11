import React from "react";
import { FaUser, FaEnvelope, } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/register.css";

function Register() {
    return(
        <div className="container"> 
        <div className="register-container">
            <h2>Register</h2>
            <form>
                <div className="input_group">
                    <FaUser className="icon"/> 
                    <input type="text" name="username" placeholder="Enter your username"/> 
                </div>
                <div className="input_group">
                    <FaEnvelope className="icon"/>
                    <input type="email" name="email" placeholder="Enter your email"/> 
                </div>
                <div className="input_group">
                    <FaLock className="icon"/>
                    <input type="password" name="password" placeholder="Enter your password"/>
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            <p>Already have an account? <Link to="/login"></Link></p>
        </div>
        </div>
    );
}

export default Register;
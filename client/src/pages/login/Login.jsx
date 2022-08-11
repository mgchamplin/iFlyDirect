import "./login.css"
import React from 'react'
import { Link } from 'react-router-dom';
import Register from "../register/Register";

const Login = () => {
    return (
      <div className="styled-container">
        <div className="styled-wrapper">
          <h1 className="styled-title">
            <Link to='/'><h1>iFlyDirect</h1></Link>
          </h1>
          <form className="styled-form">
            <input className="styled-input" placeholder='username'/>
            <input className="styled-input" placeholder='password'/>
            <button className="styled-button">Login</button>
            <Link>Forgot Password?</Link>
            <Link to='./register' element={<Register />}>Create New Account</Link>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
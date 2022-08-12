import "./register.css"
import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className="styled-container">
        <div className="styled-wrapper">
          <h1 className="styled-title">CREATE AN ACCOUNT <Link to='/'><h1 className="styled-logo">iFlyDirect</h1></Link></h1 >
          
          <form className="styled-form">
            <input className="styled-input" placeholder="name" />
            <input className="styled-input" placeholder="last name" />
            <input className="styled-input" placeholder="username" />
            <input className="styled-input" placeholder="email" />
            <input className="styled-input" placeholder="password" />
            <input className="styled-input" placeholder="confirm password" />
            <span className="styled-agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className="styled-button">CREATE</button>
          </form>
        </div>      
      </div>
    )
  }
  
  export default Register
import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import Register from '../../pages/register/Register';
import Login from '../../pages/login/Login';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">iFlyDirect</span>
            <div className="navItems">
                <Link to="/register" element={<Register />}><button className="navButton">Register</button></Link>
                <Link to="/login" element={<Login />}><button className="navButton">Login</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
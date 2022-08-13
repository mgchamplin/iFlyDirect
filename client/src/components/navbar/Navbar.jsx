import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo"><Link to="/" className='logo' id='navLogo'>iFlyDirect</Link></span>
            <div className="navItems">
                <Link to="/register"><button className="navButton">Register</button></Link>
                <Link to="/login"><button className="navButton">Login</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
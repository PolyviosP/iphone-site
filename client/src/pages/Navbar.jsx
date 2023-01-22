import '../css/navbar.css';
import { NavLink  } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
/* eslint jsx-a11y/anchor-is-valid: [0] */
function Navbar() {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className='navbar'>
        <header>
            <a className="navbar logo">
                <NavLink to="/home"></NavLink>
                <img src={require("../icons/logo1.png")} alt="" />
            </a>
            <nav>
            <link rel="stylesheet" href="navbar.css" />
            
            <ul className="nav__links">
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                {currentUser ? (
                    <NavLink to="/phones">Phones</NavLink>
                ):(
                    <NavLink to="/login">Phones</NavLink>
                )}
                </li>
                {currentUser ? (
                    <li>
                        <span className="cta">{currentUser?.email}</span>
                    </li>
                    ):(null)
                }
                {currentUser ? (
                    <li>
                        <span className="ctaa" onClick={logout}>Logout</span>
                    </li>
                    ):(
                    <li>
                        <NavLink className="cta" to="/login">Login</NavLink>
                    </li>)}
            </ul>
        
        <p className="menu cta">Menu</p>
        </nav>
        </header>
        </div>
    );
  };
  
  export default Navbar;
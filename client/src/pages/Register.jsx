/* eslint jsx-a11y/anchor-is-valid: [0] */
import React from 'react';
import { useState } from "react";
import '../css/register.css';
import '../css/navbar.css';
import LR_script from './script.js';
import axios from '../api/axios';
import { useNavigate, NavLink } from "react-router-dom";
import Navbar from "../pages/Navbar";

const Register = () => { 
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');

    const RegisterClient = async (e) => {
        e.preventDefault();
        //setSuccess(true);
        console.log(user, pwd, matchPwd);
        if (pwd !== matchPwd || user === "" || pwd === ""){
          
        }else{
          try {
            await axios.post('/register',{
              email: user,
              password: pwd,

            }).then(() => {
              console.log('success')
            });
            navigate("/login");
            setUser('');
            setPwd('');
            setMatchPwd('');
          } catch (err) {
              if (!err?.response) {
                console.log(err)
              } 
          }
        }
  };
  {LR_script()}
  return(
    <>
    <div className="register navbar">
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign in &amp; Sign up Form</title>
    <link rel="stylesheet" href="register.css" />
    <header>
      <Navbar/>
    </header>
    <main>
    <div className="box">
      <div className="inner-box">
        <div className="forms-wrap">
          <form action="register.jsx" autoComplete="off" className="sign-in-form" onSubmit={RegisterClient}>
            <div className="heading">
              <h2>Welcome Back</h2>
              <h6>You have already account? </h6>
              <a>
                  <NavLink className="toggle" to="/login">Sign in</NavLink>
              </a>
            </div>
            <div className="actual-form">
              <div className="input-wrap">
                <input
                  type="text"
                  minLength={4}
                  className="input-field"
                  id="username"
                  autoComplete="off"
                  onChange={(event) => setUser(event.target.value)}
                  value={user}
                  required
                  aria-describedby="uidnote"

                />
                <label>Email</label>
              </div>
              <div className="input-wrap">
                <input
                  type="password"
                  id="password"
                  onChange={(event) => setPwd(event.target.value)}
                  value={pwd}
                  required
                  aria-describedby="pwdnote"
                  className="input-field"
                  
                />
                <label>Password</label>
              </div>
              <div className="input-wrap">
                <input
                  type="password"
                  className="input-field"
                  id="confirm_pwd"
                  onChange={(event) => setMatchPwd(event.target.value)}
                  value={matchPwd}
                  required
                  aria-describedby="confirmnote"
    />
                <label>Confirm Password</label>
              </div>
              <div>
                <button
                  type="submit"
                  defaultValue="Sign In"
                  className="sign-btn"
                  onClick={RegisterClient} 
                >Υποβολή</button>
              </div>
              
            </div>
          </form>
        </div>
        <div className="carousel">
          <div className="images-wrapper">
            <img src={require("../icons/photo3.jpg")} className="image img-1 show" alt="" />
            <img src={require("../icons/photo2.jpg")} className="image img-2" alt="" />
            <img src={require("../icons/photo1.jpg")} className="image img-3" alt="" />
          </div>
          <div className="text-slider">
            <div className="text-wrap">
              <div className="text-group">
                {/*<h2>Create your own courses</h2>
                <h2>Customize as you like</h2>
                <h2>Invite students to your class</h2>*/}
            </div>
            </div>
            <div className="bullets">
              <span className="active" data-value={1} />
              <span data-value={2} />
              <span data-value={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
  </>
  );
}
export default Register;
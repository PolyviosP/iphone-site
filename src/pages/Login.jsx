import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../css/Login.css';
import '../css/navbar.css';
import './app.js';


export const Login = () => (
  <>
    <div className="Loginpage navbar">
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign in &amp; Sign up Form</title>
    <link rel="stylesheet" href="Login.css" />
    <header>
      <a className="logo" href="/">
            <img src={require("../icons/logo1.png")} alt="" />
          </a>
      <nav>
       
        <ul className="nav__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Phones</a>
          </li>
          <li>
            <a className="cta" href="#">
                Login
            </a>
          </li>
        </ul>
      </nav>
      
      <p className="menu cta">Menu</p>
    </header>
    <main>
    <Helmet>
        <script src="app.js" ></script>
        <script dangerouslySetInnerHTML={{__html: 'try{Typekit.load({ async: true });}catch(e){}'}}></script>
    </Helmet>
    <div className="box">
      <div className="inner-box">
        <div className="forms-wrap">
          <form action="Login.jsx" autoComplete="off" className="sign-in-form">
            <div className="heading">
              <h2>Welcome Back</h2>
              <h6>Not registred yet?</h6>
              <a href="#" className="toggle">
                Sign up
              </a>
            </div>
            <div className="actual-form">
              <div className="input-wrap">
                <input
                  type="text"
                  minLength={4}
                  className="input-field"
                  autoComplete="off"
                  required=""
                />
                <label>Name</label>
              </div>
              <div className="input-wrap">
                <input
                  type="password"
                  minLength={4}
                  className="input-field"
                  autoComplete="off"
                  required=""
                />
                <label>Password</label>
              </div>
              <input
                type="submit"
                defaultValue="Sign In"
                className="sign-btn"
              />
              <p className="text">
                Forgotten your password or you login datails?
                <a href="#">Get help</a> signing in
              </p>
            </div>
          </form>
        </div>
        <div className="carousel">
          <div className="images-wrapper">
            <img src={require("../icons/photo1.jpg")} className="image img-1 show" alt="" />
            <img src={require("../icons/photo2.jpg")} className="image img-2" alt="" />
            <img src={require("../icons/photo3.jpg")} className="image img-3" alt="" />
          </div>
          <div className="text-slider">
            <div className="text-wrap">
              <div className="text-group">
                <h2>Create your own courses</h2>
                <h2>Customize as you like</h2>
                <h2>Invite students to your class</h2>
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
)

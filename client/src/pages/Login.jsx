import React, { useState, useContext } from 'react';
import '../css/Login.css';
import '../css/navbar.css';
import { useNavigate } from "react-router-dom";
import LR_script from './script.js';
import Navbar from "../pages/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [err, setError] = useState(null);

    const Auth = async (e) => {
      e.preventDefault();
      if (inputs.email === "" || inputs.password === ""){

      }else{
        try{
          await login(inputs)
          navigate("/home");
        } catch (err) {
          console.log(err)
          setError(err.response.data);
        }
      }
    };
  {LR_script()}
  return (
    
    <div className="Loginpage navbar">
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign in &amp; Sign up Form</title>
    <link rel="stylesheet" href="Login.css" />
    <header>
        <Navbar/>
    </header>
    <main>
    <div className="box">
      <div className="inner-box">
        <div className="forms-wrap">
          <form action="Login.jsx" autoComplete="off" className="sign-in-form" onSubmit={Auth}>
            <div className="heading">
              <h2>Welcome Back</h2>
              <h6>Not registred yet? </h6>
              <a>
                <NavLink className="toggle" to="/register">Sign up</NavLink>
              </a>
            </div>
            <div className="actual-form">
              <div className="input-wrap">
                <input
                  type="text"
                  minLength={4}
                  className="input-field"
                  autoComplete="off"
                  required
                  id="username"
                  onChange={handleChange}
                  name="email"
                  //value={email}
                />
                <label>Email</label>
              </div>
              <div className="input-wrap">
                <input
                  name="password"
                  type="password"
                  minLength={4}
                  className="input-field"
                  autoComplete="off"
                  id="password"
                  onChange={handleChange}
                  //value={password}
                  required
                />
                <label>Password</label>
              </div>
              <button
                type="submit"
                defaultValue="Sign In"
                className="sign-btn"
                onClick={Auth}
              >Υποβολή</button>
              {err && <p>{err}</p>}
            </div>
          </form>
        </div>
        <div className="Loginpage carousel">
          <div className="Loginpage images-wrapper">
            <img src={require("../icons/photo3.jpg")} className="image img-1 show" alt="" />
            <img src={require("../icons/photo2.jpg")} className="image img-2" alt="" />
            <img src={require("../icons/photo1.jpg")} className="image img-3" alt="" />
          </div>
          <div className="Loginpage text-slider">
            <div className="Loginpage text-wrap">
              <div className="Loginpage text-group">
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
  );
};

export default Login;
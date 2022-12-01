import React from 'react';
import '../css/Login.css';
import '../css/nicepage.css';

export const Login = () => (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <meta name="keywords" content="Member Login" />
    <meta name="description" content="" />
    <title>Login</title>
    <link rel="stylesheet" href="nicepage.css" media="screen" />
    <link rel="stylesheet" href="Login.css" media="screen" />
    <meta name="generator" content="Nicepage 4.21.5, nicepage.com" />
    <link
      id="u-theme-google-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
    />
    <meta name="theme-color" content="#478ac9" />
    <meta property="og:title" content="Login" />
    <meta property="og:type" content="website" />
    
    <section className="u-clearfix u-section-1" id="sec-a5ee">
      <div className="u-align-center u-container-style u-expanded-width u-gradient u-group u-shape-rectangle u-group-1">
        <div className="u-container-layout u-valign-middle u-container-layout-1">
          <span className="">
            <img src="./icons/p.png" alt="" />
          </span>
          <h2 className="u-text u-text-body-alt-color u-text-default u-text-1">
            Member Login
          </h2>
          <div className="u-form u-login-control u-form-1">
            <form
              action="#"
              className="u-clearfix u-form-custom-backend u-form-spacing-10 u-form-vertical u-inner-form"
              source="custom"
              name="form"
              style={{ padding: 0 }}
            >
              <div className="u-form-group u-form-name">
                <input
                  type="text"
                  placeholder="Enter your Username"
                  id="username-a30d"
                  name="username"
                  className="u-border-2 u-border-grey-10 u-grey-10 u-input u-input-rectangle u-input-1"
                  required=""
                
                />
              </div>
              <div className="u-form-group u-form-password">
                <input
                  type="text"
                  placeholder="Enter your Password"
                  id="password-a30d"
                  name="password"
                  className="u-border-2 u-border-grey-10 u-grey-10 u-input u-input-rectangle u-input-2"
                  required=""
                />
              </div>
              <div className="u-form-checkbox u-form-group">
                <input
                  type="checkbox"
                  id="checkbox-a30d"
                  name="remember"
                  defaultValue="On"
                />
                <label
                  htmlFor="checkbox-a30d"
                  className="u-label u-text-grey-5 u-label-3"
                >
                  Remember me
                </label>
              </div>
              <div className="u-align-left u-form-group u-form-submit">
                <a
                  href="#"
                  className="u-active-palette-2-light-2 u-border-none u-btn u-btn-submit u-button-style u-hover-palette-2-light-2 u-palette-4-base u-text-active-palette-2-base u-text-body-alt-color u-text-hover-palette-2-base u-btn-1"
                >
                  Login
                </a>
                <input
                  type="submit"
                  defaultValue="submit"
                  className="u-form-control-hidden"
                />
              </div>
              <input type="hidden" defaultValue="" name="recaptchaResponse" />
            </form>
          </div>
          <a
            href="https://nicepage.me"
            className="u-border-1 u-border-active-grey-10 u-border-hover-grey-10 u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-login-control u-login-create-account u-none u-text-body-alt-color u-btn-2"
            data-animation-name=""
            data-animation-duration={0}
            data-animation-delay={0}
            data-animation-direction=""
          >
            Forgot password?
          </a>
          <a
            href="https://nicepage.cloud"
            className="u-border-1 u-border-active-grey-10 u-border-hover-grey-10 u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-login-control u-login-create-account u-none u-text-body-alt-color u-btn-3"
          >
            Don't have an account?
          </a>
        </div>
      </div>
    </section>
  </>
  )

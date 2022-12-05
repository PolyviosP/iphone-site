import React from 'react';
import home from '../css/Home.css';
import '../css/nicepage.css';
import '../css/navbar.css';

export const Home = () => (
    <>
    <div className="Home navbar">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="navbar.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap"
      rel="stylesheet"
    />
    <link
      id="u-theme-google-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
    />
    <title>Home</title>
    <link rel="stylesheet" href="nicepage.css" media="screen" />
    <link rel="stylesheet" href="Home.css" media="screen" />
    <link rel="stylesheet" href="navbar.css" media="screen" />
    <meta name="theme-color" content="#478ac9" />
    <meta property="og:title" content="Home" />
    <meta property="og:type" content="website" />
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
      <section className="u-section-s" id="">
        
        <div className="u-border-3 u-border-grey-dark-1 u-expanded-width u-line u-line-horizontal u-line-1" />
      </section>
      <section className="u-clearfix u-section-2" id="sec-5341">
        <h2 className="u-align-center u-custom-font u-text u-text-default u-text-1">
          {" "}
          Designed for You!
        </h2>
        <div className="u-align-center u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-1">
                <img
                  className="u-align-center u-image u-image-round u-radius-10 u-image-1"
                  src={require("../icons/app-store.png")}
                  alt=""
                  data-image-width={1024}
                  data-image-height={512}
                />
                <p className="u-small-text u-text u-text-default u-text-variant u-text-2">
                  <span style={{ fontWeight: 700 }}>
                    {" "}
                    The&nbsp;App&nbsp;Store
                  </span>
                  &nbsp;offers nearly 1.8 million apps all held to the highest
                  privacy standards.
                </p>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-2">
                <img
                  className="u-image u-image-contain u-image-round u-preserve-proportions u-radius-10 u-image-2"
                  src={require("../icons/airpods.jpg")}
                  alt=""
                  data-image-width={200}
                  data-image-height={200}
                />
                <p className="u-small-text u-text u-text-default u-text-variant u-text-3">
                  <span style={{ fontWeight: 700 }}> AirPods Pro</span>&nbsp;place
                  sound all around you with Personalized Spatial Audio. Engrave
                  the case for free, only at Apple.
                </p>
              </div>
            </div>
            <div className="u-container-style u-list-item u-repeater-item">
              <div className="u-container-layout u-similar-container u-container-layout-3">
              <img
                  className="u-image u-image-contain u-image-round u-preserve-proportions u-radius-10 u-image-2"
                  src={require("../icons/applewatch.png")}
                  alt=""
                  data-image-width={200}
                  data-image-height={200}
                />
                <p className="u-small-text u-text u-text-default u-text-variant u-text-4">
                  <span style={{ fontWeight: 700 }}>Apple&nbsp;Watch</span>
                  &nbsp;lets you ping your iPhone with a tap if you’ve misplaced
                  it. And iPhone lets you find your Apple&nbsp;Watch just as
                  easily.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div
                className="u-container-style u-hover-feature u-image u-layout-cell u-size-30 u-image-4"
              >
                <img
                  className="u-container-style u-hover-feature u-image u-layout-cell u-size-30 u-image-4"
                  src={require("../icons/16.jpg")}
                  alt=""
                />
            
                <div className="u-container-layout u-container-layout-4" />
              </div>
              <div className="u-black u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div className="u-container-layout u-valign-bottom u-container-layout-5">
                  <h1
                    className="u-align-left u-text u-text-5"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1000}
                    data-animation-direction=""
                  >
                    Fresh in stock
                  </h1>
                  <p
                    className="u-align-left u-custom-font u-text u-text-default u-text-6"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1000}
                    data-animation-direction="X"
                  >
                    Get now the fresh iphone 14, 14 pro and 14 pro max.
                  </p>
                  <p className="u-align-right u-text u-text-custom-color-1 u-text-7">
                    <a
                      className="u-active-none u-btn u-button-style u-hover-feature u-hover-none u-none u-text-custom-color-1 u-btn-1"
                      href="phones.html"
                    >
                      Get yours here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
  
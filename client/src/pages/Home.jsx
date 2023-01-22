/* eslint jsx-a11y/anchor-is-valid: [0] */
import '../css/nicepage.css';
import Navbar from "../pages/Navbar";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return(
    <>
    <body className="yoyo">
    <div className="Home navbar">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <Navbar/>
    </header>
      <section className="u-section-s" id="">
        
      <div className="u-border-3 u-border-grey-dark-1 u-expanded-width u-line u-line-horizontal u-line-1" />
      </section>
      <section className="u-clearfix u-section-2" id="sec-5341">
        <div className='home'>
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
                    >
                      {currentUser ? (
                        <NavLink className="toggle" to="/phones">Get yours here</NavLink>
                      ):(
                        <NavLink className="toggle" to="/login">Get yours here</NavLink>
                      )
                      }
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
    </body>
    </>
);}
export default Home;
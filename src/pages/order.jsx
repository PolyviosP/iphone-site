import React from 'react';
import '../css/order.css';
import '../css/nicepage.css';
import '../css/navbar.css';

export const order = () => (
    <>
    <div className="order navbar">
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
    <title>Order</title>
    <link rel="stylesheet" href="nicepage.css" media="screen" />
    <link rel="stylesheet" href="order.css" media="screen" />
    <link rel="stylesheet" href="navbar.css" media="screen" />
    <meta name="theme-color" content="#478ac9" />
    <meta property="og:title" content="order" />
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
      <section className="u-clearfix u-section-1" id="sec-bf15">
        <div className="u-clearfix u-sheet u-valign-top u-sheet-1">
          <div className="u-checkout u-expanded-width u-checkout-1">
            <div className="u-checkout-blocks-container">
              <div className="u-checkout-billing-details-block u-checkout-block u-indent-30">
                <div className="u-checkout-block-container u-clearfix">
                  <h5 className="u-checkout-block-header u-text">
                    Billings Details
                  </h5>
                  <div className="u-checkout-block-content u-text">
                    <div className="u-checkout-form u-form">
                      <form
                        action="#"
                        className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                        source="custom"
                        name="form"
                      >
                        <div className="u-form-group u-form-name">
                          <label htmlFor="name-f7b1" className="u-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="First Name"
                            id="name-f7b1"
                            name="name"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                            required=""
                          />
                        </div>
                        <div className="u-form-group u-form-group-2 u-form-name">
                          <label htmlFor="name-592d" className="u-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            id="name-592d"
                            name="name-1"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                            required=""
                          />
                        </div>
                        <div className="u-form-group u-form-group-3 u-form-select">
                          <label htmlFor="select-f1ec" className="u-label">
                            Country
                          </label>
                          <input
                            type="text"
                            placeholder="Country"
                            id="name-592d"
                            name="name-1"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                            required=""
                          />
                        </div>
                        <div className="u-form-group u-form-group-4">
                          <label htmlFor="text-c1e1" className="u-label">
                            Address
                          </label>
                          <input
                            type="text"
                            placeholder="Address"
                            id="text-c1e1"
                            name="text-1"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                          />
                        </div>
                        <div className="u-form-group u-form-group-5 u-form-phone">
                          <label htmlFor="phone-089b" className="u-label">
                            Phone
                          </label>
                          <input
                            type="tel"
                            pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                            placeholder="Phone"
                            id="phone-089b"
                            name="phone"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                            required=""
                          />
                        </div>
                        <div className="u-form-email u-form-group">
                          <label htmlFor="email-f7b1" className="u-label">
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Email"
                            id="email-f7b1"
                            name="email"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                            required=""
                          />
                        </div>
                        <div className="u-form-group u-form-message">
                          <label htmlFor="message-f7b1" className="u-label">
                            Order notes
                          </label>
                          <textarea
                            placeholder="Notes about your order, e.g. special notes for delivery"
                            rows={4}
                            cols={50}
                            id="message-f7b1"
                            name="message"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="u-form-send-message u-form-send-success">
                          Thank you! Your message has been sent.
                        </div>
                        <div className="u-form-send-error u-form-send-message">
                          Unable to send your message. Please fix errors then try
                          again.
                        </div>
                        <input
                          type="hidden"
                          defaultValue=""
                          name="recaptchaResponse"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-checkout-block u-checkout-totals-block u-indent-30">
                <div className="u-checkout-block-container u-clearfix">
                  <h5 className="u-checkout-block-header u-text">Your Order</h5>
                  <div className="u-align-right u-checkout-block-content u-text">
                    <div className="u-checkout-totals-table u-table u-table-responsive">
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="50.6%" />
                          <col width="49.4%" />
                        </colgroup>
                        <tbody className="u-align-center u-table-body">
                          <tr>
                            <td className="u-align-left u-border-1 u-border-grey-dark-1 u-first-column u-table-cell u-table-cell-1">
                              Subtotal
                            </td>
                            <td className="u-border-1 u-border-grey-dark-1 u-table-cell">
                              $281.00
                            </td>
                          </tr>
                          <tr>
                            <td className="u-align-left u-border-1 u-border-grey-dark-1 u-first-column u-table-cell u-table-cell-3">
                              Total
                            </td>
                            <td className="u-border-1 u-border-grey-dark-1 u-table-cell u-table-cell-4">
                              $281.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="u-checkout-placeorder-form u-form">
                      <form
                        action="#"
                        className="u-clearfix u-form-spacing-6 u-form-vertical u-inner-form"
                        style={{ padding: 10 }}
                        source="custom"
                        name="form-1"
                      >
                        <div className="u-form-group u-form-group-9 u-form-radiobutton">
                          <label className="u-label" />
                          <div className="u-form-radio-button-wrapper">
                            <div className="u-input-row">
                              <input
                                type="radio"
                                name="undefined"
                                defaultValue="Cash on delivery"
                              />
                              <label className="u-label" htmlFor="undefined">
                                Cash on delivery
                              </label>
                            </div>
                            <div className="u-input-row">
                              <input
                                type="radio"
                                name="undefined"
                                defaultValue="Store pick up"
                              />
                              <label className="u-label" htmlFor="undefined">
                                Store pick up
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="u-align-right u-form-group u-form-submit">
                          <a
                            href="#"
                            className="u-btn u-btn-submit u-button-style u-btn-1"
                          >
                            Place order
                          </a>
                          <input
                            type="submit"
                            defaultValue="submit"
                            className="u-form-control-hidden"
                          />
                        </div>
                        <div className="u-form-send-message u-form-send-success">
                          Thank you! Your message has been sent.
                        </div>
                        <div className="u-form-send-error u-form-send-message">
                          Unable to send your message. Please fix errors then try
                          again.
                        </div>
                        <input
                          type="hidden"
                          defaultValue=""
                          name="recaptchaResponse"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
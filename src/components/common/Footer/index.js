import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribeHandler = (e) => {
    e.preventDefault();
    console.log("Email Submitted");
    setEmail("");
  };
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='widget'>
              <div className='footer-text text-left'>
                <Link to='/'>
                  <img
                    src='/assets/images/version/tech-footer-logo.png'
                    alt=''
                    className='img-fluid'
                  />
                </Link>
                <p>
                  React Blog is a technology blog, we sharing marketing, news
                  and gadget articles.
                </p>
                <div className='social'>
                  <Link to='#' title='Facebook'>
                    <i className='fa fa-facebook'></i>
                  </Link>
                  <Link to='#' title='Twitter'>
                    <i className='fa fa-twitter'></i>
                  </Link>
                  <Link to='#' title='Instagram'>
                    <i className='fa fa-instagram'></i>
                  </Link>
                  <Link to='#' title='Pinterest'>
                    <i className='fa fa-pinterest'></i>
                  </Link>
                </div>

                <hr className='invisible' />

                <div className='newsletter-widget text-left'>
                  <form className='form-inline' onSubmit={subscribeHandler}>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter your email address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type='submit' className='btn btn-primary'>
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
            <div className='widget'>
              <h2 className='widget-title'>Popular Categories</h2>
              <div className='link-widget'>
                <ul>
                  <li>
                    <Link to='#'>
                      Marketing <span>(21)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      SEO Service <span>(15)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      Digital Agency <span>(31)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      Make Money <span>(22)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      Blogging <span>(66)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-lg-2 col-md-12 col-sm-12 col-xs-12'>
            <div className='widget'>
              <h2 className='widget-title'>Copyrights</h2>
              <div className='link-widget'>
                <ul>
                  <li>
                    <Link to='#'>About us</Link>
                  </li>
                  <li>
                    <Link to='#'>Advertising</Link>
                  </li>
                  <li>
                    <Link to='#'>Write for us</Link>
                  </li>
                  <li>
                    <Link to='#'>Trademark</Link>
                  </li>
                  <li>
                    <Link to='#'>License & Help</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 text-center'>
            <br />
            <div className='copyright'>
              &copy; React Blog. Design by{" "}
              <Link to='https://www.github.com/sumancfc' target='_blank'>
                Suman Shrestha
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

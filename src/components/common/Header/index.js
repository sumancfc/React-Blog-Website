import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const openCategory = (evt, catName) => {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  return (
    <header className='header'>
      <div className='container-fluid'>
        <nav className='navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse'>
          <button
            className='navbar-toggler navbar-toggler-right'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <Link className='navbar-brand' to='/'>
            <img src='/assets/images/version/tech-logo.png' alt='' />
          </Link>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down'>
                <Link
                  className='nav-link dropdown-toggle'
                  to='#'
                  id='dropdown01'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  News
                </Link>
                <ul
                  className='dropdown-menu megamenu'
                  aria-labelledby='dropdown01'
                >
                  <li>
                    <div className='container'>
                      <div className='mega-menu-content clearfix'>
                        <div className='tab'>
                          <button
                            className='tablinks active'
                            onClick={(event) => openCategory(event, "cat01")}
                          >
                            Gadgets
                          </button>
                          <button
                            className='tablinks'
                            onClick={(event) => openCategory(event, "cat02")}
                          >
                            Videos
                          </button>
                          <button
                            className='tablinks'
                            onClick={(event) => openCategory(event, "cat03")}
                          >
                            Technology
                          </button>
                        </div>

                        <div className='tab-details clearfix'>
                          <div id='cat01' className='tabcontent active'>
                            <div className='row'>
                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/gadgets'>
                                      <img
                                        src='/assets/upload/menu_2.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Gadgets</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/gadgets'>
                                        Top 10+ care advice for your toenails
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/gadgets'>
                                      <img
                                        src='/assets/upload/menu_1.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Gadgets</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/gadgets'>
                                        The secret of your beauty is handmade
                                        soap
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/gadgets'>
                                      <img
                                        src='/assets/upload/menu_4.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Gadgets</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/gadgets'>
                                        Benefits of face mask made from mud
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/gadgets'>
                                      <img
                                        src='/assets/upload/menu_3.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Gadgets</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/gadgets'>
                                        Relax with the unique warmth of candle
                                        flavor
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id='cat02' className='tabcontent'>
                            <div className='row'>
                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/videos'>
                                      <img
                                        src='/assets/upload/menu_5.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Videos</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/videos'>
                                        2017 summer stamp will have design
                                        models here
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/videos'>
                                      <img
                                        src='/assets/upload/menu_3.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Videos</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/videos'>
                                        Which color is the most suitable color
                                        for you?
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/videos'>
                                      <img
                                        src='/assets/upload/menu_2.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Videos</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/videos'>
                                        Subscribe to these sites to keep an eye
                                        on the fashion
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/videos'>
                                      <img
                                        src='/assets/upload/menu_1.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Videos</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/videos'>
                                        The most trends of this year with color
                                        combination
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id='cat03' className='tabcontent'>
                            <div className='row'>
                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/technology'>
                                      <img
                                        src='/assets/upload/menu_4.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Technology
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/technology'>
                                        One of the most beautiful ports in the
                                        world
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/technology'>
                                      <img
                                        src='/assets/upload/menu_3.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Technology
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/technology'>
                                        One of the most beautiful ports in the
                                        world
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/technology'>
                                      <img
                                        src='/assets/upload/menu_2.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Technology
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/technology'>
                                        One of the most beautiful ports in the
                                        world
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/technology'>
                                      <img
                                        src='/assets/upload/menu_1.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Technology
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='/technology'>
                                        One of the most beautiful ports in the
                                        world
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/gadgets'>
                  Gadgets
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/videos'>
                  videos
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/technology'>
                  Technology
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

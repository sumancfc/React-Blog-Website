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
                            Science
                          </button>
                          <button
                            className='tablinks'
                            onClick={(event) => openCategory(event, "cat02")}
                          >
                            Technology
                          </button>
                          <button
                            className='tablinks'
                            onClick={(event) => openCategory(event, "cat03")}
                          >
                            Social Media
                          </button>
                          <button
                            className='tablinks'
                            onClick={(event) => openCategory(event, "cat04")}
                          >
                            Car News
                          </button>
                          <button
                            className='tablinks'
                            onClick={(event) => openCategory(event, "cat05")}
                          >
                            Worldwide
                          </button>
                        </div>

                        <div className='tab-details clearfix'>
                          <div id='cat01' className='tabcontent active'>
                            <div className='row'>
                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='/science' title=''>
                                      <img
                                        src='/assets/upload/tech_menu_01.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Science</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        Top 10+ care advice for your toenails
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_02.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Science</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
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
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_03.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Science</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        Benefits of face mask made from mud
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_04.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Science</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
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
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_05.jpg'
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
                                      <Link to='tech-single.html' title=''>
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
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_06.jpg'
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
                                      <Link to='tech-single.html' title=''>
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
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_07.jpg'
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
                                      <Link to='tech-single.html' title=''>
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
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_08.jpg'
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
                                      <Link to='tech-single.html' title=''>
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
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_09.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Social Media
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        I visited the architects of Istanbul for
                                        you
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_10.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Social Media
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        Prepared handmade dish dish in the
                                        Netherlands
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_11.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Social Media
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        I recommend you visit the fairy chimneys
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_12.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>
                                        Social Media
                                      </span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        One of the most beautiful ports in the
                                        world
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id='cat04' className='tabcontent'>
                            <div className='row'>
                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_13.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Car News</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        A collection of the most beautiful shop
                                        designs
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_14.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Car News</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        America's and Canada's most beautiful
                                        wine houses
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_15.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Car News</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        The most professional ways to color your
                                        walls
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_16.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Car News</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        Stylish cabinet designs and furnitures
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id='cat05' className='tabcontent'>
                            <div className='row'>
                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_17.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Worldwide</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        Grilled vegetable with fish prepared
                                        with fish
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_18.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Worldwide</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        The world's finest and clean meat
                                        restaurants
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_19.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Worldwide</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        Fried veal and vegetable dish
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                                <div className='blog-box'>
                                  <div className='post-media'>
                                    <Link to='tech-single.html' title=''>
                                      <img
                                        src='upload/tech_menu_20.jpg'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <div className='hovereffect'></div>
                                      <span className='menucat'>Worldwide</span>
                                    </Link>
                                  </div>
                                  <div className='blog-meta'>
                                    <h4>
                                      <Link to='tech-single.html' title=''>
                                        Tasty pasta sauces and recipes
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
                <Link className='nav-link' to='tech-category-01.html'>
                  Gadgets
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='tech-category-02.html'>
                  Videos
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='tech-category-03.html'>
                  Reviews
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

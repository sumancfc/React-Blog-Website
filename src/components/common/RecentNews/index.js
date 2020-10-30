import React from "react";
import { Link } from "react-router-dom";
import RecentNewsItem from "./RecentNewsItem";
import "./RecentNews.css";

const RecentNews = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='row'></div>
        <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12'>
          <div className='page-wrapper'>
            <div className='blog-top clearfix'>
              <h4 className='pull-left'>
                Recent News
                <Link to='#'>
                  <i className='fa fa-rss'></i>
                </Link>
              </h4>
            </div>

            <RecentNewsItem />
          </div>

          <hr className='invis' />

          <div className='row'>
            <div className='col-md-12'>
              <nav aria-label='Page navigation'>
                <ul className='pagination justify-content-start'>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      1
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      2
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      3
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;

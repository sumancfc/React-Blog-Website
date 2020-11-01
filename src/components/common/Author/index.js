import React from "react";
import { Link } from "react-router-dom";
import "./Author.css";

const AboutAuthor = () => {
  return (
    <>
      <div className='authorbox clearfix'>
        <h4 className='author-title'>About author</h4>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-12'>
            <img
              src='/assets/upload/author_1.jpg'
              alt=''
              className='img-fluid rounded-circle'
            />
          </div>

          <div className='col-lg-10 col-md-10 col-sm-10 col-xs-12'>
            <h4>
              <Link to='#'>Suman</Link>
            </h4>
            <p>
              Quisque sed tristique felis. Lorem{" "}
              <Link to='#'>visit my website</Link>
              amet, consectetur adipiscing elit. Phasellus quis mi auctor,
              tincidunt nisl eget, finibus odio. Duis tempus elit quis risus
              congue feugiat. Thanks for stop Tech Blog!
            </p>

            <div className='topsocial'>
              <Link
                to='#'
                data-toggle='tooltip'
                data-placement='bottom'
                title='Facebook'
              >
                <i className='fa fa-facebook'></i>
              </Link>
              <Link
                to='#'
                data-toggle='tooltip'
                data-placement='bottom'
                title='Youtube'
              >
                <i className='fa fa-youtube'></i>
              </Link>

              <Link
                to='#'
                data-toggle='tooltip'
                data-placement='bottom'
                title='Twitter'
              >
                <i className='fa fa-twitter'></i>
              </Link>
              <Link
                to='#'
                data-toggle='tooltip'
                data-placement='bottom'
                title='Instagram'
              >
                <i className='fa fa-instagram'></i>
              </Link>
              <Link
                to='#'
                data-toggle='tooltip'
                data-placement='bottom'
                title='Website'
              >
                <i className='fa fa-link'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className='invisible' />
    </>
  );
};

export default AboutAuthor;

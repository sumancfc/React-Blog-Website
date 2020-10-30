import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    image: "/assets/upload/600_1.jpg",
    title: "Top 10 phone applications and 2017 mobile design awards",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Gadgets",
    publishedAt: "21 July, 2017",
    author: "suman",
    views: "1114",
  },
  {
    image: "/assets/upload/600_2.jpg",
    title: "A device you can use both headphones and usb",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Technology",
    publishedAt: "21 July, 2018",
    author: "suman",
    views: "1114",
  },
  {
    image: "/assets/upload/600_3.jpg",
    title: "Two brand new laptop models from ABC computer",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Development",
    publishedAt: "21 July, 2019",
    author: "suman",
    views: "4444",
  },
  {
    image: "/assets/upload/600_4.jpg",
    title: "Applications for taking photos of nature in your mobile phones",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Design",
    publishedAt: "21 July, 2019",
    author: "suman",
    views: "1114",
  },
  {
    image: "/assets/upload/600_5.jpg",
    title: "Say hello to colored strap models in smart hours",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Materials",
    publishedAt: "21 July, 2019",
    author: "suman",
    views: "4444",
  },
  {
    image: "/assets/upload/600_1.jpg",
    title: "How about evaluating your old mobile phones in different ways?",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Gadgets",
    publishedAt: "21 July, 2020",
    author: "suman",
    views: "4443",
  },
  {
    image: "/assets/upload/600_2.jpg",
    title: "Drinking coffee at the computer rests the spirit",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Materials",
    publishedAt: "21 July, 2021",
    author: "suman",
    views: "2222",
  },
  {
    image: "/assets/upload/600_3.jpg",
    title:
      "If you are considering buying a new safe for your mobile phone, be sure to read this article",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Reviews",
    publishedAt: "21 July, 2020",
    author: "suman",
    views: "4443",
  },
  {
    image: "/assets/upload/600_4.jpg",
    title: "Enjoy a summer with a colorful headset",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Materials",
    publishedAt: "21 July, 2021",
    author: "suman",
    views: "2222",
  },
  {
    image: "/assets/upload/600_5.jpg",
    title:
      "Google has developed a brand new algorithm. Forget all your knowledge!",
    link: "/single-page",
    desc:
      "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.",
    category: "Technology",
    publishedAt: "21 July, 2021",
    author: "suman",
    views: "2222",
  },
];

const RecentNewsItem = () => {
  return (
    <div className='blog-list clearfix'>
      {posts.map((post, i) => (
        <React.Fragment key={i}>
          <div className='blog-box row'>
            <div className='col-md-4'>
              <div className='post-media'>
                <Link to={post.link}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='img-fluid'
                  />
                  <div className='hovereffect'></div>
                </Link>
              </div>
            </div>

            <div className='blog-meta big-meta col-md-8'>
              <h4>
                <Link to={post.link}>{post.title}</Link>
              </h4>
              <p>{post.desc}</p>
              <small className='firstsmall'>
                <Link className='bg-category' to='#'>
                  {post.category}
                </Link>
              </small>
              <small>
                <Link to={post.link}>{post.publishedAt}</Link>
              </small>
              <small>
                <Link to='#'>by {post.author}</Link>
              </small>
              <small>
                <Link to={post.link}>
                  <i className='fa fa-eye'></i> {post.views}
                </Link>
              </small>
            </div>
          </div>
          <hr className='invisible' />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecentNewsItem;

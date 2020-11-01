// import React from "react";
// import { Link } from "react-router-dom";

// const MegaMenu = ({ posts }) => {
//   const categories = posts.reduce((allPosts, current) => {
//     return allPosts.includes(current.category)
//       ? allPosts
//       : allPosts.concat([current.category]);
//   }, []);

//   //   const openCategory = (evt, categories) => {
//   //     let i, tabcontent, tablinks;

//   //     tabcontent = document.getElementsByClassName("tabcontent");

//   //     for (i = 0; i < tabcontent.length; i++) {
//   //       tabcontent[i].style.display = "none";
//   //     }

//   //     tablinks = document.getElementsByClassName("tablinks");
//   //     for (i = 0; i < tablinks.length; i++) {
//   //       tablinks[i].className = tablinks[i].className.replace(" active", "");
//   //     }

//   //     document.getElementById(categories).style.display = "block";
//   //     evt.currentTarget.className += " active";
//   //   };

//   const openCategory = (evt, categories) => {
//     let className = "tablinks";
//   };

//   return (
//     <ul className='dropdown-menu megamenu' aria-labelledby='dropdown01'>
//       <li>
//         <div className='container'>
//           <div className='mega-menu-content clearfix'>
//             <div className='tab'>
//               {categories.map((category, i) => (
//                 <button
//                   key={i}
//                   className={className}
//                   //   onClick={(event) => openCategory(event, `${category[i]}`)}
//                   onClick={(event) => openCategory(event, `${category}`)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <div className='tab-details clearfix'>
//               {/* MenaMenu */}
//               {categories.map((category, i) => (
//                 <div key={i} id={category} className='tabcontent active'>
//                   {/* <div className='tabcontent active'> */}
//                   <div className='row'>
//                     {/* Here */}
//                     {posts
//                       .filter((item, idx) => idx < 4)
//                       .map((post) => (
//                         <div
//                           key={post.id}
//                           className='col-lg-3 col-md-6 col-sm-12 col-xs-12'
//                         >
//                           <div className='blog-box'>
//                             <div className='post-media'>
//                               <Link to={`/${post.category}/${post.id}`}>
//                                 <img
//                                   src={post.image}
//                                   alt=''
//                                   className='img-fluid'
//                                 />
//                                 <div className='hovereffect'></div>
//                                 <span className='menucat'>{post.category}</span>
//                               </Link>
//                             </div>
//                             <div className='blog-meta'>
//                               <h4>
//                                 <Link to={`/${post.category}/${post.id}`}>
//                                   {post.title}
//                                 </Link>
//                               </h4>
//                             </div>
//                           </div>
//                         </div>
//                       ))}

//                     {/* Here */}
//                   </div>
//                 </div>
//               ))}
//               {/* MegaMenu */}
//             </div>
//           </div>
//         </div>
//       </li>
//     </ul>
//   );
// };

// export default MegaMenu;

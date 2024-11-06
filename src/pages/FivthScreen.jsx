// import React from 'react';
// import './ResumeHome.css';
// const ResumeTemplates = () => {
//   return (
//     <div className="resume-templates">
//       <div className="resume-templates__container">
//         <div className="resume-templates__content">
//           <div className="resume-templates__slider-arrow-container">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="resume-templates__arrow"
//             >
//               <path
//                 d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"
//               ></path>
//             </svg>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="resume-templates__arrow"
//             >
//               <path
//                 d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"
//               ></path>
//             </svg>
//           </div>
//           <div className="resume-templates__info">
//             <h2 className="resume-templates__title">
//               Beautiful ready-to-use resume templates
//             </h2>
//             <div className="resume-templates__text">
//               Win over employers and recruiters by using one of our 25+
//               elegant, professionally-designed resume templates. Download to
//               word or PDF.
//             </div>
//             <div className="resume-templates__cta">
//               <a
//                 className="button"
//                 data-internal-event='{"name":"click_create_resume","label":"home"}'
//                 href="resume-templates.1.html"
//               >
//                 Select template
//               </a>
//             </div>
//           </div>
//           <div className="resume-templates__trustpilot">
//             <div className="resume-templates__stars">
//               <div className="resume-templates__star"></div>
//               <div className="resume-templates__star"></div>
//               <div className="resume-templates__star"></div>
//               <div className="resume-templates__star"></div>
//               <div className="resume-templates__star"></div>
//             </div>
//             <div className="resume-templates__rating">4.5 out of 5</div>
//             <div className="resume-templates__trustpilot-text">
//               based on 51,767 reviews on
//               <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://www.trustpilot.com/review/resume.io"
//                 >Trustpilot</a
//               >
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="resume-templates__slider-wrapper">
//         <div className="resume-templates__slider-container">
//           <div
//             className="resume-templates__slider-button resume-templates__slider-button--left"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"
//               ></path>
//             </svg>
//  </div>
//           <div
//             className="resume-templates__slider-button resume-templates__slider-button--right"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"
//               ></path>
//             </svg>
//           </div>
//           <div className="resume-templates__slider">
//             <div data-index="1">
//               <div className="resume-templates__item">
//                 <a
//                   className="button resume-templates__item-button"
//                   href="app/create-resume@template=sydney.html"
//                 >
//                   Use This Template
//                 </a>
//                 <a
//                   className="resume-templates__item-clickable-area"
//                   rel="nofollow"
//                   href="app/create-resume@template=sydney.html"
//                 ></a>
//                 <img
//                   alt="Sydney resume template"
//                   className="resume-templates__item-preview"
//                   data-template-bg="https://s3.resume.io/cdn-cgi/image/width=852,format=auto/uploads/local_template_image/image/487/persistent-resource/sydney-resume-templates.jpg"
//                 />
//                 <div className="resume-templates__item-name-container">
//                   <div className="resume-templates__item-name">Sydney</div>
//                   <div className="resume-templates__item-usage-number">
//                     1,300,000+ users chose this template
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-index="2">
//               <div className="resume-templates__item">
//                 <a
//                   className="button resume-templates__item-button"
//                   href="app/create-resume@template=melbourne.html"
//                 >
//                   Use This Template
//                 </a>
//                 <a
//                   className="resume-templates__item-clickable-area"
//                   rel="nofollow"
//                   href="app/create-resume@template=melbourne.html"
//                 ></a>
//                 <img
//                   alt="Melbourne resume template"
//                   className="resume-templates__item-preview"
//                   data-template-bg="https://s3.resume.io/cdn-cgi/image/width=852,format=auto/uploads/local_template_image/image/491/persistent-resource/melbourne-resume-templates.jpg"
//                 />
//                 <div className="resume-templates__item-name-container">
//                   <div className="resume-templates__item-name">Melbourne</div>
//                   <div className="resume-templates__item-usage-number">
//                     1,100,000+ users chose this template
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* ... */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeTemplates;

import React from 'react';
import './ResumeHome.css';
import { Link } from 'react-router-dom';
import image2 from '../asset/logo/image2.png'
const BuilderCta = () => {
  return (
    <div className="builder-cta section builder-cta--visual-left"  style={{marginTop:'-600px'}}>
      <div className="grid-container">
        <div className="builder-cta__main">
          <div className="builder-cta__visual">
            <div
              className="builder-cta__resume builder-cta__resume--1"
              data-lazy-bg="https://s3.resume.io/cdn-cgi/image/width=300,dpr=1,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=300,dpr=2,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 2x"
            ></div>
            <div
              className="builder-cta__resume builder-cta__resume--2"
              data-lazy-bg="https://s3.resume.io/cdn-cgi/image/width=300,dpr=1,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=300,dpr=2,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 2x"
            ></div>
            <div
              className="builder-cta__resume builder-cta__resume--3"
              data-lazy-bg="https://s3.resume.io/cdn-cgi/image/width=300,dpr=1,format=auto/uploads/local_template_image/image/503/persistent-resource/amsterdam-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=300,dpr=2,format=auto/uploads/local_template_image/image/503/persistent-resource/amsterdam-resume-templates.jpg 2x"
            >
   <img 
            src={image2}
            style={{paddingBottom:"500px"}}
            >

            </img>
            </div>
          </div>
          <div className="builder-cta__content">
            <h2 className="builder-cta__title section__title">
              Try our professional Resume builder now!
            </h2>
            <div className="builder-cta__text">
              Save time with our easy 3-step resume builder. No more
              writer’s block or formatting difficulties in Word. Rapidly
              make a perfect resume employers love.
            </div>
            <div className="builder-cta__buttons">
              <div
                className="button builder-cta__cta"
                data-internal-event='{"name":"click_create_resume","label":"home"}'
                href="resume-templates.1.html"
              >
                 <Link to="/HomeContainer" className="home__button button"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                    "&:active": {
                      backgroundColor: "#444",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    },
                  }}
                >
                  Create my resume
                </Link>
              </div>
              <a
                className="button button--outline builder-cta__cta"
                href="resume-examples.1.html"
              >
                  <Link to="/HomeContainer" className="home__button button"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                    "&:active": {
                      backgroundColor: "#444",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    },
                  }}
                >
                Resume examples
                  {/* Create /my resume */}
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderCta;
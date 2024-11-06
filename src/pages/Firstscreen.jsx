// import React from 'react';
// import './ResumeHome.css';
// import { Link } from 'react-router-dom';
// const Hero = () => {
//   return (
//     <div className="home__hero">
//       <div className="home__hero-container">
//         <div className="home__hero-main">
      
//           <div className="home__hero-main-content">
//             <h1 className="home__hero-main-title">Online resume builder</h1>
//             <h2 className="home__hero-title">
//               Only 2% of resumes make it past the first round. Be in the top 2%
//             </h2>
//             <p className="home__hero-subtitle">
//               Use professional field-tested resume templates that follow the exact
//               ‘resume rules’ employers look for. Easy to use and done within
//               minutes - try now for free!
//             </p>
//             <div className="home__hero-cta">
//               <div className="home__hero-button">
//                 <div
//                   className="home__button button"
//                   data-internal-event='{"name":"click_create_resume","label":"home"}'
                 
//                 >
//                   <Link to={"/AllTemplate"} >
//                   Create my resume
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="home__hero-counter">
//             <div className="home__hero-animated-label home__hero-counter-wrapper">
//               <div className="home__hero-counter-number">33,249</div>
//             </div>
//             resumes created today
//           </div>
//           <a
//             className="home__hero-resume"
//             data-internal-event='{"name":"click_hero_template","label":"home"}'
          
//           >
//             <img
//               srcset="
//                 https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=0.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg   385w,
//                 https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=0.75,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg  578w,
//                 https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.0,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg   770w,
//                 https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg  1155w
//               "
//               sizes="(max-width: 767px) 385px, 770px"
//               width="770"
//               height="350"
//               className="home__hero-resume-image"
//               alt="Create my resume"
//               onLoad={(e) => e.target.parentNode.classList.add('home__hero-resume--loaded')}
//               src="https://s3.resume.io/cdn-cgi/image/width=770,height=350,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React from 'react';
import './ResumeHome.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="home__hero" style={{backgroundColor:'#ccc'}}>
      <div className="home__hero-container">
        <div className="home__hero-main">
      
          <div className="home__hero-main-content">
            <h1 className="home__hero-main-title">Online resume builder</h1>
            <h2 className="home__hero-title">
              Only 2% of resumes make it past the first round. Be in the top 2%
            </h2>
            <p className="home__hero-subtitle">
              Use professional field-tested resume templates that follow the exact
              ‘resume rules’ employers look for. Easy to use and done within
              minutes - try now for free!
            </p>
            <div className="home__hero-cta">
              <div className="home__hero-button">
                {/* Removed <a> tag */}
                <Link to="/AllTemplate" className="home__button button"
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
            </div>
          </div>
          <div className="home__hero-counter">
            <div className="home__hero-animated-label home__hero-counter-wrapper">
              <div className="home__hero-counter-number">33,249</div>
            </div>
            resumes created today
          </div>
          <a
            className="home__hero-resume"
            data-internal-event='{"name":"click_hero_template","label":"home"}'
          >
            <img
              srcset="
                https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=0.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg   385w,
                https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=0.75,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg  578w,
                https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.0,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg   770w,
                https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg  1155w
              "
              sizes="(max-width: 767px) 385px, 770px"
              width="770"
              height="350"
              className="home__hero-resume-image"
              alt="Create my resume"
              onLoad={(e) => e.target.parentNode.classList.add('home__hero-resume--loaded')}
              src="https://s3.resume.io/cdn-cgi/image/width=770,height=350,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

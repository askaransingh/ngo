import React from 'react';
import './ResumeHome.css';
import { Link } from 'react-router-dom';
import image1 from '../asset/logo/Screenshot 2024-10-16 081237.png'
const HomeResumeMaker = () => {
  return (
    <div className="home-resume-maker section" style={{marginTop:'-500px'}}>
      <div className="grid-container">
        <div className="home-resume-maker__header">
          <div
            className="home-resume-maker__header-visual"
            // data-lazy-bg={image1}
          >
            <img 
            src={image1}
            style={{paddingBottom:"400px"}}
            >

            </img>
          </div>
          <div className="home-resume-maker__header-content">
            <h2 className="home-resume-maker__header-title section__title">
              Use the best resume maker as your guide
            </h2>
            <div className="home-resume-maker__header-description">
              Getting that dream job can seem like an impossible task. We’re
              here to change that. Give yourself a real advantage with the
              best online resume maker: created by experts, improved by
              data, trusted by millions of professionals.
            </div>
            <div className="home-resume-maker__header-actions">
              <div
                className="button"
                data-internal-event='{"name":"click_create_resume","label":"home"}'
                href="resume-templates.1.html"
              >
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
              <button
                className="home-resume-maker__watch button button--outline"
                data-iframe-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="14"
                  fill="none"
                  className="home-resume-maker__watch-icon"
                >
                  <path
                    d="M1.5.9a1 1 0 00-1.5.8v10.6a1 1 0 001.5.8l9-5.2a1 1 0 000-1.8L1.5 1z"
                  ></path>
                </svg> */}
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
                Watch video
                  {/* Create my resume */}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="home-resume-maker__features"  style={{marginTop:'-400px'}}>
          <div className="home-resume-maker__feature">
            <div
              className="home-resume-maker__feature-icon"
              data-lazy-bg="/"
            ></div>
            <strong className="home-resume-maker__feature-title">
              Make a resume that wins interviews
            </strong>
            <div className="home-resume-maker__feature-description">
              <p>
                Use our resume maker with its advanced creation tools to
                tell a professional story that engages recruiters, hiring
                managers and even CEOs.
              </p>
            </div>
          </div>
          <div className="home-resume-maker__feature">
            <div
              className="home-resume-maker__feature-icon"
              data-lazy-bg="/assets/landing/home/resume-maker/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg"
            ></div>
            <strong className="home-resume-maker__feature-title">
              Resume writing made easy
            </strong>
            <div className="home-resume-maker__feature-description">
              <p>
                Resume writing has never been this effortless. Pre-generated
                text, visual designs and more - all already integrated into
                the resume maker. Just fill in your details.
              </p>
            </div>
          </div>
          <div className="home-resume-maker__feature">
            <div
              className="home-resume-maker__feature-icon"
              data-lazy-bg="/assets/landing/home/resume-maker/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg"
            ></div>
            <strong className="home-resume-maker__feature-title">
              A recruiter-tested CV maker tool
            </strong>
            <div className="home-resume-maker__feature-description">
              <p>
                <a href="https://resume.io/resume-builder">
                  Our resume builder
                </a>
                and its pre-generated content are tested by recruiters and
                IT experts. We help your resume become truly competitive in
                the hiring process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeResumeMaker;
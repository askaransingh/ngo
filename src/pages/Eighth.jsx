import React from 'react';
import './ResumeHome.css';
import { Link } from 'react-router-dom';
const HomeHow = () => {
  return (
    <div className="home-how section" style={{marginTop:'-600px', marginBottom:'0'}}>
      <div className="grid-container">
        <div className="home-how__header">
          <div
            className="home-how__icon"
            data-lazy-bg="/assets/landing/home/how/icon-580ea8bcc1e527c9acb382f70dbe3b5f81dc9a03428cfcf7ee715fd4266afc0c.svg"
          ></div>
          <h2 className="home-how__title section__title">
            Create perfect resumes for the modern job market
          </h2>
          <div className="home-how__description">
            Creating a resume has never been this easy! In three simple steps,
            create the perfect document to impress hiring managers and employers.
            Minimum time, maximum professional quality.
          </div>
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
        </div>
        <div className="home-how__content">
          <div className="home-how__tabs">
            <div className="home-how__tab">
              1. Sign Up
              <div className="home-how__tab-bar">
                <div className="home-how__tab-bar-progress"></div>
              </div>
            </div>
            <div className="home-how__tab">
              2. Create
              <div className="home-how__tab-bar">
                <div className="home-how__tab-bar-progress"></div>
              </div>
            </div>
            <div className="home-how__tab">
              3. Download
              <div className="home-how__tab-bar">
                <div className="home-how__tab-bar-progress"></div>
              </div>
            </div>
          </div>
          <div className="home-how__panes">
            <div className="home-how__panes-list">
              <div
                className="home-how__pane"
                data-background="/assets/landing/home/how/sign_up-a585240eda115cb3f8330e8a6c4150b0e758a8eab31f2c4b5f80fe19bbcc4438.svg"
              >
                {/* <div className="home-how__pane-title">Your First Steps</div> */}
                <div className="home-how__pane-description">
                  {/* We’ve made sure that signing up to our resume maker tools is
                  even more convenient than usual. Use one of the most common
                  networks used by professionals (LinkedIn, Facebook or your
                  Google account) or simply skip this step and enter your name
                  and email address. We keep your data strictly confidential. */}
                </div>
              </div>
              <div
                className="home-how__pane"
                data-background="/assets/landing/home/how/create-578fd61e27b46d9d4ade606c81e4e308ce5c265883e1ffa2af97b6481e1d2aec.svg"
              >
                <div className="home-how__pane-title">
                  Achieve Beauty With Ease
                </div>
                <div className="home-how__pane-description">
                  Choose one of our beautiful, professionally designed resume or
                  cover letter formats. Add your personal info and choose and
                  edit the necessary sections. Customize the layout and visuals
                  as much (or as little) as you want. We provide a ton of ready
                  content with lots of room for your own creativity and needs.
                </div>
              </div>
              <div
                className="home-how__pane"
                data-background="/assets/landing/home/how/download-9d511b6bc312d3fd9745f0804043fb4ec02e73a2739cd0056c895ad7d92fa5e0.svg"
              >
                <div className="home-how__pane-title">Now It’s Yours!</div>
                <div className="home-how__pane-description">
                  Export your new resume, CV or application letter in one of the
                  available formats. PDF will provide you with the best and most
                  consistent visual formatting. Word files allow you to edit the
                  document further or submit the resume to an online application
                  system. You can also share your career updates online.
                </div>
              </div>
            </div>
          </div>
          <div className="home-how__bullets"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHow;
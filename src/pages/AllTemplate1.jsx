import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div
      className="templates-root__header templates-root__header--without-create-resume-button"
    >
      <h1 className="templates-root__header-title">
        Job-winning resume templates
      </h1>
      <p className="templates-root__header-subtitle">
        Each resume template is designed to follow the exact rules you need to
        get hired faster. Use our resume templates and get free access to 18
        more career tools!
      </p>
      <div className="templates-root__header-action">
        <div
          className="templates-root__header-button button"
          data-internal-event={{ name: "click_create_resume", label: "templates_resume" }}
          // href="../app/create-resume.html"
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
     </div>
  );
}

export default Header;
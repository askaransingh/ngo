import React from 'react';
import { Link } from 'react-router-dom';
const TemplatesHeader = () => {
  return (
    <div className="templates-root__container">
      <div className="templates-root__header templates-root__header--without-create-resume-button">
        <h1 className="templates-root__header-title">
          Job-winning professional resume templates
        </h1>
        <p className="templates-root__header-subtitle">
          Propel your career prospects with our precision-designed professional resume templates, offering the perfect blend of professionalism and style for ambitious job seekers.
        </p>
        <div className="templates-root__header-action">
          <a
            className="templates-root__header-button button"
            data-internal-event='{"name":"click_create_resume","label":"templates_resume"}'
            href="../app/create-resume.1.html"
          >
                 <Link to={"/HomeContainer"}
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
              }}>
            
            Create my resume
            {/* Explore your potential */}
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TemplatesHeader;
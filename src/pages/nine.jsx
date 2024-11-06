import React from 'react';
import './ResumeHome.css';
const WebsiteStats = () => {
  return (
    <div className="website-stats section website-stats--default">
      <div className="website-stats__container grid-container">
        <div className="website-stats__title">
          Join over <mark>40,869,000</mark> users worldwide
        </div>
        <div className="website-stats__text">
          Start for free — try our resume builder now
        </div>
        <div className="website-stats__cta">
          <a
            className="website-stats__button button"
            data-internal-event='{"name":"click_create_resume","label":"home"}'
            href="resume-templates.1.html"
          >
            Create my resume
          </a>
        </div>
      </div>
    </div>
  );
};
export default WebsiteStats;
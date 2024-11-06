import React from 'react';
import './ResumeHome.css';
import { Link } from 'react-router-dom';
const VideoBlock = () => {
  return (
    <div className="landing__video_block_section section">
      <div className="landing__video_block-title">
        So much more than a resume builder
      </div>
      <div className="landing__video_container" style={{width:'1400px', height:'1000px', marginLeft:'50px',marginBottom:'0px'}}>
        <div className="landing__video_block-video__container" id="video-block-player-container">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder="0"
            height="315"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/1rzhcES14mo?si=IUjMlee8N8HAcYvR"
            title="YouTube video player"
            width="560"
            // marginBottom="0"
          >
            allowfullscreen
          </iframe>
        </div>
      </div>
      <div className="landing__video_block-description_container" style={{marginBottom:'0px',marginTop:'-280px'}}>
        <div className="landing__video-description" style={{marginBottom:'-10px',marginTop:'0px'}}>
          Your job starts with a resume, but what about the interview? When you build your resume, you also get access to 18 powerful career tools. It’s the complete career toolkit, all in one place. If you’re here, you’re already on the way up.
        </div>
        <div className="landing__video_cta">
          <a
            className="button"
            data-internal-event='{"name":"landing_cio_block_cta","label":"home"}'
            // href="app.1.html"
          >
            <Link to={"/HomeContainer"}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginBottom:'0px',
                marginTop:'0px',
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "#333",
                },
                "&:active": {
                  backgroundColor: "#444",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                },
              }}>
            
            Explore your potential
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
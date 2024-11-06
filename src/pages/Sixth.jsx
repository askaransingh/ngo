import React from 'react';
import './ResumeHome.css';
import image3 from '../asset/logo/image3.png'
import { Link } from 'react-router-dom';
const HomeLetterMaker = () => {
  return (
    <div className="home-letter-maker section"  style={{marginTop:'-900px'}}>
      <div className="grid-container">
        <div className="home-letter-maker__main">
          <div className="home-letter-maker__content">
            <div className="home-letter-maker__label">Secure your dream job</div>
            <h2 className="home-letter-maker__title section__title">
              Create a professional resume in minutes. Use our cover letter
              maker.
            </h2>
            <div className="home-letter-maker__description">
              Our resume maker allows you to write amazing professional
              pitches in minutes rather than hours. No more writer’s block, no
              more searching for the convincing phrases or agonizing over
              formatting. Be persuasive without effort!
            </div>
            <a className="button" href="cover-letter-templates.1.html">
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
            </a>
          </div>
          <div
            className="home-letter-maker__visual"
            data-lazy-bg="/assets/landing/home/letter-maker/visual-13cdbab63916313dab4caff704097bae2aafc990be5e86f9cc50260bffe6bc75.svg"
          >
               <img 
            src={image3}
            style={{paddingBottom:"500px"}}
            >

            </img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLetterMaker;
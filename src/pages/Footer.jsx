import React from 'react';
import './ResumeHome.css';

const Footer = () => {
  return (
    <footer
      className="footer footer__compact"
      data-text="Applying for jobs and hearing crickets? With Resume.io you can easily create a winning, field-tested resume in a matter of minutes. Try it for free, here!"
      data-title="Resume.io"
      data-twitter="With resume.io you can easily create a winning, field-tested resume in a matter of minutes. Try it for free!"
      data-url="https://resume.io"
      style={{backgroundColor:'black', color:'white', marginTop:'-300px'}}
    >
      <div className="footer__container">
        <div className="footer__cta">
          <a
            className="footer__cta-button"
            data-internal-event='{"name":"click_create_resume","label":"examples_cover_letter_show"}'
            href="app/create-resume.1.html"
          >
            <div className="footer__cta-text">Create a resume</div>
            <div className="footer__cta-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="footer__cta-icon"
              >
                <path
                  d="m9.11651618 7.57183221 1.88348382-2.07183221 5.9417419 5.4640839c.6110108.5554643.6110108 1.5163679 0 2.0718322l-5.9417419 5.4640839-1.88348382-2.0718322 4.80223422-4.4281678z"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="footer__main">
          <div className="footer__social">
            <div className="footer__social-title">
              <p>
                Connect with us <br />
                on social media
              </p>
            </div>
            <div className="footer__social-list">
              <a
                className="footer__social-link"
                data-lazy-bg="/assets/landing/footer/linkedin-ed90f946fba84a93756afa33dc98beae5bb2196747686f16a6df411eb7391a92.svg"
                data-type="linkedin"
                href="https://nl.linkedin.com/company/resume-io"
                rel="noopener noreferrer"
                target="_blank"
              ></a>
              <a
                className="footer__social-link"
                data-type="youtube"
                href="https://www.youtube.com/@resumeio"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  className="footer__social-link-icon"
                >
                  <path
                    clip-rule="evenodd"
                    d="m22.59 19.04c.45-.4.75-.92.87-1.5.32-1.83.5-3.68.54-5.54 0-1.86-.19-3.71-.54-5.54a2.75 2.75 0 0 0 -.87-1.5 3.08 3.08 0 0 0 -1.64-.74 66.5 66.5 0 0 0 -17.96 0c-.61.08-1.19.34-1.64.74s-.75.92-.87 1.5a30.72 30.72 0 0 0 -.48 5.54c0 1.86.15 3.71.48 5.54.12.58.42 1.1.87 1.5s1.03 .66 1.64.74a66.5 66.5 0 0 0 17.96 0 3.08 3.08 0 0 0 1.64-.74zm-5.83-7.04-7.18-3.92v7.84z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                className="footer__social-link"
                data-lazy-bg="/assets/landing/footer/pinterest-3ff483f03a3e2f1027c7f7acd8d19c776e59885edfdf98eb853423f67f81efd3.svg"
                data-type="pinterest"
                href="https://nl.pinterest.com/resumeio/"
                rel="noopener noreferrer"
                target="_blank"
              ></a>
              <a
                className="footer__social-link"
                data-type="instagram"
                href="https://www.instagram.com/resume.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="footer__social-link-icon"
                  data-lazy-bg="/assets/landing/footer/instagram-1328b79f86cad877a2b0717880ff52eae22b37410f127037b1493c5c8a38f203.svg"
                ></span>
              </a>
              <a
                className="footer__social-link"
                data-lazy-bg="/assets/landing/footer/facebook-5a0e2cc900e7f33f9a20573a7008db716e315d2462852b05b105a792bbc8a8a0.svg"
                data-type="facebook"
                href="https://www.facebook.com/resume.io/"
                rel="noopener noreferrer"
                target="_blank"
              ></a>
              <a
                className="footer__social-link"
                data-type="tiktok"
                href="https://www.tiktok.com/@resume.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="footer__social-link-icon"
                  data-lazy-bg="/assets/landing/footer/tiktok-f39a9bb4041d8012f3a7d4683c3ec47f45b623d031093bc5a3fcb48a64bec41b.svg"
                ></span>
              </a>
              <a
                className="footer__social-link"
                data-type="spotify"
                href="https://open.spotify.com/show/2hMZ6hrQo8ydPeeCkniiWV"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="footer__social-link-icon"
                  data-lazy-bg="/assets/landing/footer/spotify-6986915d05e9136d1d613fa10b29ecf11b268544151d057a25d5878e78a8084e.svg"
                ></span>
              </a>
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__links-section">
              <div className="footer__links-block">
                <div className="footer__links-title">
                  Job seekers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="footer__links-icon"
                  >
                    <path
                      d="m9.11651618 7.57183221 1.88348382-2.07183221 5.9417419 5.4640839c.6110108.5554643.6110108 1.5163679 0 2.0718322l-5.9417419 5.4640839-1.88348382-2.0718322 4.80223422-4.4281678z"
                    ></path>
                  </svg>
                </div>
                <div className="footer__links-list">
                  <a
                    className="footer__links-item"
                    href="app/create-resume.1.html"
                  >
                    Create a resume
                  </a>
                  <a
                    className="footer__links-item"
                    href="resume-examples.1.html"
                  >
                    Resume examples
                  </a>
                  <a
                    className="footer__links-item"
                    href="resume-templates.1.html"
                  >
                    Resume templates
                  </a>
                  <a
                    className="footer__links-item"
                    href="cover-letter-templates.1.html"
                  >
                    Cover Letter Templates
                  </a>
                  <a className="footer__links -item" href="app/job-search.html">
                    Job Search
                  </a>
                </div>
              </div>
              <div className="footer__links-block">
                <div className="footer__links-title">
                  Career Resources
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="footer__links-icon"
                  >
                    <path
                      d="m9.11651618 7.57183221 1.88348382-2.07183221 5.9417419 5.4640839c.6110108.5554643.6110108 1.5163679 0 2.0718322l-5.9417419 5.4640839-1.88348382-2.0718322 4.80223422-4.4281678z"
                    ></path>
                  </svg>
                </div>
                <div className="footer__links-list">
                  <a
                    className="footer__links-item"
                    href="blog/resume-help.html"
                  >
                    Resume Help
                  </a>
                  <a
                    className="footer__links-item"
                    href="blog/job-interview.html"
                  >
                    Job Interview
                  </a>
                  <a className="footer__links-item" href="blog/career.html">
                    Career
                  </a>
                  <a
                    className="footer__links-item"
                    href="blog/cover-letter.html"
                  >
                    Cover Letter
                  </a>
                  <a className="footer__links-item" href="blog.1.html">
                    Blog
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__links-section">
              <div className="footer__links-block">
                <div className="footer__links-title">
                  Our company
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="footer__links-icon"
                  >
                    <path
                      d="m9.11651618 7.57183221 1.88348382-2.07183221 5.9417419 5.4640839c.6110108.5554643.6110108 1.5163679 0 2.0718322l-5.9417419 5.4640839-1.88348382-2.0718322 4.80223422-4.4281678z"
                    ></path>
                  </svg>
                </div>
                <div className="footer__links-list">
                  <a className="footer__links-item" href="about.html">
                    About Us
                  </a>
                  <a className="footer__links-item" href="pricing.html">
                    Pricing
                  </a>
                  <a className="footer__links-item" href="sponsorship.html">
                    Sponsorship Program
                  </a>
                  <a
                    className="footer__links-item"
                    href="https://www.dropbox.com/sh/x6sbabxy3n90wki/AAC-8qc88sPG-09K91n58247a?dl=0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Media Kit
                  </a>
                  <a className="footer__links-item" href="affiliates.html">
                    Affiliates
                  </a>
                </div>
              </div>
              <div className="footer__links-block">
                <div className="footer__links-title">
                  Support
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="footer__links-icon"
                  >
                    <path
                      d="m9.11651618 7.57183221 1.88348382-2.07183221 5.9417419 5.4640839c.6110108.5554643.6110108 1.5163679 0 2.0718322l-5.9417419 5.4640839-1.88348382-2.0718322 4.80223422-4.4281678z"
                    ></path>
                  </svg>
                </div>
                <div className="footer__links-list">
                  <a
                    className="footer__links-item"
                    href="uk/faq.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAQ
                  </a>
                  <a className="footer __links-item" href="contact.1.html">
                    Contact Us
                  </a>
                  <a className="footer__links-item" href="tos.html">
                    Terms of Service
                  </a>
                  <a className="footer__links-item" href="privacy.html">
                    Privacy
                  </a>
                  <a
                    className="footer__links-item"
                    href="right-of-withdrawl.html"
                  >
                    Right of Withdrawal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__country">
          <a
            className="footer__country-cprw"
            data-lazy-bg="/assets/landing/shared/cprw-a59f8dc575179f1a37daeb8ae27d6c4ff3dc2d19a264ef8b762bb90099a327e6.png"
            href="https://parwcc.com/"
          ></a>
          <div className="footer__country-switch">
            <div className="footer__country-container">
              <div
                className="footer__country-icon"
                data-lazy-bg="/assets/landing/shared/flags/en-807ba5f578d8fba5ac393de2e4aee8fe3593b74c5ad8111fa1800453775c0347.png"
              ></div>
              <div className="footer__country-name">International</div>
            </div>
            <div className="footer__copyright">Copyright 2024 - Resume.io</div>
          </div>
          <div className="footer__country-cio">
            <p className="cio_redirect_text_pre">
              More than a resume. Resume.io is a part of
            </p>
            <div className="footer__country-cio-container">
              <div className="cio_redirect_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="24"
                  viewBox="0 0 96 24"
                  fill="none"
                  className="footer__cta-icon"
                >
                  <path
                    d="M9.3 2.69922C4.16376 2.69922 0 6.86298 0 11.9992C0 17.1355 4.16376 21.2992 9.3 21.2992V2.69922Z"
                    fill="#2F8DEB"
                  ></path>
                  <circle
                    cx="19.4992"
                    cy="11.9992"
                    r="9.3"
                    fill="#A0D6FA"
                  ></circle>
                  <path
                    d="M38.9892 17.1914C36.849 17.1914 35.0394 15.347 35.0394 13.0328C35.0394 10.7186 36.849 8.8742 38.9892 8.8742C40.9554 8.8742 42.33 10.4402 42.6432 11.9888H40.9206C40.7466 11.345 40.1202 10.4924 38.9892 10.4924C37.7538 10.4924 36.762 11.5364 36.762 13.0328C36.762 14.5466 37.7538 15.5906 38.9892 15.5906C40.1202 15.5906 40.7466 14.7206 40.9206 14.0768H42.6432C42.33 15.6254 40.9554 17.1914 38.9892 17.1914ZM47.0826 8.8742C49.014 8.8742 50.2494 10.1792 50.2494 12.0932V17H48.9618L48.6486 16.1126H48.579C48.2484 16.5128 47.5002 17.1914 46.2474 17.1914C44.6988 17.1914 43.5852 16.13 43.5852 14.825C43.5852 13.2416 45.0816 12.2324 47.274 12.2324H48.5268V11.9714C48.5268 11.0144 47.9352 10.4228 47.0652 10.422 8C46.1952 10.4228 45.7602 10.9796 45.6558 11.4842H43.9506C44.0724 10.1618 45.1686 8.8742 47.0826 8.8742ZM46.5954 15.7472C47.796 15.7472 48.5268 14.912 48.5268 13.9724V13.4852H47.274C45.9342 13.4852 45.3078 13.955 45.3078 14.6858C45.3078 15.2948 45.7602 15.7472 46.5954 15.7472ZM53.8667 17H52.1441V9.0656H53.4317L53.7449 9.953H53.8319C54.0581 9.6224 54.7715 8.8742 55.7807 8.8742C56.0591 8.8742 56.2505 8.8916 56.4593 8.9612V10.6664C56.2331 10.6142 56.0243 10.5968 55.7459 10.5968C54.6323 10.5968 53.8667 11.3624 53.8667 12.6326V17ZM64.5482 12.8588C64.5482 13.259 64.5134 13.5374 64.4612 13.7114H58.5974C58.8236 14.912 59.6588 15.6428 60.7898 15.6428C61.6772 15.6428 62.2166 15.2078 62.495 14.8076H64.2872C63.8348 15.956 62.5472 17.1914 60.8072 17.1914C58.6148 17.1914 56.8574 15.3992 56.8574 13.0328C56.8574 10.7186 58.667 8.8742 60.7724 8.8742C62.8952 8.8742 64.5482 10.6142 64.5482 12.8588ZM60.7724 10.4228C59.711 10.4228 58.8236 11.1884 58.58 12.4064H62.8952C62.6864 11.2406 61.8512 10.4228 60.7724 10.4228ZM73.3161 12.8588C73.3161 13.259 73.2813 13.5374 73.2291 13.7114H67.3653C67.5915 14.912 68.4267 15.6428 69.5577 15.6428C70.4451 15.6428 70.9845 15.2078 71.2629 14.8076H73.0551C72.6027 15.956 71.3151 17.1914 69.5751 17.1914C67.3827 17.1914 65.6253 15.3992 65.6253 13.0328C65.6253 10.7186 67.4349 8.8742 69.5403 8.8742C71.6631 8.8742 73.3161 10.6142 73.3161 12.8588ZM69.5403 10.4228C68.4789 10.4228 67.5915 11.1884 67.3479 12.4064H71.6631C71.4543 11.2406 70.6191 10.4228 69.5403 10.4228ZM76.5683 17H74.8457V9.0656H76.1333L76.4465 9.953H76.5335C76.7597 9.6224 77.4731 8.8742 78.4823 8.8742C78.7607 8.8742 78.9521  8.8916 79.1609 8.9612V10.6664C78.9347 10.6142 78.7259 10.5968 78.4475 10.5968C77.3339 10.5968 76.5683 11.3624 76.5683 12.6326V17ZM80.2142 17.1914C79.5878 17.1914 79.118 16.7042 79.118 16.0952C79.118 15.4862 79.5878 14.999 80.2142 14.999C80.8232 14.999 81.3104 15.4862 81.3104 16.0952C81.3104 16.7042 80.8232 17.1914 80.2142 17.1914ZM83.736 7.9694C83.1792 7.9694 82.7268 7.5344 82.7268 6.9602C82.7268 6.3686 83.1792 5.951 83.736 5.951C84.2928 5.951 84.7452 6.3686 84.7452 6.9602C84.7452 7.5344 84.2928 7.9694 83.736 7.9694ZM84.5886 17H82.866V9.0656H84.5886V17ZM90.0847 17.1914C87.9445 17.1914 86.1349 15.347 86.1349 13.0328C86.1349 10.7186 87.9445 8.8742 90.0847 8.8742C92.2249 8.8742 94.0171 10.7186 94.0171 13.0328C94.0171 15.347 92.2249 17.1914 90.0847 17.1914ZM90.0847 15.5906C91.3027 15.5906 92.2945 14.5466 92.2945 13.0328C92.2945 11.5364 91.3027 10.4924 90.0847 10.4924C88.8493 10.4924 87.8575 11.5364 87.8575 13.0328C87.8575 14.5466 88.8493 15.5906 90.0847 15.5906Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <p className="cio_redirect_text_post">
                product ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
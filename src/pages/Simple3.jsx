import React from "react";
import resume from "../asset/images/resume.jpg";
import resume4 from "../asset/images/resume (4).jpg";
import resume6 from "../asset/images/resume (6).jpg";
import resume7 from "../asset/images/resume (7).jpg";
import resume9 from "../asset/images/resume (9).jpg";
// import resume8 from "../asset/images/resume (8).jpg";
import resume10 from "../asset/images/resume (10).jpg";
import resume11 from "../asset/images/resume (11).jpg";
import resume15 from "../asset/images/resume (15).jpg";
import resume16 from "../asset/images/resume (16).jpg";
import resume17 from "../asset/images/resume (17).jpg";
import resume18 from "../asset/images/resume (18).jpg";
import resume22 from "../asset/images/resume (22).jpg";
import resume21 from "../asset/images/resume (21).jpg";
import { Link } from 'react-router-dom';
const TemplatesGrid = () => {
  return (
    <div className="templates-grid">
       <div className="templates-grid__cell" data-name="london">
          <div
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "london",
            }}
            // href="/resume.io/Edit1Template.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
                <Link to={"/resumeDetail/1727450945074"}>
                <div
                  className="templates-card__preview"
                  title="London Template"
                  style={{ height: 100, width: "100%" }}
                >
                    <img
                      src={resume}
                      width={475}
                      alt="resume"
                      style={{ objectFit: "cover", paddingTop: "30px" }}
                    />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                  </Link>

                <div className="templates-card__options">
                  <div className="templates-card__mono">
                    <div className="templates-card__mono-icon"></div>
                    <div className="templates-card__mono-text">Monochrome</div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">London</div>
              <div className="templates-card__caption">
                Classically structured resume template, for a robust career
                history.
              </div>
            </div>
          </div>
        </div>

        <div className="templates-grid__cell" data-name="santiago">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "santiago",
            }}
            // href="/resume.io/Edit2Template.html"
          >
             <Link to={"/resumeDetail/1727532236798"}>
            <div className="templates-card__body">
              <div className="templates-card__content">
             
                <div
                  className="templates-card__preview"
                  title="Santiago Template"
                  style={{ height: 100, objectFit: "cover" }}
                  // style={{ height: '200px', width: '100%', overflow: 'hidden' }}
                >
                  <img
                    src={resume4}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "70px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                  {/* <Link/> */}
                <div className="templates-card__options">
                  <div className="templates-card__mono">
                    <div className="templates-card__mono-icon"></div>
                    <div className="templates-card__mono-text">Monochrome</div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <div className="templates-card__footer">
              <div className="templates-card__name">Santiago</div>
              <div className="templates-card__caption">
                Classic full-page resume template with sizable resume sections.
              </div>
            </div>
          </a>
        </div>
        {/* <Link to={"/resumeDetail/1727558309312"}> */}
        <div className="templates-grid__cell" data-name="singapore">
          <div
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "singapore",
            }}
            // href="/resume.io/Edit3Template3.html"
          >
         
              
            <div className="templates-card__body">
              <div className="templates-card__content">
              {/* <Link to={"/resumeDetail/1727450945074"}> */}
              <Link to={"/resumeDetail/1727558309312"}>
                <div
                  className="templates-card__preview"
                  title="Singapore Template"
                  style={{ height: 100, objectFit: "cover" }}
                >
               
                  <img
                    src={resume6}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "130px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__mono">
                    <div className="templates-card__mono-icon"></div>
                    <div className="templates-card__mono-text">Monochrome</div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Link/> */}
            <div className="templates-card__footer">
              <div className="templates-card__name"> Singapore</div>
              <div className="templates-card__caption">
                A modern resume template with a bold header and a clean layout.
              </div>
            </div>
          </div>
        </div>
        {/* </Link> */}

        <div className="templates-grid__cell" data-name="oslo">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "oslo",
            }}
            href="/resume.io/Edit4Template.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727563625154"}>
                <div
                  className="templates-card__preview"
                  title="Oslo Template"
                  style={{ height: 100, objectFit: "cover" }}
                >
                
                  <img
                    src={resume7}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "200px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item"
                      data-color="#303030"
                      style={{ backgroundColor: "#303030" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#7E918F"
                      style={{ backgroundColor: "#7E918F" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#837A74"
                      style={{ backgroundColor: "#837A74" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#7B7F82"
                      style={{ backgroundColor: "#7B7F82" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#B7A39D"
                      style={{ backgroundColor: "#B7A39D" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Oslo</div>
              <div className="templates-card__caption">
                Reliable and elegant image. Minimalist single column outline.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="paris">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "paris",
            }}
            href="/resume.io/Edit5Template.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727596711321"}>
                <div
                  className="templates-card__preview"
                  title="Paris Template"
                  style={{ height: 100, objectFit: "cover" }}
                >
               
                  <img
                    src={resume9}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "70px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item"
                      data-color="#00C571"
                      style={{ backgroundColor: "#00C571" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#2196F3"
                      style={{ backgroundColor: "#2196F3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#673AB7"
                      style={{ backgroundColor: "#673AB7" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#000000"
                      style={{ backgroundColor: "#000000" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Paris</div>
              <div className="templates-card__caption">
                A great blend of personal charm, readability and elegance.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="berlin">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "berlin",
            }}
            href="/resume.io/Edit6Template.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727597445828"}>
                <div
                  className="templates-card__preview"
                  title="Berlin Template"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (10).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume10}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "70px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__mono">
                    <div className="templates-card__mono-icon"></div>
                    <div className="templates-card__mono-text">Monochrome</div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Berlin</div>
              <div className="templates-card__caption">
                Modern resume template with bold, clean formatting.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="geneva">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "geneva",
            }}
            // href="/resume.io/Edit7Template.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727599237248"}>
                <div
                  className="templates-card__preview"
                  title="Geneva Template"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (11).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume11}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "30px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item"
                      data-color="#2053BB"
                      style={{ backgroundColor: "#2053BB" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FFF494"
                      style={{ backgroundColor: "#FFF494" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#153547"
                      style={{ backgroundColor: "#153547" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#80A190"
                      style={{ backgroundColor: "#80A190" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#D2F9D4"
                      style={{ backgroundColor: "#D2F9D4" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Geneva</div>
              <div className="templates-card__caption">
                Minimalist font styling contrasts with an electric background in
                this edgy resume template.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="copenhagen">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "copenhagen",
            }}
            href="../app/create-resume@template=copenhagen.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727599237248"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Copenhagen"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (15).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume15}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "30px" }}
                  />
                  <div
                    data-color="#E3F6EB"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1827/persistent-resource/copenhagen-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1827/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1827/persistent-resource/copenhagen-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#EEB7B3"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1828/persistent-resource/copenhagen-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1828/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1828/persistent-resource/copenhagen-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                   
                  <div
                    data-color="#B9D9F2"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1829/persistent-resource/copenhagen-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1829/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1829/persistent-resource/copenhagen-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#3C434F"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1830/persistent-resource/copenhagen-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1830/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1830/persistent-resource/copenhagen-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                  </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#F6EEE3"
                      style={{ backgroundColor: "#f6eee3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#E3F6EB"
                      style={{ backgroundColor: "#e3f6eb" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#EEB7B3"
                      style={{ backgroundColor: "#eeb7b3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#B9D9F2"
                      style={{ backgroundColor: "#b9d9f2" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#3C434F"
                      style={{ backgroundColor: "#3c434f" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Copenhagen</div>
              <div className="templates-card__caption">
                Emphasizing your personal story above all else, this template
                blends a traditional style with attention-grabbing design.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="chicago">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "chicago",
            }}
            href="../app/create-resume@template=chicago.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727599237248"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Chicago"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (16).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume16}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "30px" }}
                  />
                  <div
                    data-color="#FFDEC7"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1883/persistent-resource/chicago-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1883/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1883/persistent-resource/chicago-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#F46060"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1884/persistent-resource/chicago-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1884/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1884/persistent-resource/chicago-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#7FC2D2"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1885/persistent-resource/chicago-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1885/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1885/persistent-resource/chicago-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FBCEF0"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1886/persistent-resource/chicago-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1886/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1886/persistent-resource/chicago-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card __action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#0F141F"
                      style={{ backgroundColor: "#0f141f" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FFDEC7"
                      style={{ backgroundColor: "#ffdec7" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#F46060"
                      style={{ backgroundColor: "#f46060" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#7FC2D2"
                      style={{ backgroundColor: "#7fc2d2" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FBCEF0"
                      style={{ backgroundColor: "#fbcef0" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Chicago</div>
              <div className="templates-card__caption">
                Bold and forward structure that’s impossible to ignore. When you
                really need to impress and showcase your profile.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="rome">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "rome",
            }}
            href="../app/create-resume@template=rome.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727599237248"}>
                <div
                  className="templates-card__preview"
                  title="Creative resume template Rome"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (17).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume17}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "30px" }}
                  />
                  <div
                    data-color="#DFFF85"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#DBD7D0"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3077/persistent-resource/rome-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3077/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3077/persistent-resource/rome-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#141414"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3078/persistent-resource/rome-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3078/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3078/persistent-resource/rome-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#7A8BB8"
                    data-img-src="https://s 3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3079/persistent-resource/rome-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3079/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3079/persistent-resource/rome-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FAFAFA"
                      style={{ backgroundColor: "#fafafa" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#DFFF85"
                      style={{ backgroundColor: "#dfff85" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#DBD7D0"
                      style={{ backgroundColor: "#dbd7d0" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#141414"
                      style={{ backgroundColor: "#141414" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#7A8BB8"
                      style={{ backgroundColor: "#7a8bb8" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Rome</div>
              <div className="templates-card__caption">
                A charming resume template with eye-catching section titles and
                a balanced column structure.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="barcelona">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "barcelona",
            }}
            href="../app/create-resume@template=barcelona.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Barcelona"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  <div
                    data-color="#00C571"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#2196F3"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/510/persistent-resource/barcelona-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/510/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/510/persistent-resource/barcelona-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  {/* <img
                  src="/resume.io/asset/images/resume (18).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume18}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "30px" }}
                  />
                  <div
                    data-color="#673AB7"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/512/p ersistent-resource/barcelona-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/512/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/512/persistent-resource/barcelona-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#000000"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/513/persistent-resource/barcelona-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/513/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/513/persistent-resource/barcelona-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item"
                      data-color="#00C571"
                      style={{ backgroundColor: "#00c571" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#2196F3"
                      style={{ backgroundColor: "#2196f3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FF7373"
                      style={{ backgroundColor: "#ff7373" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#673AB7"
                      style={{ backgroundColor: "#673ab7" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#000000"
                      style={{ backgroundColor: "#000000" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Barcelona</div>
              <div className="templates-card__caption">
                Attractive, friendly template design. Creative two column
                structure.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="athens">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "athens",
            }}
            href="../app/create-resume@template=athens.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727616514253"}>
                <div
                  className="templates-card__preview"
                  title="Ats resume template Athens"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (21).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume21}
                    width={475}
                    alt="resume"
                    style={{ objectFit: "cover", paddingTop: "30px" }}
                  />
                  <div
                    data-color="#C799A6"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7493/persistent-resource/athens-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/7493/persistent-resource/athens-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/7493/persistent-resource/athens-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#90909E"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7494/persistent-resource/athens-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image /width=380,dpr=1,format=auto/uploads/local_template_image/image/7494/persistent-resource/athens-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/7494/persistent-resource/athens-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#F7F7F7"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7495/persistent-resource/athens-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/7495/persistent-resource/athens-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/7495/persistent-resource/athens-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#8B9467"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7496/persistent-resource/athens-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/7496/persistent-resource/athens-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/7496/persistent-resource/athens-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item"
                      data-color="#C799A6"
                      style={{ backgroundColor: "#c799a6" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#90909E"
                      style={{ backgroundColor: "#90909e" }}
                    ></div>
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#F7F7F7"
                      style={{ backgroundColor: "#f7f7f7" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#8B9467"
                      style={{ backgroundColor: "#8b9467" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Athens</div>
              <div className="templates-card__caption">
                A modern, clean template with a focus on simplicity and
                readability.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="brussels">
          <a
            className="templates-card"
            data-internal-event={{
              name: "choose_sign_up_resume_template",
              label: "templates_resume",
              template: "brussels",
            }}
            href="../app/create-resume@template=brussels.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727619713537"}>
                <div
                  className="templates-card__preview"
                  title="Simple resume template Brussels"
                  style={{ height: 100, overflow: "hidden" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (22).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume22}
                    width={475}
                    height={500}
                    alt="resume"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    data-color="#E3F6EB"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1827/persistent-resource/brussels-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1827/persistent-resource/brussels-resume-templates.jpg 1x, https ://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1827/persistent-resource/brussels-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#EEB7B3"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1828/persistent-resource/brussels-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1828/persistent-resource/brussels-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1828/persistent-resource/brussels-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#B9D9F2"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1829/persistent-resource/brussels-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1829/persistent-resource/brussels-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1829/persistent-resource/brussels-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#3C434F"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1830/persistent-resource/brussels-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1830/persistent-resource/brussels-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1830/persistent-resource/brussels-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#F6EEE3"
                      style={{ backgroundColor: "#f6eee3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#E3F6EB"
                      style={{ backgroundColor: "#e3f6eb" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#EEB7B3"
                      style={{ backgroundColor: "#eeb7b3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#B9D9F2"
                      style={{ backgroundColor: "#b9d9f2" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#3C434F"
                      style={{ backgroundColor: "#3c434f" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Brussels</div>
              <div className="templates-card__caption">
                A simple, two-tone resume template. Easy to read and highlights
                your experience.
              </div>
            </div>
          </a>
        </div>       
          </div>
  );
};

export default TemplatesGrid;

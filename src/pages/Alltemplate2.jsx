import React from "react";
import resume from "../asset/images/resume.jpg";
import resume25 from "../asset/images/resume (25).jpg";
import resume26 from "../asset/images/resume (26).jpg";
import resume7 from "../asset/images/resume (7).jpg";
import resume9 from "../asset/images/resume (9).jpg";
import resume8 from "../asset/images/resume (8).jpg";
import resume10 from "../asset/images/resume (10).jpg";
import resume11 from "../asset/images/resume (11).jpg";
import resume15 from "../asset/images/resume (15).jpg";
import resume16 from "../asset/images/resume (16).jpg";
import resume17 from "../asset/images/resume (17).jpg";
import resume18 from "../asset/images/resume (18).jpg";
import resume22 from "../asset/images/resume (22).jpg";
import resume21 from "../asset/images/resume (21).jpg";
import resume23 from "../asset/images/resume (23).jpg";
import resume24 from "../asset/images/resume (24).jpg";
// import resume25 from "../asset/images/resume (25).jpg";
// import resume26 from "../asset/images/resume (26).jpg";
import resume27 from "../asset/images/resume (27).jpg";
import resume28 from "../asset/images/resume (28).jpg";
import resume29 from "../asset/images/resume (29).jpg";
import resume30 from "../asset/images/resume (30).jpg";
import resume31 from "../asset/images/resume (31).jpg";
import resume32 from "../asset/images/resume (32).jpg";
import resume33 from "../asset/images/resume (33).jpg";
import resume34 from "../asset/images/resume (34).jpg";
import resume35 from "../asset/images/resume (35).jpg";
import resume36 from "../asset/images/resume (36).jpg";
import resume37 from "../asset/images/resume (37).jpg";
import resume38 from "../asset/images/resume (38).jpg";
import resume39 from "../asset/images/resume (39).jpg";
import resume40 from "../asset/images/resume (40).jpg";
import resume41 from "../asset/images/resume (41).jpg";
import resume42 from "../asset/images/resume (42).jpg";
import resume43 from "../asset/images/resume (43).jpg";
import resume44 from "../asset/images/resume (44).jpg";
import resume45 from "../asset/images/resume (45).jpg";
import resume4 from "../asset/images/resume (4).jpg";
import resume6 from "../asset/images/resume (6).jpg";
import { Link } from "react-router-dom";
import BlogPost from "./SImple5"
const Alltemplate2 = () => {
  return (
       <div>
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
        <div className="templates-grid__cell" data-name="vienna">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"vienna"}'
            href="../app/create-resume@template=vienna.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727609514053"}>
                <div
                  className="templates-card__preview"
                  title="Creative resume template Vienna"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (34).jpg"
            width="375"
            height="533"
            alt="Creative resume template Vienna"
          /> */}
                  <img
                    src={resume34}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />

                  <div
                    data-color="#FFF66D"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#9AEBFE"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FED78C"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#E4E4E4"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg 2x"
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
                      data-color="#4BFBBA"
                      style={{ backgroundColor: "#4bfbba" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FFF66D"
                      style={{ backgroundColor: "#fff66d" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#9AEBFE"
                      style={{ backgroundColor: "#9aebfe" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FED78C"
                      style={{ backgroundColor: "#fed78c" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#E4E4E4"
                      style={{ backgroundColor: "#e4e4e4" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Vienna</div>
              <div className="templates-card__caption">
                Striking modern header, professional two column template
                structure.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="sydney">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"sydney"}'
            href="../app/create-resume@template=sydney.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727609514053"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Sydney"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (29).jpg"
                    width="375"
                    height="533"
                    alt="Modern resume template Sydney"
                  /> */}
                  <img
                    src={resume29}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div data-color="#581010"></div>
                  <div data-color="#1D473A"></div>
                  <div data-color="#32084D"></div>
                  <div data-color="#1B212F"></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#082A4D"
                      style={{ backgroundColor: "#082a4d" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#581010"
                      style={{ backgroundColor: "#581010" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#1D473A"
                      style={{ backgroundColor: "#1d473a" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#32084D"
                      style={{ backgroundColor: "#32084d" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#1B212F"
                      style={{ backgroundColor: "#1b212f" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Sydney</div>
              <div className="templates-card__caption">
                Modern and eye-catching resume template. Beautiful contrasting
                structure.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="moscow">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"moscow"}'
            href="../app/create-resume@template=moscow.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727611869339"}>
                <div
                  className="templates-card__preview"
                  title="Creative resume template Moscow"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (35).jpg"
                    width="375"
                    height="533"
                    alt="Creative resume template Moscow"
                  /> */}
                  <img
                    src={resume35}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  {/* Other color options */}
                  <div
                    data-color="#FFDDCA"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1520/persistent-resource/moscow-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1520/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1520/persistent-resource/moscow-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#D0FFE1"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1521/persistent-resource/moscow-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1521/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1521/persistent-resource/moscow-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#BBEFFF"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1522/persistent-resource/moscow-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1522/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1522/persistent-resource/moscow-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#BFB9FF"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg 2x"
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
                      data-color="#FFB3B3"
                      style={{ backgroundColor: "#ffb3b3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FFDDCA"
                      style={{ backgroundColor: "#ffddca" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#D0FFE1"
                      style={{ backgroundColor: "#d0ffe1" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#BBEFFF"
                      style={{ backgroundColor: "#bbefff" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#BFB9FF"
                      style={{ backgroundColor: "#bfb9ff" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Moscow</div>
              <div className="templates-card__caption">
                Open white-space template, excellent readability.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="madrid">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"madrid"}'
            href="../app/create-resume@template=madrid.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727616514253"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Madrid"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (31).jpg"
                    width="375"
                    height="533"
                    alt="Modern resume template Madrid"
                  /> */}
                  <img
                    src={resume31}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  {/* Other color options */}
                  <div
                    data-color="#FF9737"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/148/persistent-resource/madrid-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/148/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/148/persistent-resource/madrid-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#91D8E2"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/149/persistent-resource/madrid-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/149/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/149/persistent-resource/madrid-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#F6AFAD"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/150/persistent-resource/madrid-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/150/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/150/persistent-resource/madrid-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#6295EC"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/151/persistent-resource/madrid-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/151/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/151/persistent-resource/madrid-resume-templates.jpg 2x"
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
                      data-color="#FF9737"
                      style={{ backgroundColor: "#ff9737" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#91D8E2"
                      style={{ backgroundColor: "#91d8e2" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#F6AFAD"
                      style={{ backgroundColor: "#f6afad" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#6295EC"
                      style={{ backgroundColor: "#6295ec" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Madrid</div>
              <div className="templates-card__caption">
            
                Bold modern layout, professional touch.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="cape_town">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"cape_town"}'
            href="../app/create-resume@template=cape_town.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Cape Town"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (33).jpg"
                    width="375"
                    height="533"
                    alt="Modern resume template Cape Town"
                  /> */}
                  <img
                    src={resume33}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#2AF091"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FF8FC5"
                      style={{ backgroundColor: "#FF8FC5" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#2AF091"
                      style={{ backgroundColor: "#2AF091" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FFF27A"
                      style={{ backgroundColor: "#FFF27A" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#8CE8FC"
                      style={{ backgroundColor: "#8CE8FC" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FF6258"
                      style={{ backgroundColor: "#FF6258" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Cape Town</div>
              <div className="templates-card__caption">
                Get noticed with this resume template featuring a strong font
                accented by playful pops of color.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="vancouver">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"vancouver"}'
            href="../app/create-resume@template=vancouver.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727614015435"}>
                <div
                  className="templates-card__preview"
                  title="Creative resume template Vancouver"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (37).jpg"
                    width="375"
                    height="533"
                    alt="Creative resume template Vancouver"
                  /> */}
                  <img
                    src={resume37}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div className="templates-card__badge templates-card__badge--free">
                    Free
                  </div>
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
              <div className="templates-card__name">Vancouver</div>
              <div className="templates-card__caption">
                Creative, light-hearted resume template with color and flair.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="tokyo">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"tokyo"}'
            href="../app/create-resume@template=tokyo.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727551815336"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Tokyo"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (32).jpg"
                    width="375"
                    height="533"
                    alt="Modern resume template Tokyo"
                  /> */}
                  <img
                    src={resume32}
                    width={320}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div>
                </Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#B12025"
                      style={{ backgroundColor: "#B12025" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#353CAC"
                      style={{ backgroundColor: "#353CAC" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#0C6453"
                      style={{ backgroundColor: "#0C6453" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#F29100"
                      style={{ backgroundColor: "#F29100" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#1D190B"
                      style={{ backgroundColor: "#1D190B" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Tokyo</div>
              <div className="templates-card__caption">
                Modern resume template with a sleek and professional design.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="lisbon">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"lisbon"}'
            href="../app/create-resume@template=lisbon.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727619713537"}>
                <div
                  className="templates-card__preview"
                  title="Creative resume template Lisbon"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (38).jpg"
                    width="375"
                    height="533"
                    alt="Creative resume template Lisbon"
                  /> */}
                  <img
                    src={resume38}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div
                    data-color="#E65A82"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2741/persistent-resource/lisbon-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2741/persistent-resource/lisbon-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2741/persistent-resource/lisbon-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#9BD2BE"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2742/persistent-resource/lisbon-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2742/persistent-resource/lisbon-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2742/persistent-resource/lisbon-resume-templates.jpg 2x"
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
                      data-color="#A5AFEB"
                      style={{ backgroundColor: "#A5AFEB" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#E65A82"
                      style={{ backgroundColor: "#E65A82" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#9BD2BE"
                      style={{ backgroundColor: "#9BD2BE" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#919191"
                      style={{ backgroundColor: "#919191" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#DCB95A"
                      style={{ backgroundColor: "#DCB95A" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Lisbon</div>
              <div className="templates-card__caption">
                A beautiful way to showcase your expertise, this creative resume
                template stands out with artistic touches.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="rio">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"rio"}'
            href="../app/create-resume@template=rio.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727595993680"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Rio"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (39).jpg"
                    width="375"
                    height="533"
                    alt="Modern resume template Rio"
                  /> */}
                  <img
                    src={resume39}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div
                    data-color="#AEC4D0"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg 2x"
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
                      data-color="#E7CA9D"
                      style={{ backgroundColor: "#E7CA9D" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#AEC4D0"
                      style={{ backgroundColor: "#AEC4D0" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#DDA68E"
                      style={{ backgroundColor: "#DDA68E" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#ACB4AB"
                      style={{ backgroundColor: "#ACB4AB" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#CBB0AA"
                      style={{ backgroundColor: "#CBB0AA" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Rio</div>
              <div className="templates-card__caption">
                Fluid and energetic, this template makes a statement with
                creativity and style.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="rome">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"rome"}'
            href="../app/create-resume@template=rome.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727679595877"}>
                <div
                  className="templates-card__preview"
                  title="Creative resume template Rome"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (17).jpg"
                    width="375"
                    height="533"
                    alt="Creative resume template Rome"
                  /> */}
                  <img
                    src={resume17}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div
                    data-color="#DFFF85"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg 2x"
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
                      style={{ backgroundColor: "#FAFAFA" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#DFFF85"
                      style={{ backgroundColor: "#DFFF85" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#7FBFDF"
                      style={{ backgroundColor: "#7FBFDF" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FAD93A"
                      style={{ backgroundColor: "#FAD93A" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#C9A569"
                      style={{ backgroundColor: "#C9A569" }}
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
                This minimalist template shows off your skills with flair and
                creativity.
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
              <Link to={"/resumeDetail/1727606791983"}>
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
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
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
              <Link to={"/resumeDetail/1727608086683"}>
                <div
                  className="templates-card__preview"
                  title="Simple resume template Brussels"
                  style={{ height: 100, objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (22).jpg"
                  width={375}
                  height={533}
                /> */}
                  <img
                    src={resume22}
                    width={380}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "20px" }}
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
        <div className="templates-grid__cell" data-name="prague">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"prague"}'
            href="../app/create-resume@template=prague.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727608588847"}>
                <div
                  className="templates-card__preview"
                  title="Ats resume template Prague"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (25).jpg"
            width="375"
            height="533"
            alt="Prague Resume Template"
          /> */}
                  <img
                    src={resume25}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#6F84C3"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/8087/persistent-resource/prague-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/8087/persistent-resource/prague-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/8087/persistent-resource/prague-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#82848C"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/8088/persistent-resource/prague-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/8088/persistent-resource/prague-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/8088/persistent-resource/prague-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#6F9C81"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/8089/persistent-resource/prague-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/8089/persistent-resource/prague-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/8089/persistent-resource/prague-resume-templates.jpg 2x"
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
                      data-color="#C25C24"
                      style={{ backgroundColor: "#c25c24" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#6F84C3"
                      style={{ backgroundColor: "#6f84c3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#82848C"
                      style={{ backgroundColor: "#82848c" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#6F9C81"
                      style={{ backgroundColor: "#6f9c81" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Prague</div>
              <div className="templates-card__caption">
                Showcase career skills through a highlighted skills section.
                ATS-optimized resume template.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="shanghai">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"shanghai"}'
            href="../app/create-resume@template=shanghai.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727609085756"}>
                <div
                  className="templates-card__preview"
                  title="Ats resume template Shanghai"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (26).jpg"
            width="375"
            height="533"
            alt="Shanghai Resume Template"
          /> */}
                  <img
                    src={resume26}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#DBE1EF"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/8221/persistent-resource/shanghai-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/8221/persistent-resource/shanghai-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/8221/persistent-resource/shanghai-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#E5BBDD"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/8222/persistent-resource/shanghai-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/8222/persistent-resource/shanghai-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/8222/persistent-resource/shanghai-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#6767D9"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/8223/persistent-resource/shanghai-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/8223/persistent-resource/shanghai-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/8223/persistent-resource/shanghai-resume-templates.jpg 2x"
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
                      data-color="#BFD1B0"
                      style={{ backgroundColor: "#bfd1b0" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#DBE1EF"
                      style={{ backgroundColor: "#dbe1ef" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#E5BBDD"
                      style={{ backgroundColor: "#e5bbdd" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#6767D9"
                      style={{ backgroundColor: "#6767d9" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Shanghai</div>
              <div className="templates-card__caption">
                Dedicated achievements section to help you stand out from the
                crowd.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="toronto">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"toronto"}'
            href="../app/create-resume@template=toronto.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Toronto"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            //   src="/resume.io/asset/images/resume (27).jpg"
            // src="../asset/images/resume (27).jpg"
            
              width="375"
              height="533"
              alt="Toronto Template Preview"
            /> */}
                  <img
                    src={resume27}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#172F53"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#361146"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#160A45"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#324739"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#232323"
                      style={{ backgroundColor: "#232323" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#172F53"
                      style={{ backgroundColor: "#172f53" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#361146"
                      style={{ backgroundColor: "#361146" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#160A45"
                      style={{ backgroundColor: "#160a45" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#324739"
                      style={{ backgroundColor: "#324739" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Toronto</div>
              <div className="templates-card__caption">
                A web-inspired resume template perfect for chatting up your
                achievements.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="stockholm">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"stockholm"}'
            href="../app/create-resume@template=stockholm.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Stockholm"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  <div
                    data-color="#0F141F"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#673AB7"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  {/* <img
                src="/resume.io/asset/images/resume (40).jpg"
                width="375"
                height="533"
                alt="Stockholm Resume"
              /> */}
                  {/* <img
                  src={resume40}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume40}
                    width={380}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div
                    data-color="#22A860"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FF4D4D"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item"
                      data-color="#0F141F"
                      style={{ backgroundColor: "#0f141f" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#673AB7"
                      style={{ backgroundColor: "#673ab7" }}
                    ></div>
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#2196F3"
                      style={{ backgroundColor: "#2196f3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#22A860"
                      style={{ backgroundColor: "#22a860" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FF4D4D"
                      style={{ backgroundColor: "#ff4d4d" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Stockholm</div>
              <div className="templates-card__caption">
                Perfect balance of fresh and functional resume template design.
              </div>
            </div>
          </a>
        </div>
        <div className="templates-grid__cell" data-name="dublin">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"dublin"}'
            href="../app/create-resume@template=dublin.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Dublin"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (41).jpg"
            width="375"
            height="533"
            alt="Dublin Template Preview"
          /> */}
                  {/* <img
                  src={resume41}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume41}
                    width={380}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div
                    data-color="#87300D"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#10365C"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/490/persistent-resource/dublin-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/490/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/490/persistent-resource/dublin-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#3E1D53"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/491/persistent-resource/dublin-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/491/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/491/persistent-resource/dublin-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#242935"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/492/persistent-resource/dublin-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/492/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/492/persistent-resource/dublin-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#084C41"
                      style={{ backgroundColor: "#084c41" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#87300D"
                      style={{ backgroundColor: "#87300d" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#10365C"
                      style={{ backgroundColor: "#10365c" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#3E1D53"
                      style={{ backgroundColor: "#3e1d53" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#242935"
                      style={{ backgroundColor: "#242935" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Dublin</div>
              <div className="templates-card__caption">
                A touch of personality with a well-organized resume structure.
              </div>
            </div>
          </a>
        </div>

        <div
          className="templates-grid__cell templates-grid__cell--hidden"
          data-name="london"
        >
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"london"}'
            href="../app/create-resume@template=london.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
                <Link to={"/resumeDetail/1727611308552"}>
                <div
                  className="templates-card__preview"
                  title="London Template"
                >
                  {/* <img
            srcSet="
              https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg 1x,
              https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg 2x
            "
            width="380"
            alt="London Template"
            className="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
            src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg"
          /> */}
                  {/* <img
                  src={resume22}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume22}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
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
          </a>
        </div>

        <div className="templates-grid__cell" data-name="new_york">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"new_york"}'
            href="../app/create-resume@template=new_york.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template New York"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (42).jpg"
            width="375"
            height="533"
            alt="New York Template"
          /> */}
                  {/* <img
                  src={resume42}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume42}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__mono">
                    <div className="templates-card__mono-icon"></div>
                    <div className="templates-card__mono-text">Monochrome</div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">New York</div>
              <div className="templates-card__caption">
                Professional and elegant resume template with a timeline
                structure.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="vienna">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"vienna"}'
            href="../app/create-resume@template=vienna.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Creative resume template Vienna"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (41).jpg"
            width="375"
            height="533"
            alt="Vienna Template"
          /> */}
                  {/* <img
                  src={resume41}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume41}
                    width={380}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div
                    data-color="#FFF66D"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#9AEBFE"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FED78C"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#E4E4E4"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#4BFBBA"
                      style={{ backgroundColor: "#4bfbba" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FFF66D"
                      style={{ backgroundColor: "#fff66d" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#9AEBFE"
                      style={{ backgroundColor: "#9aebfe" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FED78C"
                      style={{ backgroundColor: "#fed78c" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#E4E4E4"
                      style={{ backgroundColor: "#e4e4e4" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Vienna</div>
              <div className="templates-card__caption">
                Striking modern header, professional two column template
                structure.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="paris">
          <a
            className="templates-card"
            href="../app/create-resume@template=paris.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727629629655"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Paris"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  <div
                    data-color="#00C571"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/426/persistent-resource/paris-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/426/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/426/persistent-resource/paris-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div
                    data-color="#2196F3"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/427/persistent-resource/paris-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/427/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/427/persistent-resource/paris-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  {/* <img
            src="/resume.io/asset/images/resume (42).jpg"
            width="375"
            height="533"
            alt="Paris Resume"
          /> */}
                  {/* <img
                  src={resume42}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume42}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#673AB7"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/429/persistent-resource/paris-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/429/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/429/persistent-resource/paris-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div
                    data-color="#000000"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/430/persistent-resource/paris-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/430/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/430/persistent-resource/paris-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
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
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FC0F0F"
                      style={{ backgroundColor: "#FC0F0F" }}
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

        <div className="templates-grid__cell" data-name="geneva">
          <a
            className="templates-card"
            href="../app/create-resume@template=geneva.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727632589514"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Geneva"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (43).jpg"
            width="375"
            height="533"
            alt="Geneva Resume"
          /> */}
                  {/* <img
                  src={resume43}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume43}
                    width={320}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#FFF494"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2890/persistent-resource/geneva-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2890/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2890/persistent-resource/geneva-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div
                    data-color="#153547"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2891/persistent-resource/geneva-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2891/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2891/persistent-resource/geneva-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div
                    data-color="#80A190"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2892/persistent-resource/geneva-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2892/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2892/persistent-resource/geneva-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div
                    data-color="#D2F9D4"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2893/persistent-resource/geneva-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2893/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2893/persistent-resource/geneva-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
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

        <div className="templates-grid__cell" data-name="milan">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"milan"}'
            href="../app/create-resume@template=milan.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727633687884"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Milan"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (44).jpg"
            width="375"
            height="533"
            alt="Milan Resume Template"
          /> */}
                  {/* <img
                  src={resume44}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume44}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#00C571"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/505/persistent-resource/milan-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/505/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/505/persistent-resource/milan-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#2196F3"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/506/persistent-resource/milan-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/506/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/506/persistent-resource/milan-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FC0F0F"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/507/persistent-resource/milan-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/507/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/507/persistent-resource/milan-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#000000"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/508/persistent-resource/milan-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/508/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/508/persistent-resource/milan-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#B58E58"
                      style={{ backgroundColor: "#b58e58" }}
                    ></div>
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
                      className="templates-card__colors-item"
                      data-color="#FC0F0F"
                      style={{ backgroundColor: "#fc0f0f" }}
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
              <div className="templates-card__name">Milan</div>
              <div className="templates-card__caption">
                Streamlined professional resume template with a human touch.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="copenhagen">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"copenhagen"}'
            href="../app/create-resume@template=copenhagen.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Copenhagen"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (45).jpg"
            width="375"
            height="533"
            alt="Copenhagen Resume Template"
          /> */}
                  {/* <img
                  src={resume45}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume45}
                    width={310}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
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
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
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
                Simple and efficient resume template.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="chicago">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"chicago"}'
            href="../app/create-resume@template=chicago.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727620870947"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Chicago"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (16).jpg"
            width="375"
            height="533"
            alt="Chicago Resume Template"
          /> */}
                  {/* <img
                  src={resume16}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume16}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
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
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
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

        <div className="templates-grid__cell" data-name="barcelona">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"barcelona"}'
            href="../app/create-resume@template=barcelona.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727674734534"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Barcelona"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  <div
                    data-color="#00C571"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>

                  {/* <img
            src="/resume.io/asset/images/resume (17).jpg"
            width="375"
            height="533"
            alt="Barcelona Resume Preview"
          /> */}
                  {/* <img
                  src={resume17}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume17}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />

                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
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
                      style={{ backgroundColor: "#2196F3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FF7373"
                      style={{ backgroundColor: "#FF7373" }}
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
              <div className="templates-card__name">Barcelona</div>
              <div className="templates-card__caption">
                Attractive, friendly template design. Creative two-column
                structure.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="athens">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"athens"}'
            href="../app/create-resume@template=athens.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727614015435"}>
                <div
                  className="templates-card__preview"
                  title="ATS resume template Athens"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (21).jpg"
            width="375"
            height="533"
            alt="Athens Resume Preview"
          /> */}
                  {/* <img
                  src={resume21}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume21}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />

                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#3C78D8"
                      style={{ backgroundColor: "#3C78D8" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#C799A6"
                      style={{ backgroundColor: "#C799A6" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#90909E"
                      style={{ backgroundColor: "#90909E" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#909580"
                      style={{ backgroundColor: "#909580" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">Gold Standard</div>
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Athens</div>
              <div className="templates-card__caption">
                Clean, modern template design that is easily read by ATS
                scanners.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="brussels">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"brussels"}'
            href="../app/create-resume@template=brussels.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727609085756"}>
                <div
                  className="templates-card__preview"
                  title="Ats resume template Brussels"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
            src="/resume.io/asset/images/resume (22).jpg"
            width="375"
            height="533"
            alt="Brussels Resume Template"
          /> */}
                  {/* <img
                  src={resume22}
                  width={475}
                 height={500}
                  alt='resume'
                  style={{ objectFit: 'cover' }}
                /> */}
                  <img
                    src={resume22}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#64AA3A"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7497/persistent-resource/brussels-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/7497/persistent-resource/brussels-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/7497/persistent-resource/brussels-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div
                    data-color="#8989D1"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7498/persistent-resource/brussels-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/7498/persistent-resource/brussels-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/7498/persistent-resource/brussels-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div
                    data-color="#5F8CC9"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/7499/persistent-resource/brussels-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/7499/persistent-resource/brussels-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/7499/persistent-resource/brussels-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#EF8E38"
                      style={{ backgroundColor: "#ef8e38" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#64AA3A"
                      style={{ backgroundColor: "#64aa3a" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#8989D1"
                      style={{ backgroundColor: "#8989d1" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#5F8CC9"
                      style={{ backgroundColor: "#5f8cc9" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">Gold Standard</div>
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
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
        <div className="templates-grid__cell" data-name="toronto">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"toronto"}'
            href="../app/create-resume@template=toronto.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727609514053"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Toronto"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (27).jpg"
                    width="375"
                    height="533"
                    alt="Resume Template Toronto"
                  /> */}
                  <img
                    src={resume27}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#172F53"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#361146"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#160A45"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#324739"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#232323"
                      style={{ backgroundColor: "#232323" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#172F53"
                      style={{ backgroundColor: "#172F53" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#361146"
                      style={{ backgroundColor: "#361146" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#160A45"
                      style={{ backgroundColor: "#160A45" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#324739"
                      style={{ backgroundColor: "#324739" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Toronto</div>
              <div className="templates-card__caption">
                A web-inspired resume template perfect for chatting up your
                achievements.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="stockholm">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"stockholm"}'
            href="../app/create-resume@template=stockholm.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727611308552"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Stockholm"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  <div
                    data-color="#0F141F"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#673AB7"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>

                  {/* <img
                    src="/resume.io/asset/images/resume (28).jpg"
                    width="375"
                    height="533"
                    alt="Resume Preview"
                  /> */}
                  <img
                    src={resume28}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#22A860"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FF4D4D"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item"
                      data-color="#0F141F"
                      style={{ backgroundColor: "#0F141F" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#673AB7"
                      style={{ backgroundColor: "#673AB7" }}
                    ></div>
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#2196F3"
                      style={{ backgroundColor: "#2196F3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#22A860"
                      style={{ backgroundColor: "#22A860" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FF4D4D"
                      style={{ backgroundColor: "#FF4D4D" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Stockholm</div>
              <div className="templates-card__caption">
                Perfect balance of fresh and functional resume template design.
              </div>
            </div>
          </a>
        </div>

        <div
          className="templates-grid__cell templates-grid__cell--hidden"
          data-name="london"
        >
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"london"}'
            href="../app/create-resume@template=london.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727611869339"}>
                <div
                  className="templates-card__preview"
                  title="London Template"
                >
                 
                  <img
                    src={resume27}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
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
          </a>
        </div>

        <div
          className="templates-grid__cell templates-grid__cell--hidden"
          data-name="dublin"
        >
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"dublin"}'
            href="../app/create-resume@template=dublin.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727635090139"}>
                <div
                  className="templates-card__preview"
                  title="Professional resume template Dublin"
                >
                  <img
                    srcSet="
                    https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 1x,
                    https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 2x
                  "
                    width="380"
                    loading="lazy"
                    alt="Professional resume template Dublin"
                    className="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                    data-color="#084C41"
                    src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg"
                  />
                  {/* Add more color variants */}
                  <div
                    data-color="#87300D"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  {/* Add more color options */}
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#084C41"
                      style={{ backgroundColor: "#084C41" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#87300D"
                      style={{ backgroundColor: "#87300D" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#10365C"
                      style={{ backgroundColor: "#10365C" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#3E1D53"
                      style={{ backgroundColor: "#3E1D53" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#242935"
                      style={{ backgroundColor: "#242935" }}
                    />
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Dublin</div>
              <div className="templates-card__caption">
                A touch of personality with a well-organized resume structure.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="sydney">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"sydney"}'
            href="../app/create-resume@template=sydney.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727614015435"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Sydney"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                    src="/resume.io/asset/images/resume (29).jpg"
                    width="375"
                    height="533"
                  /> */}
                  <img
                    src={resume29}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#581010"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/442/persistent-resource/sydney-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/442/persistent-resource/sydney-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/442/persistent-resource/sydney-resume-templates.jpg 2x"
                    data-img-width="380"
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#082A4D"
                      style={{ backgroundColor: "#082A4D" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#581010"
                      style={{ backgroundColor: "#581010" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#1D473A"
                      style={{ backgroundColor: "#1D473A" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#32084D"
                      style={{ backgroundColor: "#32084D" }}
                    />
                    <div
                      className="templates-card__colors-item"
                      data-color="#1B212F"
                      style={{ backgroundColor: "#1B212F" }}
                    />
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                    <div className="templates-card__badge">docx</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Sydney</div>
              <div className="templates-card__caption">
                Modern and eye-catching resume template. Beautiful contrasting
                structure.
              </div>
            </div>
          </a>
        </div>
        {/* </div> */}
        <div className="templates-grid__cell" data-name="amsterdam">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"amsterdam"}'
            href="../app/create-resume@template=amsterdam.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727614015435"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Amsterdam"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (30).jpg"
                  width="375"
                  height="533"
                  alt="Amsterdam Template"
                /> */}
                  <img
                    src={resume30}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
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
              <div className="templates-card__name">Amsterdam</div>
              <div className="templates-card__caption">
                Modern minimalist resume template structure with graceful
                clarity.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="madrid">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"madrid"}'
            href="../app/create-resume@template=madrid.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727614015435"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Madrid"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (31).jpg"
                  width="375"
                  height="533"
                  alt="Madrid Template"
                /> */}
                  <img
                    src={resume31}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  {/* Additional Color Previews */}
                  <div
                    data-color="#FF9737"
                    data-img-src="https://s3.resume.io/.../madrid-resume-templates.jpg"
                  ></div>
                  <div
                    data-color="#91D8E2"
                    data-img-src="https://s3.resume.io/.../madrid-resume-templates.jpg"
                  ></div>
                  <div
                    data-color="#F6AFAD"
                    data-img-src="https://s3.resume.io/.../madrid-resume-templates.jpg"
                  ></div>
                  <div
                    data-color="#6295EC"
                    data-img-src="https://s3.resume.io/.../madrid-resume-templates.jpg"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FFE14C"
                      style={{ backgroundColor: "#FFE14C" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FF9737"
                      style={{ backgroundColor: "#FF9737" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#91D8E2"
                      style={{ backgroundColor: "#91D8E2" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#F6AFAD"
                      style={{ backgroundColor: "#F6AFAD" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#6295EC"
                      style={{ backgroundColor: "#6295EC" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Madrid</div>
              <div className="templates-card__caption">
                Powerful modern resume template with bold section highlights.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="berlin">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"berlin"}'
            href="../app/create-resume@template=berlin.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727614015435"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Berlin"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (10).jpg"
                  width="375"
                  height="533"
                  alt="Berlin Resume Template"
                /> */}
                  <img
                    src={resume10}
                    width={440}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "0px" }}
                  />
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
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

        <div className="templates-grid__cell" data-name="tokyo">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"tokyo"}'
            href="../app/create-resume@template=tokyo.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727616514253"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Tokyo"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (32).jpg"
                  width="375"
                  height="533"
                  alt="Tokyo Resume Template"
                /> */}
                  <img
                    src={resume32}
                    width={320}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#353CAC"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/499/persistent-resource/tokyo-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/499/persistent-resource/tokyo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/499/persistent-resource/tokyo-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#B12025"
                      style={{ backgroundColor: "#b12025" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#353CAC"
                      style={{ backgroundColor: "#353cac" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#0C6453"
                      style={{ backgroundColor: "#0c6453" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#F29100"
                      style={{ backgroundColor: "#f29100" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#1D190B"
                      style={{ backgroundColor: "#1d190b" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Tokyo</div>
              <div className="templates-card__caption">
                Tech-inspired design, minimalist page, skill-point visuals.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="copenhagen">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"copenhagen"}'
            href="../app/create-resume@template=copenhagen.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727450945074"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Copenhagen"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (32).jpg"
                  width="375"
                  height="533"
                  alt="Copenhagen Template"
                /> */}
                  <img
                    src={resume32}
                    width={320}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
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
                </div></Link>
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

        <div className="templates-grid__cell" data-name="rio">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"rio"}'
            href="../app/create-resume@template=rio.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727450945074"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Rio"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (32).jpg"
                  width="375"
                  height="533"
                  alt="Rio Template"
                /> */}
                  <img
                    src={resume32}
                    width={320}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#AEC4D0"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#DDA68E"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2214/persistent-resource/rio-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2214/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2214/persistent-resource/rio-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#ACB4AB"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2215/persistent-resource/rio-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2215/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2215/persistent-resource/rio-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#CBB0AA"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2216/persistent-resource/rio-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2216/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2216/persistent-resource/rio-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#F6EEE3"
                      style={{ backgroundColor: "#f6eee3" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#AEC4D0"
                      style={{ backgroundColor: "#aec4d0" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#DDA68E"
                      style={{ backgroundColor: "#dda68e" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#ACB4AB"
                      style={{ backgroundColor: "#acb4ab" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#CBB0AA"
                      style={{ backgroundColor: "#cbb0aa" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Rio</div>
              <div className="templates-card__caption">
                With the bold sections and clean lines of this template, Rio
                creates a powerful sense of structure and professionalism.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="boston">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"boston"}'
            href="../app/create-resume@template=boston.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727450945074"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Boston"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (32).jpg"
                  width="375"
                  height="533"
                  alt="Boston Resume"
                /> */}
                  <img
                    src={resume32}
                    width={320}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#141414"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3236/persistent-resource/boston-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3236/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3236/persistent-resource/boston-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FCFF82"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3237/persistent-resource/boston-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3237/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3237/persistent-resource/boston-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#65B2D7"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3238/persistent-resource/boston-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3238/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3238/persistent-resource/boston-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#C8B4DE"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3239/persistent-resource/boston-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3239/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3239/persistent-resource/boston-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FFFFFF"
                      style={{ backgroundColor: "#ffffff" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#141414"
                      style={{ backgroundColor: "#141414" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FCFF82"
                      style={{ backgroundColor: "#fcff82" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#65B2D7"
                      style={{ backgroundColor: "#65b2d7" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#C8B4DE"
                      style={{ backgroundColor: "#c8b4de" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Boston</div>
              <div className="templates-card__caption">
                A streamlined, multi-column structure gives this resume template
                an innovative yet organized feel.
              </div>
            </div>
          </a>
        </div>

        <div className="templates-grid__cell" data-name="cape_town">
          <a
            className="templates-card"
            data-internal-event='{"name":"choose_sign_up_resume_template","label":"templates_resume","template":"cape_town"}'
            href="../app/create-resume@template=cape_town.html"
          >
            <div className="templates-card__body">
              <div className="templates-card__content">
              <Link to={"/resumeDetail/1727450945074"}>
                <div
                  className="templates-card__preview"
                  title="Modern resume template Cape Town"
                  style={{ height: "100px", objectFit: "cover" }}
                >
                  {/* <img
                  src="/resume.io/asset/images/resume (33).jpg"
                  width="375"
                  height="533"
                  alt="Cape Town Resume"
                /> */}
                  <img
                    src={resume33}
                    width={340}
                    //  height={500}
                    alt="resume"
                    style={{ objectFit: "cover", marginLeft: "40px" }}
                  />
                  <div
                    data-color="#2AF091"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FFF27A"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2907/persistent-resource/cape-town-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2907/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2907/persistent-resource/cape-town-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#8CE8FC"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2908/persistent-resource/cape-town-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2908/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2908/persistent-resource/cape-town-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div
                    data-color="#FF6258"
                    data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2909/persistent-resource/cape-town-resume-templates.jpg"
                    data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2909/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2909/persistent-resource/cape-town-resume-templates.jpg 2x"
                    data-img-width="380"
                  ></div>
                  <div className="templates-card__action">
                    <div className="button">Use This Template</div>
                  </div>
                </div></Link>
                <div className="templates-card__options">
                  <div className="templates-card__colors">
                    <div
                      className="templates-card__colors-item templates-card__colors-item--active"
                      data-color="#FFFFFF"
                      style={{ backgroundColor: "#ffffff" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#2AF091"
                      style={{ backgroundColor: "#2af091" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FFF27A"
                      style={{ backgroundColor: "#fff27a" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#8CE8FC"
                      style={{ backgroundColor: "#8ce8fc" }}
                    ></div>
                    <div
                      className="templates-card__colors-item"
                      data-color="#FF6258"
                      style={{ backgroundColor: "#ff6258" }}
                    ></div>
                  </div>
                  <div className="templates-card__badges">
                    <div className="templates-card__badge">pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="templates-card__footer">
              <div className="templates-card__name">Cape Town</div>
              <div className="templates-card__caption">
                A stylish template perfect for a standout resume with modern
                design elements.
              </div>
            </div>
          </a>
        </div>
      </div>
      <BlogPost/>
      </div>
    
    
     
  );
};

export default Alltemplate2;

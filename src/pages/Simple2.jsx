import React from "react";
import { Link } from "react-router-dom";

const TemplatesFilter = () => {
  return (
    <div className="templates-filter">
      <div className="templates-filter__container">
        <div className="templates-filter__content">
          <div className="templates-filter__tabs">
            <div className="templates-filter__tabs-selector templates-filter__tabs-selector--hidden" />
            <a
              className="templates-filter__tab"
              data-tag="all"
              data-templates-order="toronto,stockholm,london,dublin,new_york,vienna,sydney,moscow,amsterdam,madrid,santiago,singapore,oslo,cape_town,paris,berlin,geneva,vancouver,tokyo,milan,lisbon,barcelona,copenhagen,chicago,rio,rome,boston,rirekisho,shokumukeirekisho,athens,brussels,prague,shanghai"
              href="../resume-templates.1.html"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="templates-filter__tab-icon"
              >
                <path d="M10 5c0-1.1.9-2 2-2h7.6c.5 0 1 .2 1.4.6L25.4 8c.4.4.6.9.6 1.4V21a2 2 0 01-2 2h-3v3a2 2 0 01-2 2H7a2 2 0 01-2-2V10c0-1.1.9-2 2-2h3V5zm0 5H7v16h12v-3h-7a2 2 0 01-2-2V10zm8-5h-6v16h12V11h-3a3 3 0 01-3-3V5zm2 .4V8c0 .6.4 1 1 1h2.6L20 5.4z" />
              </svg>
              <Link to={"/AllTemplate"} >
                All templates
                {/* Creative Design */}
              </Link>
            </a>

            <Link to={"/SimpleDesign"} style={{marginRight:'60px'}}>
            <div
              className="templates-filter__tab templates-filter__tab--active"
              data-tag="simple"
              data-templates-order="london,santiago,singapore,oslo,paris,berlin,geneva,copenhagen,chicago,rome,barcelona,athens,brussels"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="templates-filter__tab-icon"
                >
                <path d="M19.8 9l-.2.7a8 8 0 01-5 5l-.6.2.6.2a8 8 0 015 5l.2.6.3-.6a8 8 0 015-5l.6-.2-.7-.2a8 8 0 01-5-5l-.2-.6zM19 5.8a1 1 0 011.9 0L21.9 9a6 6 0 003.8 3.7L29 14a1 1 0 010 1.9L25.7 17a6 6 0 00-3.8 3.7l-1.1 3.4a1 1 0 01-1.9 0l-1.2-3.4A6 6 0 0014 17L10.6 16a1 1 0 010-2l 3.4-1.1a6 6 0 003.7-3.7L19 5.7zM3.9 7c0-1.2 1.8-1.2 2 0v1c.1.4.5.8 1 .8l.9.1c1.2.1 1.2 1.9 0 2l-1 .1a1 1 0 00-.9.9v1c-.2 1.1-2 1.1-2 0l-.2-1A1 1 0 003 11l-1-.1c-1.2-.1-1.2-1.9 0-2h1c.4-.1.8-.5.8-1l.1-1zm6 14c-.2-1.2-2-1.2-2 0l-.2 1c0 .4-.4.8-.8.8l-1 .1c-1.2.1-1.2 1.9 0 2l1 .1c.4 0 .8.4.8.9l.1 1c.2 1.1 2 1.1 2 0l.1-1c.1-.5.5-.8 1-.9l.9-.1c1.2-.1 1.2-1.9 0-2h-1a1 1 0 01-.9-1v-1z" />
              </svg>
            
                Simple
              {/* Simple */}
            </div>
              </Link>
            <div
              className="templates-filter__tab"
              data-tag="ats"
              data-templates-order="athens,brussels,prague,shanghai"
              href="ats.html"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="templates-filter__tab-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9987 6.3335C10.6599 6.3335 6.33203 10.6614 6.33203 16.0002C6.33203 21.3389 10.6599 25.6668 15.9987 25.6668C21.3375 25.6668 25.6654 21.3389 25.6654 16.0002C25.6654 15.4479 26.1131 15.0002 26.6654 15.0002C27.2176 15.0002 27.6654 15.4479 27.6654 16.0002C27.6654 22.4435 22.442 27.6668 15.9987 27.6668C9.55538 27.6668 4.33203 22.4435 4.33203 16.0002C4.33203 9.55684 9.55538 4.3335 15.9987 4.3335C16.551 4.3335 16.9987 4.78121 16.9987 5.3335C16.9987 5.88578 16.551 6.3335 15.9987 6.3335Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.184 9.65517C17.1437 9.0777 17.3556 8.51109 17.7649 8.10176L22.3618 3.50494C22.6505 3.2162 23.0858 3.13202 23.4614 3.29229C23.8369 3.45256 24.0773 3.82507 24.0686 4.23332L23.9884 8.0066L27.7616 7.92632C28.1699 7.91763 28.5424 8.15803 28.7027 8.5336C28.8629 8.90917 28.7788 9.34446 28.49 9.6332L23.8932 14.23C23.4839 14.6394 22.9173 14.8512 22.3398 14.811L18.8422 14.5669L16.7049 16.7043C16.3144 17.0948 15.6812 17.0948 15.2907 16.7043C14.9002 16.3137 14.9002 15.6806 15.2907 15.2901L17.428 13.1527L17.184 9.65517ZM19.3944 12.6006L22.479 12.8158L25.316 9.97881L22.9877 10.0283C22.7151 10.0341 22.452 9.92843 22.2593 9.73568C22.0665 9.54292 21.9608 9.27983 21.9666 9.0073L22.0162 6.67897L19.1791 9.51598L19.3944 12.6006Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3043 10.6185C15.4749 11.1438 15.1875 11.7079 14.6622 11.8786C13.9461 12.1113 13.303 12.5265 12.7962 13.0834C12.2895 13.6403 11.9366 14.3197 11.7723 15.0545C11.6081 15.7894 11.6381 16.5543 11.8595 17.274C12.0809 17.9937 12.486 18.6432 13.0349 19.1587C13.5838 19.6741 14.2575 20.0376 14.9897 20.2134C15.7219 20.3892 16.4872 20.3712 17.2103 20.1611C17.9333 19.951 18.5892 19.5562 19.1132 19.0154C19.6372 18.4747 20.0112 17.8068 20.1985 17.0775C20.3358 16.5425 20.8808 16.2202 21.4158 16.3576C21.9507 16.4949 22.273 17.0399 22.1357 17.5749C21.862 18.6408 21.3153 19.617 20.5494 20.4073C19.7836 21.1976 18.825 21.7747 17.7682 22.0817C16.7115 22.3887 15.5929 22.4151 14.5228 22.1582C13.4527 21.9013 12.4681 21.37 11.6658 20.6166C10.8636 19.8633 10.2715 18.9139 9.94795 17.8621C9.62436 16.8102 9.58043 15.6922 9.8205 14.6182C10.0606 13.5443 10.5763 12.5514 11.317 11.7374C12.0576 10.9234 12.9976 10.3165 14.0442 9.97646C14.5694 9.80579 15.1336 10.0932 15.3043 10.6185Z"
                />
              </svg>
              <Link to={"/ATS"}>ATS</Link>
              {/* ATS */}
            </div>
            <div
              className="templates-filter__tab"
              data-tag="modern"
              data-templates-order="toronto,stockholm,sydney,amsterdam,madrid,berlin,tokyo,copenhagen,rio,boston,cape_town"
              href="modern.html"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="templates-filter__tab-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 4a1 1 0 00-1 1v9a7 7 0 012 .5V5 c0-.6-.4-1-1-1zm3 1a3 3 0 10-6 0v4.2a3 3 0 00-3 .6 3 3 0 00-3-.6V7a3 3 0 10-6 0v12a9 9 0 1018 0V5zM11 7a1 1 0 10-2 0v12a7 7 0 1014 0v-1.5c0-.3 0-.5-.2-.7 0-.1-.2-.3-.5-.4a7 7 0 00-2.8-.4h-3a1.5 1.5 0 000 3H20v2a3 3 0 00-3 3h-2a5 5 0 011-3 3.5 3.5 0 01-3-3.2 3 3 0 01-2-2.8V7zm2.4 8.8a1 1 0 01-.4-.8v-3a1 1 0 112 0v2.3c-.7.4-1.2.9-1.6 1.5zM17 14h2v-2a1 1 0 10-2 0v2z"
                />
              </svg>
              <Link to={"/Modren"}>Modern</Link>
              {/* Modern */}
            </div>
            <div
              className="templates-filter__tab"
              data-tag="creative"
              data-templates-order="vienna,sydney,moscow,madrid,cape_town,vancouver,tokyo,lisbon,rio,rome"
              href="creative.html"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="templates-filter__tab-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M25.4 4.4l-1.6 6.1c0 .3 0 .6.2.8l4.5 7.2-1.6 1.9c-.9.7-1.7 1-2.1 1-1.1 0-2-.5-3.2-1l-.1-.1a8 8 0 00-3.9-1.3c-.4 0-.9-.2-1.3-.7-.4-.4-.8-1-1-1.7a1 1 0 00-1.9.4c.3 1 .7 2 1.4 2.7.7.7 1.6 1.3 2.8 1.3h.6a30.5 30.5 0 001.2 6h-12A50.4 50.4 0 019 17c.5-1.6 1-3 1.9-4a1 1 0 00-1.6-1.2c-1 1.2-1.7 2.9-2.2 4.6a34.4 34.4 0 00-1.4 8.2H3.4a38.3 38.3 0 01.4-5c.4-3.4 1.4-7.2 3.5-9.3L9.7 8l.2.6c.4 1 1.2 2 2.4 2.7a1 1 0 001-1.8C12.4 9 12 8.4 11.8 8c-.2-.6-.2-1.1 0-1.7a4 4 0 01.9-1.6 35.7 35.7 0 004.2 4v.1l.7-.7-.7.8.4.1.3-.9-.3 1a2.2 2.2 0 00.3 0 4 4 0 003-.6l4.8-4zm-5.7 2.2l6.4-5.4c.9-.7 2.2.1 2 1.3l-2.2 8.1 4.5 7.3c.2.2.2.6.1.9a8.4 8.4  0 01-2.4 3.1c-1 .8-2.1 1.5-3.3 1.5-1.7 0-3-.7-4.1-1.3l-.4-.2a28 28 0 001.4 5.7 1 1 0 01-.9 1.4H6.4a1 1 0 01-1-1h1-1a18.5 18.5 0 010-1.4h-3a1 1 0 01-1-1h1-1a14.8 14.8 0 010-1.9c0-1.1.1-2.7.4-4.4.5-3.5 1.5-7.7 4-10.4C7.4 7.3 8.7 6.1 10 5.3a5.5 5.5 0 012.5-3 1 1 0 011.2.3l.7.8 3.2-.4c.4 0 .9.2 1 .6l1.2 3zm-2.1 0l-.7-1.5H16a54.4 54.4 0 001.6 1.5zm.4 6.2a3 3 0 012.9 0c.3.2.7.4 1 .8.4.4.7 1 .7 1.7a1 1 0 11-2 0l-.2-.4-.5-.4c-.2 0-.6-.2-1 0a1 1 0 01-1-1.7z"
                />
              </svg>
              <Link to={"/Creative"}>Creative</Link>
              {/* Creative */}
            </div>
            <a
              className="templates-filter__tab"
              data-tag="professional"
              data-templates-order="toronto,stockholm,dublin,new_york,vienna,paris,geneva,milan,copenhagen,chicago,barcelona,athens,brussels"
              href="professional.html"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="templates-filter__tab-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 8h5V6c0-1.1.9-2 2-2h8a2 2 0 012 2v2h5a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V10c0-1.1.9-2 2-2zm15-2h-8v2h8V6zM5 15.3V24h22v-8.7a8 8 0 01-6 2.7h-1v1c0 .6-.4 1-1 1h-6a1 1 0 01-1-1v-1h-1a8 8 0 01-6-2.7zm7 .7v-1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v1h1a6 6 0 006-6H5a6 6 0 006 6h1zm2 2v-2h4v2h-4z"
                />
              </svg>
              <Link to={"/Professional"}>
                {/* Create my resume */}
                {/* Simple Design */}
                Professional
              </Link>
              {/* Professional */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesFilter;

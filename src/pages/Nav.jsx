// import React from 'react'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
// import { Link } from "react-router-dom";
import { Logo } from "../assets-20240903T162903Z-001/assets";
import { PuffLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { HiLogout } from "react-icons/hi";
import { slideUpDownMenu } from "../animations";
import { useQueryClient } from "@tanstack/react-query";
import { auth } from "../config/firebase.config";
import useFilters from "../hooks/useFilters";
import { adminIds } from "../utils/helpers";
import { FadeInOutWIthOpacity } from "../animations";
import { useFilterContext } from "../context/filterContext";
const Nav = () => {
  const { data: user, isLoading: userLoading } = useUser();
  const [isMenu, setMenu] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false); // State to force re-render
  const queryClient = useQueryClient();
  const { filterData, setFilterData } = useFilterContext();
  const [searchTerm, setSearchTerm] = useState(filterData.searchTerm || "");
  const signOutUser = async () => {
    try {
      await auth.signOut();
      queryClient.setQueryData("user", null);
      queryClient.invalidateQueries("user");
      setUpdateTrigger((prev) => !prev); // Toggle state to force re-render
    } catch (error) {
      console.error("Sign-out failed", error);
    }
  };
  return (
    <div>
      <div className="nav__bar"
       style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      
      }}
      >
        <a className="nav__bar-logo-rio" href="index.html">
          <Link to={"/"}>
            <img
              alt="resume.io logo - Online resume builder"
              src="https://s3.resume.io/uploads/country/logo_default/2/black.svg"
            />
          </Link>
        </a>
        <nav className="nav__bar-menu">
          <a
            className="nav__bar-link"
            data-trigger="resume"
            href="resume-templates/simple.html"
            style={{
              textDecoration: "none",
              color: "#333",
              transition: "color 0.2s ease",
              borderBottom: window.location.pathname === "/SimpleDesign" ? "2px solid #333" : "2px solid transparent",
            }}
            onMouseOver={(e) => (e.target.style.color = "#666")}
            onMouseOut={(e) => (e.target.style.color = "#333")}
          >
            <Link to={"/SimpleDesign"} type="button">
              {/* Create my resume */}
              Simple Design
            </Link>
          </a>
          <a className="nav__bar-link" data-trigger="cover_letter"
            style={{
              textDecoration: "none",
              color: "#333",
              transition: "color 0.2s ease",
              borderBottom: window.location.pathname === "/Professional" ? "2px solid #333" : "2px solid transparent",
            }}
            onMouseOver={(e) => (e.target.style.color = "#666")}
            onMouseOut={(e) => (e.target.style.color = "#333")}
          >
            <Link to={"/Professional"} type="button">
              {/* Create my resume */}
              {/* Simple Design */}
              Professional Design
            </Link>
          </a>
          <a
            className="nav__bar-link"
            data-trigger="blog"
            href="resume-templates/modern.html"
            style={{
              textDecoration: "none",
              color: "#333",
              transition: "color 0.2s ease",
              borderBottom: window.location.pathname === "/Modren" ? "2px solid #333" : "2px solid transparent",
            }}
            onMouseOver={(e) => (e.target.style.color = "#666")}
            onMouseOut={(e) => (e.target.style.color = "#333")}
          >
            <Link to={"/Modren"}>Modern Design</Link>
          </a>
          <a
            className="nav__bar-link"
            href="resume-templates/creative.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#333",
              transition: "color 0.2s ease",
              borderBottom: window.location.pathname === "/Creative" ? "2px solid #333" : "2px solid transparent",
            }}
            onMouseOver={(e) => (e.target.style.color = "#666")}
            onMouseOut={(e) => (e.target.style.color = "#333")}
          >
            <Link to={"/Creative"}>Creative Design</Link>
          </a>
          <a
            className="nav__bar-link"
            href="resume-templates/ats.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#333",
              transition: "color 0.2s ease",
              borderBottom: window.location.pathname === "/ATS" ? "2px solid #333" : "2px solid transparent",
            }}
            onMouseOver={(e) => (e.target.style.color = "#666")}
            onMouseOut={(e) => (e.target.style.color = "#333")}
          >
            <Link to={"/ATS"}>ATS Design</Link>
          </a>
          <div className="nav__bar-separator"></div>
          <div className="nav__bar-auth">
            <a
              className="nav__bar-auth-link"
              data-internal-event='{"name":"click_log_in","label":"home"}'
              href="app/auth/sign-in.html"
            >
              <AnimatePresence>
                {user ? (
                  <Link
                    className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
                    to={"/template/create"}
                  >
                    {/* My Account */}
                  </Link>
                ) : (
                  <div>Home</div>
                )}
              </AnimatePresence>
            </a>
            <a
              className="button"
              data-internal-event='{"name":"click_sign_up","label":"home"}'
            >
            
              <AnimatePresence>
                {user ? (
                  <motion.div
                    {...FadeInOutWIthOpacity}
                    className="relative"
                    onClick={() => setMenu(!isMenu)}
                  >
                    {user.photoURL ? (
                      <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
                        <img
                          src={user.photoURL}
                          className="w-12 full h-full object-cover rounded-md"
                          referrerPolicy="no-referrer"
                          alt="User"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-md relative flex items-center justify-center cursor-pointer">
                        <p className="text-lg text-gray-500">
                          {user.email?.[0] || (
                            <Link to={"/auth"}>
                              <motion.button
                                className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
                                type="button"
                                {...FadeInOutWIthOpacity}
                              >
                                Login
                              </motion.button>
                            </Link>
                          )}
                        </p>
                      </div>
                    )}
                    <AnimatePresence>
                      {isMenu && (
                        <motion.div
                          {...slideUpDownMenu}
                          className="absolute px-4 py-3 rounded-md bg-white right-0 top-14 flex flex-col items-center justify-start gap-3 w-64 pt-12"
                          onMouseLeave={() => setMenu(false)}
                        >
                          {user.photoURL ? (
                            <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
                              <img
                                src={user.photoURL}
                                className="w-full h-full object-cover rounded-full"
                                referrerPolicy="no-referrer"
                                alt="User"
                              />
                            </div>
                          ) : (
                            <div className="w-20 h-20 rounded-full relative flex items-center justify-center cursor-pointer">
                              <p className="text-3 text-gray-500">
                                {user.email?.[0] || (
                                  <Link to={"/auth"}>
                                    <motion.button
                                      className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
                                      type="button"
                                      {...FadeInOutWIthOpacity}
                                    >
                                      Login
                                    </motion.button>
                                  </Link>
                                )}
                              </p>
                            </div>
                          )}
                          {user.displayName && (
                            <p className="text-lg text-txtDark">
                              {user.displayName}
                            </p>
                          )}

                          <div className="w-full flex-col items-start flex gap-8 pt-6">
                            <Link
                              className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
                              to={`/profile/${user.uid}`}
                            >
                              My Account
                            </Link>
                            {adminIds.includes(user.uid) && (
                              <Link
                                className="text-txtLight hover:text-txtDark text-base whitespace-nowrap"
                                to={"/template/create"}
                              >
                                Add New Template
                              </Link>
                            )}
                            <div
                              className="w-full px-2 py-2 border-t border-gray-300 flex items-center justify-between group cursor-pointer"
                              onClick={signOutUser}
                            >
                              <p className="group-hover:text-txtDark text-txtLight cursor-pointer">
                                Sign Out
                              </p>
                              <HiLogout className="group-hover:text-txtDark text-txtLight" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <Link to={"/auth"}>
                    <motion.button
                      className="px-4 py-2 rounded-md border border-gray-300 bg-gray-200 hover:shadow-md active:scale-95 duration-150"
                      type="button"
                      {...FadeInOutWIthOpacity}
                    >
                      Login
                    </motion.button>
                  </Link>
                )}
              </AnimatePresence>
            </a>
            <div id="userInfo"></div>
          </div>
        </nav>
        <div className="nav__bar-hamburger">
          <div className="nav__bar-hamburger-line nav__bar-hamburger-line--1"></div>
          <div className="nav__bar-hamburger-line nav__bar-hamburger-line--2"></div>
          <div className="nav__bar-hamburger-line nav__bar-hamburger-line--3"></div>
        </div>
      </div>
        <div style={{ height: "40px", visibility: "hidden" }}></div>
    </div>
  );
};

export default Nav;

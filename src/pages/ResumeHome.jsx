import React from 'react';
import './ResumeHome.css';
import  Firstscreen from "./Firstscreen";
import  SecondScreen from "./SecondScreen";
import  ThirdScreen from "./ThirdScreen";

import  FouthScreen from "./FouthScreen";
import  FivthScreen from "./FivthScreen";
import  Eighth from "./Eighth";
import  Sixth from "./Sixth";
// import  Seventh from "./Seventh";

import  Footer from "./Footer";
import nine from "./nine";
import { Link } from 'react-router-dom';
import Nav from './Nav';
const Navbar = () => {
  return (
    <>
    <Nav/>
    <Firstscreen/>
    <SecondScreen/>
    <ThirdScreen/>
    <FouthScreen/>
    <FivthScreen/>
    <Sixth/>
    {/* <Seventh/> */}
    <Eighth/>
    
    <nine/>

    <Footer/>
    </>
  );
};

export default Navbar;
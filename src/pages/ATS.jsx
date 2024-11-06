import React from 'react'
import './ResumeHome.css'
import Nav from './Nav'
import ATS1 from './ATS1'
import Simple2 from './Simple2'
import ATS2 from './ATS2'
import BlogPost from './SImple5'
import Footer from './Footer'
import BuilderCta from './FivthScreen'
const ATS = () => {
  return (
    <div>
      <Nav/>
      <div style={{ height: "60px", visibility: "hidden" }}></div>
      <ATS1/>
      <Simple2/>
      <ATS2/>
      <BlogPost/>
      <BuilderCta/>
      <Footer/>
    </div>
  )
}

export default ATS

import React from 'react'
import Nav from './Nav'
import CreativeResumeHeader from './Creative1'
import Simple2 from './Simple2'
import Creative2 from './Creative2'
import CreativeResumeBlogPost from './Creative3'
import BuilderCta from './FivthScreen'
import Footer from './Footer'
const Creative = () => {
  return (
    <div>
      <Nav/>
      <div style={{ height: "60px", visibility: "hidden" }}></div>
      <CreativeResumeHeader/>
    <Simple2/>
    <Creative2/>
    < CreativeResumeBlogPost/>
    <BuilderCta/>
  <Footer/>
    </div>
  )
}

export default Creative

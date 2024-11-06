import React from 'react'
import Nav from './Nav'
import ModernResumeHeader from './Modren1'
import TemplatesFilter from './Simple2'
import Modren2 from './Modren2'
import ModernResumeBlogPost from './Modren3'
import Footer from './Footer'
import BuilderCta from './FivthScreen'

const Modren = () => {
  return (
    <div>
      <Nav/>
      <div style={{ height: "60px", visibility: "hidden" }}></div>
      <ModernResumeHeader/>
      <TemplatesFilter/>
      <Modren2/>
      <ModernResumeBlogPost/>
      <BuilderCta/>
      <Footer/>
    </div>
  )
}

export default Modren

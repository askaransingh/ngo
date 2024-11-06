import React from 'react'
import Nav from './Nav'
import TemplatesHeader from './Professional1'
import TemplatesFilter from './Simple2'
import Professional2 from './Professional2'
import Professional3 from './Professional3'
import Footer from './Footer'
import BuilderCta from './FivthScreen'
// import { Footer } from '../containers'
const Professional = () => {
  return (
    <div>
      <Nav/>
      <div style={{ height: "60px", visibility: "hidden" }}></div>
      <TemplatesHeader/>
      <TemplatesFilter/>
      <Professional2/>
      <Professional3/>
      <BuilderCta/>
      <Footer/>
    </div>
  )
}

export default Professional

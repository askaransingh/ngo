import React from 'react'
import Nav from './Nav'
import TemplatesFilter from './Simple2'
import Header from './AllTemplate1'
import Alltemplate2 from './Alltemplate2'
import BuilderCta from './FivthScreen'
import Footer from './Footer'

const AllTemplate = () => {
  return (
    <div>
      <Nav/>
      <div style={{ height: "60px", visibility: "hidden" }}></div>
      <Header/>
      <TemplatesFilter/>
      <Alltemplate2/>
      <BuilderCta/>
      <Footer/>
    </div>
  )
}

export default AllTemplate

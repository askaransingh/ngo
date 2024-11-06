import React from 'react'
import Nav from './Nav'
import TemplatesRootHeader from './Simple1'
import TemplatesFilter from './Simple2'
import TemplatesGrid from './Simple3'
// import TemplatesGrids from './Simple4'
import BlogPost from './SImple5'
import BuilderCta from './FivthScreen'
import Footer from './Footer'

const SimpleDesign = () => {
  return (
    <div>
      <Nav/>
      <div style={{ height: "60px", visibility: "hidden" }}></div>
      <TemplatesRootHeader/>
      <TemplatesFilter/>
      <TemplatesGrid/>
      {/* <TemplatesGrids/> */}
      <BlogPost/>
     <BuilderCta/>
     <Footer/>
    </div>
  )
}

export default SimpleDesign

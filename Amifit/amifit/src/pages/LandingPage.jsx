import React from 'react'
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import About from "../components/About/About"
import AppBanner from "../components/AppBanner/AppBanner"
import Blog from "../components/Blog/Blog"
import Course from "../components/Course/Course"

const LandingPage = () => {
  return (
    <div>
   
      <Hero />
      <Services />
       
      
      <About />
      <Course  />
      <Blog />
      <AppBanner />
      
    </div>
  )
}

export default LandingPage

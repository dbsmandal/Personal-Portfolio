import React from 'react'
import HeroSection from '../Component/HeroSection'

const About = () => {
  const data={
    name:"Dipak Mandal",
    image:"./images/about1.svg"
  }
  return (
    <div>
     <HeroSection {...data}/>
    </div>
  )
}

export default About
 
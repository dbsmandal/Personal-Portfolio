import React from 'react'
import HeroSection from '../Component/HeroSection'

const Home = () => {
  const data={
    name:"Dbsmandal Portfolio",
    image:"./images/hero.svg"
  }
  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default Home 
 
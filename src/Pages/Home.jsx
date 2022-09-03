import { useEffect } from "react";
import HeroSection from "../Component/HeroSection";
import { useGlobalContext } from "../Context";
import MySkills from './MySkills'
import Contact from "../Pages/Contact"

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return <>
  <HeroSection />
  <MySkills/>
  <Contact/>
  
  </>;
};

export default Home;



























//using props its easy ways to create this page ata time


// import React from 'react'
// import HeroSection from '../Component/HeroSection'

// const Home = () => {
//   const data={
//     name:"Dbsmandal Portfolio",
//     image:"./images/hero.svg"
//   }
//   return (
//     <div>
//       <HeroSection {...data}/>
//     </div>
//   )
// }

// export default Home 
  
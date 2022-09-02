import React, { useEffect } from "react";
import HeroSection from "../Component/HeroSection";
import { useGlobalContext } from "../Context";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection />;
};

export default About;
 


























//using props 



// import React from 'react'
// import HeroSection from '../Component/HeroSection'

// const About = () => {
//   const data={
//     name:"Dipak Mandal",
//     image:"./images/about1.svg"
//   }
//   return (
//     <div>
//      <HeroSection {...data}/>
//     </div>
//   )
// }
 
// export default About
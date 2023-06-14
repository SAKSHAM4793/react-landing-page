import React from 'react';
import HeroSection from './component/HeroSection';
const About = () => {
  const data={
    name:"Saksham Yadav",
    image:"./img/about1.svg"
  };
  return (
    
     <HeroSection {...data}/>
  )
}

export default About;
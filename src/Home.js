import React from 'react';
import HeroSection from './component/HeroSection';
 import Services from './Services';
import Contact from './Contact';
 
const Home = () => {
  const data={
    name:"Saksham Yadav",
    image:"./img/hero.svg"
  };
  return (

  <>
   <HeroSection {...data}/>
   <Services/>
   <Contact/>
  </>
  )
}

export default Home;
import React from 'react';
// import {NavLink} from 'react-router-dom';
import {FaReact} from 'react-icons/fa';
import Navbar from './Navbar';
import styled from 'styled-components';
const Header = () => {
  return (
    
   <MainHeader>
      <span><FaReact/></span>
   {/* <NavLink to="/">
    
   <img src="./img/react1.png" alt="logo" className="logo" />
   </NavLink> */}
    <Navbar/>
    </MainHeader>
    
    
    
  )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 6rem;
 background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 18%;
  }
`;

export default Header;
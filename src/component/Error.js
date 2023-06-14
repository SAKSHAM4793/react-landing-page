import React from "react";
import styled from "styled-components";
import { Button } from "./style/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="../img/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
img{
    height:45%;
    Width:45%;
}
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;
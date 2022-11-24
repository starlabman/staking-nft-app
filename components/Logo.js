import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import LogoSrc from "../assets/logo-1.png";/*

const LogoImg = styled.img`
  margin: 0px;
  max-width: 240px;
  height: auto;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em){
    max-width: 180px;
    height: auto;
  }
`;
const Logo = () => {
  return (
    <Link to="/">
      {/* <LogoImg src={LogoSrc}></LogoImg> */}
    </Link>
  );
};

export default Logo;

import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 100%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Roboto", cursive;
  }
  .text-1 {
    color: green;
  }
  .text-2 {
    color: purple;
  }
  .text-3 {
    color: red; 
  }
  
  @media (max-width: 90em) {
    font-size: ${props => props.theme.fontxl};

  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%
  }

`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.text}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
    
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  
`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em) {
  align-self: center;
  text-align: center;

  button{
    margin: 0 auto;
  }
}

`

const TypeWriterText = () => {
  return (
    <>
    <Title>
     MINT YOUR FREE NFTS.
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class="text-1">Temple.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">FREE NFTS MINT.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">FREE NFTS LAUNCHPAD!</span>')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
    <SubTitle>TEMPLE | YOU ARE WELCOME</SubTitle>
    <ButtonContainer>
    <Button text="Create" link="https://airtable.com/shrrR12E4ezse7IgP"/>
    </ButtonContainer>
    </>
  );
};

TypeWriterText.defaultProps = {
  title: "Temple | Free NFT LaunchPad",
  keyword:
    "bitcoin, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet",
  desc: "The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.",
};

export default TypeWriterText;

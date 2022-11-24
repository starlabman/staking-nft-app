import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from "react";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw; 
  background-color: ${props => props.theme.body};
  position: relative;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%
  }
  @media (max-width: 48em) {
    width: 90%
  }

`
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
right:50%;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: lightblue; */

@media (max-width: 48em) {
  width: 90%;
}

&>*:nth-of-type(2n + 1){
  justify-content: start;
  @media (max-width: 48em) {
    justify-content: center;
  }

  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
    @media (max-width: 48em) {
      border-radius: 50px 0 50px 0;
    text-align: right;
    p{
      border-radius: 40px 0 40px 0;
    }
    }
  }
  p{
    border-radius: 40px 0 40px 0;
  }
}
&>*:nth-of-type(2n){
  justify-content: end;
  @media (max-width: 48em) {
    justify-content: center;
  }

  div{
    border-radius: 0 50px 0 50px;
    text-align: left;
    
  }
  p{
    border-radius: 0 40px 0 40px;
  }
}
`
const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em) {
  justify-content: flex-end !important;
}
`

const ItemContainter = styled.div`
width: 40%; 
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em) {
  width: 70%
}
`
const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`
const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
}
`
const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxs};
}
`

const RoadMapItem = ({ title, subtext, addToRefs }) => {
  return(
    <Item ref={addToRefs}>
      <ItemContainter>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainter>
    </Item>
  )
}

const Roadmap = () => {
const revealRefs = useRef([]);
revealRefs.current =[];
gsap.registerPlugin(ScrollTrigger);
  
const addToRefs = (el) => {
  if (el && !revealRefs.current.includes(el)) {
    revealRefs.current.push(el);
  }
}


useLayoutEffect (() => {
  let t1 = gsap.timeline();
revealRefs.current.forEach( (el, index) => {

  t1.fromTo(
    el.childNodes[0],
    {
      y: '0'
    }, {
      y: '-30%',

      scrollTrigger: {
        id: `section-${index + 1}`,
        trigger: el,
        start: 'top center+=200px',
        end: 'bottom center',
        scrub: true,
      }
    }
  )

})

  return () => {

  };
}, [])


  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
        <Item>&nbsp;</Item>
          <RoadMapItem addToRefs={addToRefs} title="Listening Party" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRefs={addToRefs} title="The Drop" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRefs={addToRefs} title="Early Access" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRefs={addToRefs} title="New Merch" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRefs={addToRefs} title="DAO Engagement" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.t" />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;

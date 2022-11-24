import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/nft/179.png';
import img2 from '../assets/nft/1085.png';
import img3 from '../assets/nft/2021.png';
import img4 from '../assets/nft/2420.png';
import img5 from '../assets/nft/2525.png';
import img6 from '../assets/nft/2413.png';
import img7 from '../assets/nft/2338.png';
import img8 from '../assets/nft/2411.png';
import img9 from '../assets/nft/2413.png';
import img10 from '../assets/nft/2801.png';

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em){
    height: 60vh;
}

@media (max-width: 64em){
    height: 50vh;
    width: 30vw;
}
@media (max-width: 48em){
    height: 50vh;
    width: 40vw;
}
@media (max-width: 30em){
    height: 45vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
        width: 3rem;
    }
    @media (max-width: 30em){
        width: 3rem;
    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
    @media (max-width: 64em){
        width: 3rem;
    }
    @media (max-width: 30em){
        width: 3rem;
    }
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable: true,
        }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}

        className="mySwiper"
      >
        <SwiperSlide>  <img src={img1} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img2} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img3} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img4} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img5} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img6} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img7} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img8} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img9} alt="Temple" />   </SwiperSlide>
        <SwiperSlide>  <img src={img10} alt="Temple" />   </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel
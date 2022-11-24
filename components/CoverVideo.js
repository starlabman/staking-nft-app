import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/story.mp4'


const VideoContainer = styled.div`
width: 100%;

video{ 
    width: 100%;
    height: auto;
}

@media (max-width: 100em) {
  min-width: 90vh;
  
}
`
const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4"  autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CoverVideo
import React from 'react'
import Video from 'next-video'
import bgvdo from '../../videos/bgvdo.mp4'
import Grad from './Grad'
const Vdo = () => {
  return (
    <div className='-z-50 min-h-screen backdrop-blur-xl fixed'>
        <Video className='-z-50 min-h-screen w-full backdrop-blur-sm  fixed' src={bgvdo} controls={false} playsInline autoPlay loop muted />
    </div>
  )
}

export default Vdo
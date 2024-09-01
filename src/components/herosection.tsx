import React from 'react';
import Animations from './animations';

interface HeroProps{
  text:string,

}

function HeroSection ({text}:HeroProps){
  return (
    <>
    <div className='w-full md:pt-40 pt-40 z-[10]'>
        <h1 className='text-hover-element text-center md:text-8xl text-5xl font-bold text-primary md:pb-20 pb-20'>Banking<br /> <span className='text-hover-element text-center text-primary-light'>{text}</span></h1>
    </div>
    <div className='flex items-center justify-center'>
        <video src="heroVideo.mp4" width={300} height={200} autoPlay muted loop></video>
        </div>
    </>
  )
}

export default HeroSection;

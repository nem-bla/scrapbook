import React from 'react';
import videoBg from '../assets/videoBg.mp4';

const Hero = ({ title = '', subtitle = '' }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <video className="absolute inset-0 w-full h-full object-cover" src={videoBg} autoPlay loop muted />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;

import React from 'react'
import image from '../assets/wall galaxy.jpeg'
const Hero = () => {
return (
    <div
    className="w-full h-screen flex justify-center items-center relative"
    style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',  // width fits screen, height scales
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
    }}
    >
    <h1 className="absolute text-5xl text-white capitalize font-bold top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        Transform your ideas into designs with <span className='text-green-700 text-6xl'>Wall Galaxy</span>
    </h1>
    </div>

)
}

export default Hero;
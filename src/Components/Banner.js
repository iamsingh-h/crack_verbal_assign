import React from 'react';
import ReactPlayer from "react-player";

function Banner() {
  return (
    <div className='flex flex-col-reverse md:flex-row mt-2 bg-white py-10 md:py-36'>
      <div className='w-full md:w-1/2 px-5 py-5 text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl text-red-500 font-bold'>
          "CRACK THE GMAT" PREPARATION LIVE ONLINE COURSE 2021
        </h1>
        <p className='font-bold text-xl mt-4'>
          Access <span className='text-blue-800'>FREE</span> Trial Where We Reveal Effective Techniques To Crack The <span className='text-blue-800'>700+ GMAT Score</span> in 60 Days
        </p>
        <button className='bg-blue-800 px-3 text-white font-bold py-2 rounded-lg mt-4 hover:bg-white hover:text-black hover:border-blue-800 hover:border-2 lg:ml-48'>
          Get Started
        </button>
      </div>

      <div className='w-full md:w-1/2 px-2 py-2'>
        <ReactPlayer url="https://www.youtube.com/watch?v=f8C9LD66BSo" />
      </div>
    </div>
  );
}

export default Banner;

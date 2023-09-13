import React from 'react';

function Free() {
  return (
    <div className='flex flex-col-reverse lg:flex-row bg-blue-900 px-4 py-10 lg:py-36 text-white'>
      <div className='w-full lg:w-1/2 px-4'>
        <h1 className='text-3xl lg:text-4xl font-bold'>
          WHAT YOU WILL RECEIVE WITH TRIAL
        </h1>
        <p className='mt-4 text-lg lg:text-2xl'>
          > Overview of The <span className='font-bold text-red-600'>"OLP" Strategy</span> - Optimized Learning Path Where We Share Step By Step Plan To Crack The 700+ GMAT Score
        </p>
        <p className='mt-4 text-lg lg:text-2xl'>
          > Real-Time Application Examples of <span className='font-bold text-red-600'>"APS Techniques"</span> - Approach + Pattern + Strategy
        </p>
        <p className='mt-4 text-lg lg:text-2xl'>
          > <span className='font-bold text-red-600'>Downloadable Resources</span> & Cheatsheet + Playbooks To Accelerate Your GMAT Prep Learning Curve
        </p>
      </div>

      <div className='w-full lg:w-1/2'>
        <h1 className='text-lg lg:text-2xl font-bold text-center mt-4 lg:mt-24'>
          CLICK BELOW TO GET INSTANT FREE TRIAL ACCESS ON HOW TO CRACK THE GMAT WITHIN 60 DAYS
        </h1>
        <p className='mt-2 text-center font-bold text-red-600'>Don't Miss Out! Access Trial Below!</p>
        <button className='bg-red-700 font-bold mt-2 py-3 px-4 rounded-xl mx-auto lg:ml-0 text-white hover:bg-red-600 lg:ml-60'>
          ACCESS TRIAL COURSE
        </button>
      </div>
    </div>
  );
}

export default Free;

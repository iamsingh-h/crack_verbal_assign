import React from 'react';
import ReactPlayer from "react-player";

const reviews = [
  {
    name: 'KAKOLI SANYAL',
    score: 730,
    college: "https://www.isb.edu/content/dam/sites/isb/about-isb/ISB_transparent_logo.png",
    review: "I gave the test for the first time but I didn’t get a good score. I think you need some strategies to solve the questions in the given amount of time. Crackverbal courses will teach you all those strategies to ace the test",
  },
  {
    name: 'NEERAJ KAKKAR',
    score: 770,
    college: "https://www.wharton.upenn.edu/wp-content/plugins/martech-chupacabra/includes/images/Wharton-Logo-RGB.png",
    review: "I gave the test for the first time but I didn’t get a good score. I think you need some strategies to solve the questions in the given amount of time. Crackverbal courses will teach you all those strategies to ace the test",
  },
  {
    name: 'Aditya',
    score: 710,
    college: "https://www.cmu.edu/cmnews/extra/extra_art/buss_logo.jpg",
    review: "I owe my MBA admit to Crackverbal. Whenever I had any doubts I would post my queries on the forum and the Prep team at Crackverbal would immediately help me with solutions."
  },
  {
    name: 'KAKOLI SANYAL',
    score: 730,
    college: "https://www.isb.edu/content/dam/sites/isb/about-isb/ISB_transparent_logo.png",
    review: "I gave the test for the first time but I didn’t get a good score. I think you need some strategies to solve the questions in the given amount of time. Crackverbal courses will teach you all those strategies to ace the test",
  },
  {
    name: 'NEERAJ KAKKAR',
    score: 770,
    college: "https://www.wharton.upenn.edu/wp-content/plugins/martech-chupacabra/includes/images/Wharton-Logo-RGB.png",
    review: "I gave the test for the first time but I didn’t get a good score. I think you need some strategies to solve the questions in the given amount of time. Crackverbal courses will teach you all those strategies to ace the test",
  },
  {
    name: 'Aditya',
    score: 710,
    college: "https://www.cmu.edu/cmnews/extra/extra_art/buss_logo.jpg",
    review: "I owe my MBA admit to Crackverbal. Whenever I had any doubts I would post my queries on the forum and the Prep team at Crackverbal would immediately help me with solutions."
  }
];

function Reviews() {
  return (
    <div className='mt-8 lg:mt-24' >
      <h1 className='text-3xl lg:text-5xl font-bold text-center text-blue-800'>Recent Reviews of Our Alumni</h1>
      <div className='flex flex-col lg:flex-row mt-6 lg:mt-10 space-y-4 lg:space-y-0 lg:space-x-8 px-4 lg:px-14'>
        <ReactPlayer url="https://www.youtube.com/watch?v=Ev739wXDMWg" />
        <ReactPlayer url="https://www.youtube.com/watch?v=DlM4gqClios" />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 mt-6 lg:mt-14 px-4 lg:px-8'>
        {reviews.map((review, index) => {
          return (
            <div key={index} className='bg-slate-200 rounded-xl py-6'>
              <img src={review.college} alt={review.name} className='h-10 lg:h-16 ml-4 lg:ml-24 mt-4' />
              <h3 className='text-xl lg:text-2xl font-bold mt-2 ml-4'>{review.name}</h3>
              <span className='ml-4 font-semibold text-lg'>Score: {review.score}</span>
              <p className='mt-4 px-4 text-sm lg:text-base'>{review.review}</p>
            </div>
          );
        })}
      </div>
      <button className='mt-6 mx-auto lg:mx-0 bg-red-700 rounded-xl py-2 px-6 text-white hover:bg-red-600 lg:ml-[600px]'>
        Read More Testimonials
      </button>
    </div>
  );
}

export default Reviews;

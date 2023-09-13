import React from 'react';

const content = [
  {
    heading: 'CONNECT',
    description:
      'Our Coaches will help you create a plan and help you with a highly effective learning path that’s unique to your goals and Target GMAT Score',
  },
  {
    heading: 'CONSUME',
    description:
      'Concepts, Sessions, and More - Depending on the path that is best for you, you begin your learning journey through our “Learn Paths” optimized for scoring and success',
  },
  {
    heading: 'CLARIFY',
    description:
      'Confidently clarify concepts and deep-dive into harder questions with our coaches. For On-Demand Prep, you can buy credits to gain personal access to Coaches too',
  },
];

const content2 = [
  {
    num: '01',
    heading: 'Connect',
    subhead:
      'Our Coaches will help you create a "Optimized Learning Path" plan and help you with a highly effective learning path that’s unique to your goals and Target GMAT Score.',
    tips: [
      'GMAT Planner + Target Score Session',
      'Access to Cheatsheets',
      'Weekly Goal Progress & Analytics',
      'Review Session with Facilitator',
    ],
  },
  {
    num: '02',
    heading: 'Consume - Concepts + Techniques',
    subhead:
      "Concepts, Sessions, and More - Depending on the path that's best for you, you begin your learning journey through our 'Learn Paths' optimized for scoring and success.",
    tips: ['Compute™ LIVE - 40+ Hours of GMAT Quant', 'Compre™ LIVE - 40+ Hours of GMAT Verbal', '80+ Hours of On-Demand Recordings'],
  },
  {
    num: '03',
    heading: 'Correct',
    subhead:
      "Sectional Tests after each sub-module to test clarity of concepts and your understanding of 'Quick Hacks'.",
    tips: [
      'We cover more than 55 sectional tests (1200+ Questions) to ensure you got it right from the start.',
      'Clear video explanation of How to solve questions effectively and with incredible accuracy.',
      'Scores to visualize your performance and path corrections to increase your learning efficiency and effectiveness.',
    ],
  },
  {
    num: '04',
    heading: 'Crack The GMAT - Mock The Mat',
    subhead:
      "The best way to crack the GMAT in one go is to score well in the Mock Tests. They mirror your actual performance in the GMAT. We have 5 Full-length tests to get you to the score improvement you need.",
    tips: [
      '5 Full Length Mock tests that mirror with accuracy your real-world GMAT score.',
      'GMAT Club CATs + Question Bank - Quant and Verbal to ensure you are moving ahead in the right direction and achieving your target score.',
    ],
  },
];

function Prep() {
  return (
    <div className='mt-8 lg:mt-24'>
      <h1 className='text-3xl lg:text-4xl font-bold text-center'>We Help You Accelerate Your GMAT Prep in 3 Ways</h1>
      <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 mx-4 lg:mx-10 mt-8 lg:mt-16 text-center'>
        {content.map((data) => {
          return (
            <div key={data.heading} className='bg-red-700 px-4 py-8 rounded-xl text-white'>
              <h1 className='text-2xl lg:text-2xl font-bold'>{data.heading}</h1>
              <p className='text-lg lg:text-xl mt-2'>{data.description}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h1 className='mt-10 text-3xl lg:text-6xl font-bold text-center'>
          Our Students Have Seen Results By Applying Our <span className='text-blue-800'>"Magic Method"</span>
        </h1>
        <p className='mt-4 lg:mt-10 text-base lg:text-xl text-center px-4 lg:px-8 font-semibold'>
          The most effective techniques revealed ever. That too, with a personal touch. Carefully designed & battle-tested On-Demand GMAT Mastery Program. Best-in-class platform with access to a highly interactive community. Access to Coaches & guides to help you address queries.
        </p>

        <div className='px-4 lg:px-16 mt-6'>
          {content2.map((data) => {
            return (
              <div key={data.num} className='bg-white border-2 rounded-2xl border-blue-800 mt-6 py-6'>
                <h1 className='text-2xl lg:text-4xl text-blue-800 font-bold text-center'>{data.num} {data.heading}</h1>
                <p className='font-semibold mt-6 px-4 text-center'>{data.subhead}</p>
                {data.tips.map((tip, index) => {
                  return (
                    <h5 key={index} className='mt-4 text-center'> > {tip}</h5>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Prep;

import React from 'react';

const content = [
  {
    url: "https://lh3.googleusercontent.com/BOBwb0PE54HAUbRwpyr1znPizDTANj2qCxXg2F_WsnAWFg_qiZbHmklufRrbz4TEpZKqSeRkQsWtPAoe-GNxPWVfi3vso-h_T15H=w854",
    name: 'Arun Jagannathan',
    role: 'Co-Founder CEO | Crackverbal | GMAT Verbal & MBA Coach',
    dsc: "Arun has trained and mentored over 30K students for the GMAT, GRE and applications in the past 12 years.Arun has personally designed the Crackverbal GMAT curriculum from the ground up to include every feature he saw as missing in traditional courses and has also devised all-new techniques to help out students.He is an active and well-respected member on popular online GMAT forums such as Pagalguy.com (member since 2003, and one of the official MBA consultants), beatthegmat.com and gmatclub.com.His students have made it into top B-Schools such as INSEAD, Wharton, Harvard, Stanford, and ISB to name a few."
  },
  {
    url: "https://lh3.googleusercontent.com/SWF8bPuFKI5Or6dXKrbI52TlfMc4be_8E_VdUJSc4nsDXIk2ixmJQAtZrui7-YcvRHEQoAipNnucP7Xm9zmSXtlZjFxKerl8VHo=w854",
    name: 'Shree Kurup',
    role: 'Co-Founder COO | Crackverbal | MBA Admissions Coach',
    dsc: "Fellow of the ISB Goldman Sachs 10,000 Women Entrepreneurs program.Mentor with the Cherie Blair Foundation where she mentors women entrepreneurs from across the world.'As an entrepreneur, if there is one lesson you learn it is this: There is no problem that cannot be fixed.'Grew Crackverbal from 30 students to 30,000+ students through growth hacking and gumption."
  }
];

function About() {
  return (
    <div className='mt-8 lg:mt-20 bg-slate-200 py-8 lg:py-24'>
      <div className='text-center'>
        <h1 className='text-4xl lg:text-7xl font-bold text-center'>About Us</h1>
        <p className='mt-4 lg:mt-10 text-base lg:text-2xl px-4 lg:px-16'>Crackverbal is composed of diverse team members who are united by the mission to build a world-class test-prep and admissions company to help students make smarter career choices.</p>
      </div>
      <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 mx-4 lg:mx-10 mt-4 lg:mt-10 lg:ml-0'>
        {content.map((data, index) => {
          return (
            <div key={index} className='bg-white px-4 py-8 rounded-xl text-center lg:text-left lg:ml-60 sm:ml-4'>
              <h1 className='text-2xl lg:text-3xl font-bold lg:text-center'>{data.name}</h1>
              <img src={data.url} alt={data.name} className='mt-4 lg:mt-10 h-40 lg:h-60 mx-auto lg:ml-24'></img>
              <h3 className='font-semibold mt-2'>{data.role}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;

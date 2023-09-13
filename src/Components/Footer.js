import React from 'react';

function Footer() {
  return (
    <div>
      <footer className='w-full py-20 lg:py-40 bg-blue-900 text-white flex mt-20 bottom-0'>
        <div className='w-full lg:w-1/2 left'>
          <h1 className='text-xl lg:text-3xl font-bold px-4 lg:px-6'>
            Subscribe To Our Newsletter Where We Share Weekly Insights On All Things Career
          </h1>
        </div>
        <div className='w-full lg:w-1/2 right text-center mt-6 lg:mt-0'>
          <h2 className='text-lg lg:text-2xl font-bold mt-2'>
            GET A FREE EBOOK IN YOUR MAIL
          </h2>
          <form className='mt-4 flex flex-col lg:flex-row items-center lg:ml-48'>
            <input
              type='email'
              placeholder='Email'
              className='px-4 py-2 lg:px-6 lg:py-2 rounded-lg mt-2 lg:mt-0'
            />
            <button className='mt-2 lg:mt-0 bg-red-700 rounded-xl py-2 px-4 lg:px-6 font-bold hover:bg-red-600 lg:ml-2'>
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

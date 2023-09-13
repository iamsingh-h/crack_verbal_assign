import React from 'react';

const images = [
  {
    url: "https://www.nus.edu.sg/images/default-source/identity-images/NUS_logo_full-horizontal.jpg"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKVeuUyaEJEV7AupWDU8lN5MCbME6poRxIZPs_FQ_&s"
  },
  {
    url: "https://d36d5hrav9g5xj.cloudfront.net/community-images/5e87f837-7344-4cd0-9cfb-eb9066f52ad8/logo/logo-905d98a3-a9a0-40f3-a0c4-9abf7f396156.png"
  },
  {
    url: "https://www.mastere.tn/wp-content/uploads/2022/09/243372124aa46a8309bdb87ca5659114.png"
  },
  {
    url: "https://www.isb.edu/content/dam/sites/isb/about-isb/ISB_transparent_logo.png"
  },
  {
    url: "https://www.healthcare-management-degree.net/wp-content/uploads/2019/02/university-of-michigan.jpg"
  },
  {
    url: "https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2020/09/Schulich_Digital_Horiz_08.2020.png"
  },
  {
    url: "https://photos.prnewswire.com/prn/20130605/LA26150LOGO?max=200"
  },
  {
    url: "https://magazine.foster.uw.edu/wp-content/uploads/2020/11/foster_330x130.png"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxVeBaf1Khd3G7H4C0Jz-MJvlkMvHQpIAGw&usqp=CAU"
  },
  {
    url: "https://download.logo.wine/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.png"
  }
];

function UnivAlum() {
  return (
    <div className='mt-8 lg:mt-20'>
      <h1 className='text-3xl lg:text-5xl font-bold text-center text-blue-800'>University Alum Represent</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 mt-6 lg:mt-14 px-4 lg:px-20 ml-4 lg:ml-20'>
        {images.map((image, index) => {
          return (
            <img key={index} src={image.url} alt={`University Logo ${index + 1}`} className='h-20 sm:h-30 w-32 sm:w-40 mt-6 mx-auto' />
          );
        })}
      </div>
    </div>
  );
}

export default UnivAlum;

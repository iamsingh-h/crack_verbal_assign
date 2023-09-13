import React from 'react';

function Navbar() {
  

  return (
    <nav className="w-full bg-white top-0 py-5 mx-auto flex flex-wrap items-center justify-between sm:px-4 sm:space-x-1">
      <img
        className="h-10 ml-4 sm:ml-10"
        src="https://lh3.googleusercontent.com/ORYp4YJaLy5EZ1F5HYzYt_ui1O3sD5WgkI5QGNpX6JckALm6GHeNs0gxoCs6uy7e99I9JoXFsETtuFIf0kxK7v3nRlXmS5e8-Oc=s0"
        alt="logo"
      />
      <ul className="flex flex-wrap items-center  space-x-11 justify-end sm:px-28 font-bold">
      <li><button>Free Trial</button></li>
        <li><button>Preparation</button></li>
        <li><button>About us</button></li>
        <li><button>Testimonials</button></li>
        <li><button  className=" bg-red-700 rounded-xl py-2 px-4 text-white hover:bg-white hover:text-black hover:border-2 hover:border-red-700">Subscribe</button></li>

      </ul>
    </nav>
  );
}

export default Navbar;

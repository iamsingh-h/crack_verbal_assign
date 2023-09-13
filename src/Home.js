import React,{useRef} from 'react'
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Free from './Components/Free';
import Prep from './Components/Prep'
import About from './Components/About';
import Reviews from './Components/Reviews';
import UnivAlum from './Components/UnivAlum';
import Footer from './Components/Footer';



function Home() {




  return (
    <>
      <Navbar/>
      <Banner/>
      <Free/>
      <Prep/>
      <About/>
      <Reviews/>
      <UnivAlum/>
      <Footer/>
    </>
  )
}

export default Home
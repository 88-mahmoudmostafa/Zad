import { useState } from 'react';
import Mod from './Mod'
import './Nour.css';
import { FaBoltLightning } from "react-icons/fa6";


// import required modules
import { Pagination,Navigation,Autoplay } from 'swiper/modules';

function ControlledCarousel() {

  return (
    <div className='nourss'>
   <div className='nour-title'>
    <h2>عروض لفتره محدوده <FaBoltLightning/></h2>
    <h1>العروض</h1>
    {/* <span>ينتهى الغرض خلال</span> */}
   </div>
   
     <div>
      <Mod/>
     </div>
    </div>
  );
}

export default ControlledCarousel;
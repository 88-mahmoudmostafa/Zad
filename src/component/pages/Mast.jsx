import Carousel from 'react-bootstrap/Carousel';
import { FaBabyCarriage } from "react-icons/fa";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import './Mast.css'
function CarouselFadeExample() {
  const [index,setIndex]=useState(0)
  useEffect(()=>{
    const timer=setInterval(()=>{
      setIndex(prev=>(prev+1)% words.length)
    },5000);
    return clearInterval(timer)
    
  },[])
  return (
   <div>
      <Carousel fade interval={500} className='container-mast'>

      <Carousel.Item className='item'>
        <Carousel.Caption className='dep'>
          <h3>وصل حديثا</h3>
          <Link to='/MT' className='bting' > <FaBabyCarriage/>تسويق الان</Link>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item  className='item'>
        <Carousel.Caption className='dep'>
          <h3>عرض الصيف</h3>
          <Link to='/MT' className='bting'><FaBabyCarriage/>تسويق الان </Link>
          
        </Carousel.Caption>
    </Carousel.Item>

       <Carousel.Item  className='item'>
        <Carousel.Caption className='dep'>
          <h3>عرض الشتاء</h3>
          <Link to='/MT' className='bting'><FaBabyCarriage/>تسويق الان </Link>
          
        </Carousel.Caption>
    </Carousel.Item>

       <Carousel.Item  className='item'>
        <Carousel.Caption className='dep'>
          <h3>خصم   % 20</h3>
          <Link to='/MT' className='bting'><FaBabyCarriage/>تسويق الان </Link>
          
        </Carousel.Caption>
    </Carousel.Item>

    </Carousel>


    
   </div>


  
 
  );
}

export default CarouselFadeExample;
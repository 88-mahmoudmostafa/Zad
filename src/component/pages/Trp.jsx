import { useState } from 'react';
import Mod from './Mod'
import './Nour.css';
import react from 'react';
import Cards from './Cards'
import {product} from './Cards'
import Card from 'react-bootstrap/Card'
// import {Link}   from 'react-router-dom'
import './Mod.css'
import { FaRegStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
   <div className='nour-title'>
    <h2> تصفح حسب التصنيفات</h2>
    <h2>التصنيفات</h2>
    {/* <span>ينتهى الغرض خلال</span> */}
   </div>
     <div>
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        autoplay={{delay:2000,disableOnInteraction:false}}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        {product.map(p=>(
          <SwiperSlide key={p.id}>
            <Card className='card-contant'>
              <Card.Img className='img-card' src={p.img}/>
              <Card.Body className='pros-card'>
               <span>{p.sdd}</span>
                <p>{p.name}</p>
                {/* <small>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  (4,9)
                </small> */}
            
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
        
     
      </Swiper>
    </>
      
     </div>
   
    </div>
  );
}

export default ControlledCarousel;
import react from 'react';
import Cards from './Cards'
import {product} from './Cards'
import Card from 'react-bootstrap/Card'
// import {Link}   from 'react-router-dom'
import './Mod.css'
import { FaRegStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import Button from 'react-bootstrap/esm/Button';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Aya} from '../Contaxt/Contaxt';


// import required modules
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";

function ControlledCarousel() {
  const {mof,setMof,setCard,lang,cared,addcard,fortmov,open,setOpen}=Aya()

  return (
    <div>
   

    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        loop={false}
        autoplay={{delay:2000,disableOnInteraction:false}}
        pagination={{
          clickable: true,
        }}
        key={lang?'ar':'en'}
        dir={lang?'rtl':'ltr'}
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
            spaceBetween: 30,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 40,
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
                <small>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  <FaRegStar className='start'/>
                  (4,9)
                </small>
                <h4>{p.price}ج.م</h4>
                <div className='link-faes'>
                {cared.some(item=>item.id===p.id)?
                 <button className='link-cardcom' onClick={()=>{
                  setCard(prev=>prev.filter(item=>item.id !==p.id))
                   setOpen(!open)}}
                   >تم الاضافه</button>
                 
                 :
                 <button className='link-card' onClick={()=>addcard(p)}><FaCartPlus/>اضافه الى السله</button>  
              }
                <Link className='link-card' to='/sala'><FaEye/></Link>
              </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
        
     
      </Swiper>
    </>
    </div>
  );
}

export default ControlledCarousel;
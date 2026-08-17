import react from 'react';
import Mod from './Mod'
import './Nour.css';

function ControlledCarousel() {
  

  return (
    <div>
   <div className='nour-title'>
    <h2>وصل حديثا</h2>
    <h1>احدث المنتجات</h1>
    {/* <span>ينتهى الغرض خلال</span> */}
   </div>
  
   <div>
    <Mod/>
   </div>
    </div>
  );
}

export default ControlledCarousel;
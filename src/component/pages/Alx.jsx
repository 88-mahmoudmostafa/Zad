import react from 'react';
import Mod from './Mod'
import './Nour.css';

function ControlledCarousel() {



  return (
    <div className='nourss'>
   <div className='nour-title'>
    <h2> الاكثر طلبا</h2>
    <h1>الا كثر مبيعات</h1>
    {/* <span>ينتهى الغرض خلال</span> */}
   </div>
  <div>
    <Mod/>
  </div>
    </div>
  );
}

export default ControlledCarousel;
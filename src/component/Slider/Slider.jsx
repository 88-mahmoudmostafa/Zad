
import Mast from '../pages/Mast'
import Nour from '../pages/Nour'
import Mov  from '../pages/Mov';
import Rem from   '../pages/Rem';
import Pro from '../pages/Product';
import Trp from '../pages/Trp';
import Al from '../pages/Alx'
import Mz from '../pages/Mazat'
import Sf from '../pages/Stfsr'
import Mk from '../pages/Mark'
import Ti from '../pages/Title'
import './Slider.css'

function CarouselFadeExample() {
  return (
   <div className='container-slider'>
    
    <Mast/>
    <Ti/>
    <Nour/>
    <Pro/>
    <Trp/>
    <Al/>
    <Mz/>
    <Sf/>
    <Rem/>
     <Mk/>
    <Mov/>

   </div> 
  );
}

export default CarouselFadeExample;
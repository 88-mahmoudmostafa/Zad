import React from 'react'
import Thert from '../../assets/Theart.png'
import Laptop from '../../assets/Lap.png'
import Mobil from '../../assets/Mobil.png'
import Sama from '../../assets/Sama.png'
import Timer from '../../assets/Timer.png'
import Play from '../../assets/Play.png';
import './Title.css'
function Title() {
  return (
    <div className='container-title'>
        <div className='title-frist'>

        <div className='title-frv'>
            <div>
                <span>أجهزة ألعاب</span>
                <h2>اشتري 2 واحصل 1</h2>
                <h3>مجاناً</h3>
            </div>
            <div>
               <img src={Play} alt='name-mobil' className='img-title'/>            
            </div>
        </div>
        
        <div className='title-fra'>
            <div>
                <span>ساعات</span>
                <h2>  ساعات ابل سرش</h2>
                <h3>75%</h3>
            </div>
            <div>
               <img src={Timer} alt='name-play' className='img-title'/>            
            </div>
        </div>

        <div className='title-frb'>

            <div>
                <span>الاكثر مبيعات</span>
                <h2>سماعه شرم شرم</h2>
                <h3>90%</h3>
            </div>
            <div>
               <img src={Sama} alt='name-timer' className='img-title'/>            
            </div>
        </div>
           
        </div>
        
        <div className='title-least'>
            <div className='title-frc'>

            <div>
                <span>الأكثر شهرة ⭐</span>
                <h2>لابتوب ألترا</h2>
                <h3>قوة هائلة تنجز كل مهامك اليومية بسهولة.</h3>
            </div>
            <div>
               <img src={Laptop} alt='name-Laptop' className='img-title'/>            
            </div>
           </div>

           <div className='title-frd'>

            <div>
                <span>الأكثر مبيعاً 🔥</span>
                <h2>آيفون 17 برو</h2>
                <h3>أداء استثنائي وتصميم عصري يناسبك.</h3>
            </div>
            <div>
               <img src={Mobil} alt='name-sama' className='img-title'/>            
            </div>
        </div>

        </div>
    </div>
  )
}

export default Title
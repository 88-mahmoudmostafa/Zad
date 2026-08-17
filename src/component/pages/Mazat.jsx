import React from 'react'
import './Mazat.css'
import { FaRegStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";




function Mazat() {
  return (
    <div className='asid-contant'>
       <div className='cold'>
        <div className='asid-h'>
          <p>لماذا تختارنا</p>
          <h1>مميزاتنه</h1>
        </div> 

        <div  className='me-card'>
          
        
        

         <aside>
          <FaRegStar className='icon-asid'/>
          <h3>جوده وتوفير</h3>
          <p>رقابة شاملة على الجودة وأسعار في متناول الجمي...</p>
         </aside>

          <aside>
            <FaHome className='icon-asid'/>
          <h3>مستودعات عالمية</h3>
          <p>أكثر من 37 مستودعاً حول العالم لضمان توافر ال...</p>
         </aside>

          <aside>
            <FaTruck className='icon-asid'/>
          <h3>شحن سريع</h3>
          <p>توصيل سريع ومريح من الباب للباب</p>
         </aside>

          <aside>
            <FaCheck className='icon-asid'/>
          <h3>دفع امن</h3>
          <p>توصيل سريع ومريح من الباب للباب</p>
         </aside>

          <aside>
            <FaQuestion className='icon-asid'/>
          <h3>لديك استفسار؟</h3>
          <p>خدمة عملاء على مدار الساعة - نحن هنا لمساعدتك...</p>
         </aside>
          </div>
        </div>

      
   </div>
  )
}

export default Mazat
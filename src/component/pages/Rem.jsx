import React from 'react'
import './Mazat.css'
import { FaBolt } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaParachuteBox } from "react-icons/fa";






function Mazat() {
  return (
    
    <div className='asid-contant'>
      <div className='cold'>
        <div className='asid-h'>
        
          <h1 >ليه تشتري مننا؟</h1>
        </div>

        <div  className='me-card'>
        <aside>
          <FaParachuteBox className='icon-asid'/>
          <h3>شحن مجاني لأول طلب</h3>
          <p>استمتع بتوصيل مجاني تماماً لباب بيتك عند قيامك بأول طلب من متجرنا.</p>
         </aside>

          <aside>
            <FaBolt className='icon-asid'/>
          <h3>عروض وخصومات أسبوعية</h3>
          <p>لا تفوت عروضنا الخاطفة وخصوماتنا التي تتجدد أسبوعياً على أفضل المنتجات.</p>
         </aside>

          <aside>
            <FaCalendarCheck className='icon-asid'/>
          <h3>خصم إضافي للدفع السنوي</h3>
          <p>احصل على خصومات حصرية وتوفير أكبر عند اختيارك لخطط الدفع السنوية.</p>
         </aside>

          <aside >
            <FaHandHoldingWater className='icon-asid'/>
          <h3>برنامج مكافآت الكاش باك</h3>
          <p>استرجع جزءاً من أموالك في محفظتك مع كل عملية شراء تقوم بها.</p>
         </aside>

        

        </div>

      </div>
    </div>
    
  )
}

export default Mazat
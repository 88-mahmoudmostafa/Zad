import React from 'react'
import './Acunt.css'
import acunt1 from '../../../assets/acunt.png'
import { Link } from 'react-router-dom'
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";



function acunt() {
  return (
    <div className='color'>
      {/* updown */}
        <div className='acunt-title'>
            <div className='acunt-img'>
         <img src={acunt1} alt='acunt-name'/>
            </div>
            <div className='acunt-plas'>
                <div>
                <img className='acunt-img2' src={acunt1}/>
                <h2>أدمن زاد ستور</h2>
                <p>هذا المستخدم لم يقم بكتابة نبذة عنه بعد.</p>
                <p className='acunt-mm'>مدير النظام</p>
                </div>
                <div className='btn-pns'>
                    <Link to='/UP' className='acunt-btn'><AiTwotoneEdit/> تعديل البينات</Link>
                    <button className='acunt-bns'><AiOutlinePaperClip/>مشاركه البيانات</button>
                </div>
            </div>
        </div>

    

   {/*under*/}
        <div className='acunt-list'>
         <div>

            <div className='acunt-pp'>
            <div className='pp-pns'>
               <p>إجمالي الأرباح</p> 
               <span>ج.م</span>
            </div>
            <div className='pp-pns'>
                <p>الطلبات المكتملة</p>
                <span>طلب</span>
            </div>
            <div className='pp-pns'>
                <p>المحفظة الحالية</p>
                <span>ج.م</span>
            </div>
             <div className='pp-pns'>
                    <p>أحدث النشاطات </p>
                       <span>لا توجد نشاطات حالياً</span>
            </div>
               </div>

         

         </div>

         <div className='acunt-mastss'>
            <div className='acunt-far'>
                <h3>بيانات الحساب</h3>
                <h6>تاريخ الانضمام</h6>
                <h6>العنوان</h6>
                <h6>شركة الشحن المفضلة</h6>
            </div>
            <div className='listss'>
            <p>تواصل معانا</p>
            </div>
         </div>

        </div>

    </div>
  )
}

export default acunt
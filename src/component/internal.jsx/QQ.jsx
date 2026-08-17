import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa";
import './QQ.css'


function QQ() {
  return (
    <div className='hold-QQ'>
      <div className='hold-qq'>
         <FaCheck className='icon-QQ'/>
        <h3>تم استلام طلبك بنجاح!</h3>
        <h4  >شكراً لتسوقك من ZadStore. تم إرسال رسالة تأكيد إلى بريدك الإلكتروني تتضمن تفاصيل الطلب.</h4>
        <div className='fr-QQ'>
            <div className='pp-qq'>
            <h4>حالة الطلب</h4>
            <p>قيد الم المراجعه</p>
            </div>
            
            <div className='pp-qq'>
            <h4  >رقم الطلب</h4>
            <span>#ORD-1001</span>
            </div>
            </div>
            <div>
                 <Link className='link-qq' to='/TL'>متابعه الطالب</Link>
                <Link className='link-QQ' to='/R'>مواصلت التسويق</Link>
            </div>

        </div>
    </div>
  )
}

export default QQ
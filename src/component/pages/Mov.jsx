import React from 'react'
import{Link}from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import './Mov.css'

function Mov() {
  return (
    <div className='container-mov'>
        <div className='movss'>
        <h1>ارتقِ بتجربتك مع ZadStore</h1>
        <p>اكتشف تشكيلة حصرية من أفضل المنتجات المختارة بعناية لتناسب ذوقك الرفيع. نحن نضمن لك الجودة، الأمان، وتجربة تسوق لا تُنسى مع خدمة عملاء احترافية.

انضم</p>
      <Link to='/LL' className='L-m'>انشى حسابك مجانا  +<FaUser/></Link>
      </div>
    </div>
  )
}

export default Mov
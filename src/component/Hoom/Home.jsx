import React from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import './Home.css'

function Home() {
  return (
 
  <div dir="rtl" className="container-home ">
  <div className="row g-0 shadow-lg rounded-4 overflow-hidden" style={{maxWidth:'900px', margin:'auto'}}>
    
    {/* الناحية اليمين - فورم الدخول */}
    <div className="col-md-7 bg-white p-5">
      <h5 className="fw-bold"><span className="bg-primary text-white p-1 rounded-2 ms-2">🏪</span> زاد ستور</h5>
      <h2 className="fw-bolder mt-5"> مرحباً بعودتك 👋</h2>
      <p className="text-black-50 fs-5">سجل الدخول لمتابعة تجارتك وأرباحك</p>
      {/* هنا تحط الـ inputs بتاعة تسجيل الدخول */}
    </div>

    {/* الناحية الشمال - الجزء البرتقالي */}
    <div className="col-md-5 text-white p-5 text-center d-flex flex-column justify-content-center align-items-center" 
         style={{background: 'linear-gradient(135deg, #e29a2d 0%, #f13538 100%)'}}>
      
      <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width:'120px', height:'120px'}}>
        <div className="bg-white rounded-circle" style={{width:'90px', height:'90px'}}></div>
      </div>

      <h4 className="fw-bold">جديد معنا؟</h4>
      <p className="small text-white-50 lh-lg mt-2 fs-5">
        أنشئ حسابك الآن وابدأ رحلتك في عالم التسوق واستمتع بأفضل العروض الحصرية
      </p>

      <Link to='/C'  className="btn  btn btn-light rounded-pill fw-bold mt-4 px-4 py-2 text-primary">
       <FaUser/>انشاء حسابك+ 
      </Link>
    </div>

  </div>
</div>
  )
}

export default Home
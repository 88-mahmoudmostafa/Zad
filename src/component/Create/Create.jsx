import Form from 'react-bootstrap/Form';
// import { useRef } from 'react';
import { FaUser } from "react-icons/fa";
import './Create.css'
import { Link,useNavigate } from 'react-router-dom';
import { useState,useEffect, useRef } from 'react';
import {Aya} from '../Contaxt/Contaxt'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BsNutFill } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CgPushRight } from "react-icons/cg";






function Create() {
  const [is,setIs]=useState(false)
  const [nour,setNour]=useState(false)
  const navigate=useNavigate()
  const{isLoggedin,setIsLoggedin,user,setUser}=Aya()

  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [pass,setPass]=useState('')



  useEffect(()=>{
         const saving =localStorage.getItem("isLoggedin")
         if(saving==='true'|| isLoggedin===true){
          navigate('/R',{replace:true})
         }
  },[isLoggedin,navigate])
  
  const userdata={phone,name}
  const textRef =useRef(null)
  const passRef =useRef(null)
  const phoneRef =useRef(null)
  const heandelclick=(e)=>{
    e.preventDefault();
     
    if(isLoggedin){
      setIs(true)
    }
      if(name=== '' ){
          textRef.current.focus()
        alert(' اكتب الاسم')
      
        return;
    }
    if(pass.length<= 6 ){
      passRef.current.focus()
      alert(" كلمه المرور مكونه من 6 ارقام اكبر")
       
      return;
    }
    if(phone.length !== 11){
      phoneRef.current.focus()
      alert('الرقم التلفون مكون من 11 رقم')
       
      return;
    }
     else{
      localStorage.setItem("isLoggedin","true")
      localStorage.setItem('user',JSON.stringify(userdata))
      setUser(userdata)
      setIsLoggedin(true)
      navigate('/R')
      
      
    }
    
   }
   const task=()=>{
    setNour(!nour)
   }
   
   
  
  
  
  return (
<div dir="" className="container py-5">
  <div className="row g-0 shadow-lg rounded-4 overflow-hidden" style={{maxWidth:'900px', margin:'auto'}}>
    
    {/* الناحية اليمين - فورم الدخول */}
    <div className="col-md-7  p-5">
        <div className='popopo'>
    <div  className='mama'>
            
            <h5 className="vvv  fw-bold">زاد استوار<span className="  bg-primary text-white  rounded-2 ">🏪</span> </h5>
             {/* <h2>انشاء حساب</h2> */}
             <p>أنشئ حسابك الآن وابدأ رحلتك في عالم التسوق واستمتع بعروضنا<br/> المميز</p>
   </div>
    <Form className='jj' onSubmit={heandelclick}>
    
      <div className='input-selt'>
        <div className='box'>
        <input  className= {`open ${is? "open-focus":''}`} value={name} onChange={(e)=>setName(e.target.value)} type="text" ref={textRef} placeholder='' id='name'/>
        <label className='lobs' for='name'>الاسم بالكامل</label>
        <p className='p-i'><FaRegUser className='ton'/></p>
        </div>
        <div className='box'>
        <input dir='auto' className={`open openss ${is? "open-focus":''}`} value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" ref={phoneRef}  placeholder="" id='phones'/>
       
        <label  className='lobs loobs' for='phones'>رقم الهاتف</label>
      <DropdownButton id="dropdown-item-button" title=" " className='f-c' drop='up'>
      <Dropdown.ItemText className='i-tem'>مصر(01+)</Dropdown.ItemText>
      <Dropdown.Item className='i-tem' as="button">السعوديه (923+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الكويت  (19+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الامارات (23+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الامارات (11+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">ليبا (1312+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">قطر (11)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الاردن (0202)</Dropdown.Item>
    </DropdownButton>
         
       </div>
       <div className='box'>
        
        <input className={`open  ${is? "open-focus":''}`} value={pass} onChange={(e)=>setPass(e.target.value)}  type={nour?'text':'password'} ref={passRef} placeholder='' id='passed'/>
        <label className='lobs' for='passed'>كلمه المرور</label>
        <p className='p-i'><RiLockPasswordLine/></p>
        <p className='task' onClick={task}>{nour?<IoEye/>:<IoEyeOff/>}</p>
     
      </div>
      </div>
      <button type='Submit' className='pans'>  انشاء حساب <FaUserPlus className='ton'/></button>

      <div className='hrrr'>
           <hr/><p>او</p><hr/>
      </div>
    
      <button className='ggg'> التسجيل  بستخدام جوجل<FaGoogle className='tonn'/></button>
        </Form>
        
           </div> 
     
    </div>














    {/* الناحية الشمال - الجزء البرتقالي */}
    <div className="col-md-5 text-white p-5 text-center d-flex flex-column justify-content-center align-items-center" 
         style={{background: 'linear-gradient(135deg, #e29a2d 0%, #f13538 100%)'}}>
      
      <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width:'120px', height:'120px'}}>
        <div className="bg-white rounded-circle  mm-clic" style={{width:'90px', height:'90px'}}></div>
      </div>

      <h4 className="fw-bold">انضم لعائلة زاد ستور 🚀</h4>
      <p className="spsp">
   أنشئ حسابك الآن وابدأ رحلتك في عالم التسوق واستمتع بعروضنا المميز      </p>
<Link to='/LL' className='LL'>لديك حساب بالفعل <CgPushRight className='i-cont'/></Link>

     
    </div>

  </div>
</div>
  );

}
export default Create;
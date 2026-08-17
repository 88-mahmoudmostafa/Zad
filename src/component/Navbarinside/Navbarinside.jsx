import React from 'react'
import { FaRegBell, FaStackOverflow } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbarinside.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Aya } from '../Contaxt/Contaxt';
import { FaCartPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate,replace } from 'react-router-dom';
import { MdHeight, MdOutlineCategory } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillLayout } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import OffcanvasBody from 'react-bootstrap/esm/OffcanvasBody';



function Navbarinside() {
  const {lang,changeLanguage,log,setLog,cared,open,setOpen,deletecard,setCard,total,add1,add11,isLoggedin,setIsLoggedin,user,setUser}=Aya();

   const navigate = useNavigate()
   const location =useLocation()
    
    const text=()=>{
     localStorage.removeItem('isLoggedin')
     localStorage.removeItem('user')
     setUser(null)
     setIsLoggedin(false)
     navigate('/Create',{replace:true})
    }
    const [show,setShow]=useState(false)
     
  const[fast,setFast]=useState(false);
   const isdat=(phth)=>location.pathname.startsWith(phth);

  
   return (
    <div className='container-usef'>
           <Navbar expand="lg" className="bg-body-tertiary  navbar-main">
    
       <Container fluid  className='plass'>
              <div className='header'>
      
        <Navbar.Brand href="/R" className='title'>Zadstor</Navbar.Brand>
      
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" className='mosso' onClick={()=>setShow(true)} />
        <Navbar.Offcanvas placement='start' id='offcanvasNavbar' dir='rtl' show={show} onHide={()=>setShow(false)} scroll={true} backdrop={true}  className='mbmb'>
       <OffcanvasBody style={{ maxHeight:'100%' ,maxWidth:'100%'}}>
          <Nav
            className="mas"
            style={{ maxHeight: '100%',Width:'100%' }}
            >
                
        
        <div className='motal'>
          <div className='acc'>
            <p className='xs' onClick={()=>setShow(false)}>X</p>
            <div className='med'>
            <div className='ros'></div>
            <div>
          
            <p className='moj'>حسابى بزاد استوار</p>
              <p className='moj'>نظامى</p>
            </div>
            </div>
            <Link  className='ded' to='/AU'>الحساب<FaRegUserCircle/></Link>
            
          </div>
            <p className='mokj'>القائمه</p>
            <Link to='/R' className={`pp  ${isdat('/R')?'active-nas':''}`}onClick={()=>setFast(false)}>الرئسيه</Link>

            <Link to='/MT' className={`pp  ${isdat('/MT')?'active-nas':''}`}onClick={()=>setFast(false)}>المنتجات</Link>
          
     <DropdownButton drop='down'  id="dropdown-item-button" className='mates  MOJ' title="كل  الاقسام" >
      <div className='link-naving'>
      <Link className={`linking  ${isdat('/Aktron')?'active-nas':''}`}onClick={()=>setFast(false)}  to='/Aktron'>الاكترونيات</Link>
      <Link className='linking'  to='/Adwat'>ادوات منزليه</Link>
      <Link className='linking'  to='/Malp' >ملابس</Link>
      <Link className='linking'  to='/Play'>العاب</Link>
      <Link className='linking'  to='/Time'>ساعات</Link>
      </div>
    </DropdownButton>

    <DropdownButton  drop='down'   id="dropdown-item-button" className='mates  MOJ ' title="كل الماركت" >
        <div className='link-naving' >
      <Link className='linking'  to='/Samsang'>سامسونج</Link>
      <Link className='linking'  to='/Appl' >ابل</Link>
      <Link className='linking'  to='/Sone' >سونى</Link>
      <Link className='linking'  to='/Shome'>شومى</Link>
      </div>
    </DropdownButton>

           <Link to='/TL' className={`pp  ${isdat('/TL')?'active-nas':''}`}onClick={()=>setFast(false)}> طلباتى</Link>
           <Link to='/DT' className={`pp Mad  ${isdat('/DT')?'active-nas':''}`}onClick={()=>setFast(false)}> اضافه طلب</Link>
          
           <hr className='kt'/>
          
           <p className='mokj'>النشطات</p>
           <div className='op'>
           <Link to='/MF' className={`ppsl  ${isdat('/MF')?'active-nas':''}`}onClick={()=>setFast(false)}> <CiHeart/>   <p className='pasl'>المفضله</p></Link>
             <p className='tnb'>المفضله</p>

           </div>
           {/* <div className='op'> */}
           <DropdownButton id="dropdown-item-button" className='mates' title={<FaRegBell className='IXO' />}>
          
          {/* className={`mates  ${isdat('CH')?'active-nas':''}`}onClick={()=>setFast(false)}  */}
                <div className='link-naving'>
      <p className='chart-linking'  to='/Samsang'>تنبيهات</p>
      <span className='chart-linking'  to='/Appl' as="button">لا توجد تنبيهات جديده</span>
      <Link className='chart-linked'  to='/CH' >عرض الكل</Link>
      
              </div>
           </DropdownButton>
            {/* <p className='tnb tnc'>التنبيهات</p> */}
                   {/* </div> */}
              <div className='op'>
            <Link to='/MS' className={`ppsl  ${isdat('/MS')?'active-nas':''}`}onClick={()=>setFast(false)}> <CiBookmark/> <p className='pasl'>الرسال</p></Link>
              <p className='tnb'>الرسائل</p>
              </div>
                  <hr className='kt'/>
              <p className='mokj'>السله</p>
                   <div className='op'>      
            <div className='falnt'>
          <button className='sallss' onClick={()=>setOpen(!open)}><FaCartPlus/></button>
          <p className='c-ll'>{cared.length||  ''}</p>
                   </div>
                    {open?(
                
                    <div  className='list-click '>
                   {cared.length===0?(
                    <div className='x-a'>
                      <Link to='/MT' className='nav-mar' onClick={()=>setOpen(!open)}>ارجع لتسويق</Link>
                       <p className='xx' onClick={()=>setOpen(!open)}>X</p>
                    </div>

                   ):(
                    <div>
                        <div className='x-car'>
                        <p className='a-car'>عربيه التسويق</p>
                        <p className='xx' onClick={()=>setOpen(!open)}>X</p>
                      </div>
                    <div className='mast-list'>
                    

                     {cared.map(p=>(
                        <div key={p.id} className='card-map'>
                          <div>
                        <img src={p.img} className='w-img'/>
                        </div>
                        <div>
                          <div className='name-icon'>
                            <h4 className='w-h4'>{p.name}</h4>
                             <button className='onc' onClick={()=>deletecard(p.id)}><RiDeleteBinLine/></button>
                          </div>
                        
                        <p className='w-p'> {p.price}</p>
                        <div className='nav-listed'>
                        
                          <div>

                          <button className='btn-1' onClick={()=>add11(p.id)}>-</button>
                          <span>{p.qty ||1}</span>
                          <button className='btn-1' onClick={()=>add1(p.id)}>+</button>
                        </div>
                          <div>
                          <span className='tols'>to:{p.price * p.qty ||p.price}</span>
                          </div>
                        </div>
                       
                      </div>
                      </div>
                      ))}

                    
                      
                    </div>
                        <div className='hold-me'>
                       <p className='tol-f'>
                     ,<h5>الاجمالى الفرعى:</h5>

                        <p className='tols'>{total ||0}</p>
                       </p>
                       <Link className='talb-linkes'  to='/DT'>اتمام الطلب</Link>
                       <button className='talb-btnes' onClick={()=>setOpen(!open)}>عرض السله</button>

                    </div>
                    </div>
                   )}
                 
                 
                        {/* </div> */}
                    </div>
                    ):(
                     ''      
                     )}  



                      <p className='tnb'> السله</p>
                       </div>

                      <hr className='kt'/>
                   <p className='mokj'>الحساب</p>

                 <Form className="form">
                   <Dropdown  className='admain-dropdown'>
      <Dropdown.Toggle  id="dropdown-basic">
        <div className='Aman'><p>ادمن زاد استوار </p></div>
      </Dropdown.Toggle>

      <Dropdown.Menu className='menos'>
        <Dropdown.Item  href="#/action-1" >
      
      
      
        </Dropdown.Item>
          <h1 className='bksbk'>مدير النظام</h1>
          <p  className='bk-bks'>الحساب </p>
        <Link to='/AU' className='bk-bk'><p>حسابى زاد </p><FaRegUserCircle className='i-bk'/></Link>
        <Link to='/UP' className='bk-bk'><p>تعديل  الملف</p><IoSettings className='i-bk'/></Link>
        <Link to='/TL' className='bk-bk'><p>طلباتى زاد</p><AiFillLayout className='i-bk'/></Link>
        <hr/>
        <Link onClick={text} className='bk-bk'>تسجيل خروج <IoLogOutOutline className='i-bk'/></Link>
      </Dropdown.Menu>
                     </Dropdown>
                         <hr className='kt'/>

            
                   </Form>
                              <div className='li'>
                    <p className='mokj'>اللغه</p>
                   <div className='alaa'>
                   <button className='lan-len' onClick={() => changeLanguage(lang === 'ar'? 'en' : 'ar')}>
                     {lang === 'ar'? 'English' : 'عربي'}
                       </button>
                  
              </div>          
                       </div>


                <hr className='kt'/>
               

            </div>
            
          </Nav>
          </OffcanvasBody>
          
        
        </Navbar.Offcanvas>
          
      </Container>
      
    
    </Navbar>
     </div>
  )
}

export default Navbarinside
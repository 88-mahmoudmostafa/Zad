import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { MdRemoveShoppingCart } from "react-icons/md";
import Accordion from 'react-bootstrap/Accordion';
import { Aya } from '../Contaxt/Contaxt';
import { FaShoppingBag } from "react-icons/fa";
import Formss from './Forms'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';


import './Addtalb.css'


function Addtalbat() {
  // const {total}=Aya()
  const navight=useNavigate()
  const[name,setName]=useState('')
  const[phone,setPhone]=useState('')
  const[text,setText]=useState('')
    const [led,setLed]=useState('')

    const take=()=>{
    if(name===''){
       alert('اكتب الاسم')
       return;
      }
    if(phone.length !==11){
       alert('الرقم يتكون من 10 ارقام')
       return;
      }
    if(text===''){
       alert('المحافظه')
      return;
    }

    else{
      navight('/QQ')
    }
      
  }
  const {cared,total,log}=Aya()
  return (
    // <div className={log==='ar'?'addtalb rtl':'addtalb ltr'}   dir={log==='ar'?'rtl':'ltr'}>
    <div className='moksa'>
      {cared.length===0?(
      <div className='addtalb'>
        <h2>سله المشتريات{cared.length ||0}</h2>
        <div className='wast'>
          <MdRemoveShoppingCart className='shop'/>
          <h3>سله التسويق فارغه</h3>
          <p>يبدو أنك لم تضف أي منتجات بعد. ابدأ التسوق الآن واكتشف أفضل العروض!</p>
          <Link to='/MT' className='add-link' >ابد تسويق الان<FaShoppingBag/></Link>
        </div>
    
       </div>
      ):(
      <div className='addtalb-form'>
        <div className='addtalb-acc'>
        <h2>اتمام الطلب</h2>

       <Accordion defaultActiveKey="1" flush>

      <Accordion.Item eventKey="1">
        <Accordion.Header >
          <div className='tal-acc'>
          <h5>1</h5>
          <h3>عنوان التوصيل</h3>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <Formss/>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header>
           <div className='tal-acc'>
          <h5>2</h5>
          <h2>طريقه الدفع</h2>
          </div>
        </Accordion.Header>
        <Accordion.Body className='body-check'>
          <div className='form-hold'>
             <Form.Check
               className='check-for'
              type="radio"
              value='cash'
              checked={led==='cash'}
              onChange={(e)=>setLed(e.target.value)}
              label="الدفع عند الاستلام"
              name="formHorizontalRadios"
              id="cash"
            />
               <Form.Check
             className='check-for'
              type="radio"
              label="الدفع عن طريق الفيزه"
              name="formHorizontalRadios"
              id="visa" 
              value='visa'
              checked={led==='visa'}
              onChange={(e)=>setLed(e.target.value)}
              />
              </div>

              {led==='visa'&&(
                <div className='led-form'>
                  <input type='text'placeholder='رقم البطاقه' className='inputedss'/>
                  <div className='cv-input'>
                    <input type='number' placeholder='تاريخ الانتهاء' className='hom-input'/>
                    <input type='number' placeholder='cvv' className='hom-input'/>
                  </div>
                </div>

              )}
              <div>

              </div>
            <button  className='form-btn'>استخدام طريقه الدفع</button>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
           <div className='tal-acc'>
          <h5>3</h5>
          <h3>مراجعه العناصر والشحن</h3>
          </div>
        </Accordion.Header>
        <Accordion.Body className='last-addt'>
          <div className='moka'>
            <h2>تاريخ التوصيل المتوقع: غداً</h2>
          </div>
          <div className='maslam'>
        {cared.map(p=>(
          <div key={p.id} className='mod-card'>
            <div>
            <img src={p.img} className='mod-imge'/>
            </div>
            <div>
            <h4>{p.name}</h4>
            <h5>{p.price}</h5>
            {/* <P>الكميه{p.qty}||1</P> */}
            </div>
            

          </div>
        ))}
        </div>
        </Accordion.Body>
      </Accordion.Item>

       </Accordion>
        </div>            
          <div className='addtalb-ass'>
            <div className='makas'>
            <Link className='ass-link' onClick={take}>تاكيد الطالب</Link>
            <p className='msd'>بإتمام طلبك، أنت توافق على شروط الاستخدام و إشعار الخصوصية الخاص بـ ZadStore</p>
            <hr/>
            <h4 >
              <input className='ass-input' type='text' placeholder='رمز تخفيض'/>
              <button className='ass-btn'>تطبيق</button>
            </h4>
            <h4 className='ass-h4'>
               <p >الاجمالى الفرعى</p>
                  <h5>{total}</h5> 
            </h4>
           
            <h4 className='ass-h4'>
              <p>الشحن والتوصيل</p>
              <span >مجانا</span>
              </h4>
              <hr/>
            <h4 className='ass-h4'>
              <p>الاجمالى</p>
              <h5>{total}</h5>
            </h4>
            <p className='ass-p'>تاكد من مراجعه تفاصيلتاكيد الشحن قبل التاكيد على الطلب</p>
          </div>
           </div>

      </div>
      )}
    </div>
  )
}

export default Addtalbat
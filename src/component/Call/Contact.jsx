import Form from 'react-bootstrap/Form';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Contact.css'
import { BsTextareaResize } from "react-icons/bs";

import { MdEmail } from "react-icons/md";


function TextControlsExample() {
  return (
    <div className='contact'>
    
  
        <div  className='contant'>
            
            <h2>تواصل معنا</h2>
            <p>يسعدنا تلقي استفساراتكم! اترك رسالتك وسنقوم بالرد في أقرب فرصة.</p>
        </div>
    <div className='jj'>
      <Form.Group className="box" controlId="exampleForm.ControlInput1">
     
        <Form.Control className='input-t' type="text" placeholder=''/>
        <label for='name' className='lobse'> الاسم بالكامل</label>
        <p className='p-i'><FaUser className='ic'/></p>
      </Form.Group>
        <Form.Group className=" box" controlId="exampleForm.ControlInput1">
      
        <Form.Control className='input-t' type="email" placeholder=""/>
         <label for='phoned' className='lobse'>البريد الاكترونى</label>
         <p className='p-i'><MdEmail className='ic'/></p>
         </Form.Group>
      <Form.Group className="box" controlId="exampleForm.ControlTextarea1">
     
        <textarea className='input-t' type="textarea" placeholder=''  />
         <label for='passed' className=' basg'>نص الرساله </label>
         <p className='p-i'><BsTextareaResize  className='ic'/></p>
      </Form.Group>
      <button className='ns' > ارسال رساله</button>
      
        
        </div>
        </div>
  );
}

export default TextControlsExample;
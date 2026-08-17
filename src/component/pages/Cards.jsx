import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Cards.css'
import i1 from '../../assets/Timer.png'
import i2 from '../../assets/Mobil.png'
import i3 from '../../assets/Lap.png'
import i4 from '../../assets/Play.png'
import i5 from '../../assets/Sama.png'
import i6 from '../../assets/Time.png'
import i7 from '../../assets/Theart.png'
import { FaEye } from "react-icons/fa";
import { Aya } from '../Contaxt/Contaxt';
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";




     


     export  const product=[
    {id:1,name:'ساعه شومى 3',img:i1,price:1200,sdd:'ساعات',mas:'ساعة ذكية رياضية مع تتبع النوم ونبضات القلب.',pas:' الماركه',pes:'19'},
    {id:2,name:'ايفوان 17 برو مكس',img:i2,price:90000,sdd:'الكترونيات', mas:'أحدث هاتف من ايفوان مع معالج A17 Pro وكاميرا احترافية.',pas:' الماركه',pes:'33'},
    {id:3,name:'لاب توب  ',img:i3,price:10000 ,sdd:'الكترونيات',mas:'شاشة ذكية بدقة 4K مع ألوان نابضة بالحياة.',pas:' الماركه',pes:'38'},
    {id:4,name:'بلاس تيشن النسخه 5',img:i4,price:4500,sdd:'العاب',mas:'جهاز ألعاب الجيل القادم مع سرعة خارقة وألعاب حصرية.',pas:' الماركه',pes:'24'},
    {id:5,name:'سماعه سونى',img:i5,price:3000,sdd:'الكترونيات',mas:'حاسوب محمول قوي من آبل مع معالج M3.',pas:' الماركه',pes:'22'},
    {id:6,name:'ساعه رلمى',img:i6,price:4000,sdd:'ساعات',mas:'ساعة ذكية رياضية مع تتبع النوم ونبضات القلب.',pas:' الماركه',pes:'16'},
    {id:7,name:'ملابس',img:i7,price:2000,sdd:'ملابس',pas:' الماركه',pes:'12'},
    
  ]
function BasicExample() {
  const {deletemodel,addcard,fortmov,deletecard,cared,isAdded,setCard,setOpen,openو,Mof,deletemof,addmodel,modeleds}=Aya()
   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =()=>setShow(true);
    const headelmod=(p)=>{
      handleShow(true)
      addmodel(p)
    }
  

  return (
  <div className='cards-contant'>
       {product.map(p=>(
        //  const isAdded = cared.some(item => item.id === p.id);
       <Card style={{ width: '18rem' }} key={p.id} className='k-c'>
      <Card.Img className='img-card ' variant="top" src={p.img} />
      <Card.Body className='card-body'>
        <span> {p.sdd}</span>
        <p>{p.name}</p>
        <h4>{p.price}</h4>
    
        <Link to='/MF' className='mofdel' onClick={()=>fortmov(p)}>🤍</Link>
      <Button variant="primary" className='eye' onClick={()=>headelmod(p)}>
        نظره سريعه<FaEye/>
      </Button>
    
        <div className='link-faes'>
             {cared.some(item=>item.id===p.id)?
                 <button className='link-cardcom' onClick={()=>{
                  setCard(prev=>prev.filter(item=>item.id !==p.id))
                setOpen(!open)
                 }}>تم الاضافه</button>
                 
                 :
                 <button className='link-card' onClick={()=>addcard(p)}><FaCartPlus/>اضافه الى السله</button>  
              }
        <Link className='link-card ' to='/EE'><FaEye/></Link>
       </div>

        
      </Card.Body>
  
        
    </Card>
  ))}

   <Modal show={show} onHide={handleClose} className='model-cons'>
     
          {modeleds.map(p=>(
      //  <div className='dond'>
       <div key={p.id} className='k-c k-s'>
         <div className='mog'>
      <Card.Img className='img-cards ' variant="top" src={p.img} />
      </div>
      <Card.Body className='card-bodys'>
        <span className='ti-1'> {p.sdd}</span>
        <p className='ti-2'>{p.name}</p>
        <p className='ti-3'>{p.mas}</p>
           <small className='str'>
                          <FaRegStar className='start'/>
                          <FaRegStar className='start'/>
                          <FaRegStar className='start'/>
                          <FaRegStar className='start'/>
                          <FaRegStar className='start'/>
                  
                        </small>
        <div className='fr-1'>
        <p className='masgh'>الماركه<br/> {p.pas}</p>
        <p className='masgh'>المخزون<br/>{p.pes}</p>
        </div>
        <h4  className='prs'>{p.price}</h4>
        <div className='fr-2'>
                 {cared.some(item=>item.id===p.id)?
                 <button className='link-cardcom' onClick={()=>{
                  setCard(prev=>prev.filter(item=>item.id !==p.id))
                setOpen(!open)
                 }}>تم الاضافه</button>
                 
                 :
                 <button className='link-card' onClick={()=>addcard(p)}><FaCartPlus/>اضافه الى السله</button>  
              }
              <button onClick={()=>deletemodel(p.id)}><RiDeleteBinLine/></button>
            </div>
           <hr className='tat  '/>
        </Card.Body>
        </div>
          ))}

      </Modal>
    </div>
  
  );
}

export default BasicExample;
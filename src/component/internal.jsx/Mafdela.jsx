import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Aya } from '../Contaxt/Contaxt';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import card from '../pages/Cards';
import './Mof.css';
import '../pages/Cards.css'
function Mafdela() {
  const {fortmov,mof,setMof,addcard,deletemof,cared,setcard}=Aya()
  return (
    <div className='container-mofdel'>
        <div className='mof-hh'>
          {mof.length===0 ?(
            <div className='mafdel-mof'>
            <h1>المفضله</h1>
            <p>لديك {mof.length} منتجات تم حفظها</p>
             </div>
          ):(
           
          <div className='cards-contant'>
          {mof.map(p=>(
         <Card style={{ width: '18rem' }} key={p.id} className='k-c'>
          {/* <div> */}
              <Card.Img className='img-card ' variant="top" src={p.img} />
          {/* </div> */}
      <Card.Body className='card-body'>
        <span> {p.sdd}</span>
        <p>{p.name}</p>
        <h4>{p.price}</h4>
    
        <Link  className='mofdel' onClick={()=>deletemof(p.id)}>❤️</Link>
      
        <Link className='eye' to='/EE'>نظره سريعه<FaEye/></Link>
        <button  className='mofes'>المفضله</button>
       
        
      </Card.Body>
  
        
    </Card>
    
    

     ))}
     </div>

          )}
        </div>
    </div>
  )
}

export default Mafdela
import React from 'react'
import './Masage.css'
import { IoSend } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";
import { Aya } from '../Contaxt/Contaxt';


function Arsal() {
  const {sol,setSol,hedinput}=Aya()
  return (
    <div className='container-masage'>
      <div className='contant-masage'>
    <div className='masage-title'>
      <IoMdRefresh className='masage-icon'/>
      <div className='masage-well'>
      <div>
        <h2>الدعم الفنى والرسال</h2>
        <p>متصل الان سيتم الرد عليك فى اقرب وقت    </p>
        </div>
        <FaHeadphones className='masage-sama'/>
        </div>
    </div>
    <div className='masage-cound'>
      <p>..<FaCheckDouble className='masage-true'/></p>
    </div>
    <div className='masage-mas'>
      <input value={sol} onChange={(e)=>setSol(e.target.value)} className='mas-inpt'   type='text' placeholder='اكتب رساله هنا'/>
      <button className='masage-btn' onClick={()=>setSol('')}><IoSend/></button>
      </div>
    </div>
    </div>
  )
}

export default Arsal
import React from 'react'
import ProCard from '../Productcard'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom'
import './Aksam.css'
import { MdOutlineCategory } from "react-icons/md";

function Alktron() {
  return (
    <div>
 <div className='well'>
     <Breadcrumb className='link-well'>
      <Link className='link-to' to='/' >الرايسيه/</Link>
      <Link className='link-tos'  >كل الاقسام/</Link>
      {/* <Link className='link-tos'  >العاب</Link> */}
      <Link className='link-tos' >العاب</Link>
    </Breadcrumb>
        
        <div>
            <h1><MdOutlineCategory/>العاب</h1>
        </div>
        </div>
        <div>
            <ProCard/>

        </div>
    </div>
  )
}

export default Alktron
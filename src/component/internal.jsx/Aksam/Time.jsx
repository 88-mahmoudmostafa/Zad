import React from 'react'
import ProCard from '../Productcard'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom'
import { MdOutlineCategory } from "react-icons/md";

import './Aksam.css'
function Alktron() {
  return (
    <div>
 <div className='well'>
     <Breadcrumb className='link-well'>
      <Link className='link-to' to="/">الرايسيه/</Link>
      <Link className='link-tos' href="#" >كل الاقسام/</Link>
      <Link className='link-tos' href='#' >ساعات</Link>
      {/* <Link className='link-tos' >ساعات</Link> */}
    </Breadcrumb>
    
        <div>
            <h1><MdOutlineCategory/>ساعات</h1>
        </div>
        </div>
        <div>
            <ProCard/>

        </div>
    </div>
  )
}

export default Alktron
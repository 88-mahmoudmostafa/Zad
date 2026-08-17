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
    <Link className='link-to' to='/' >الرايسيه/</Link>
      <Link className='link-tos' >كل الاقسام/</Link>
      {/* <Link className='link-tos' >الكترونيات</Link> */}
      <Link className='link-tos' >الاكترونيات</Link>
    </Breadcrumb>
        <div>
            <h1><MdOutlineCategory/>الكترونيات</h1>
        </div>
        </div>

        <div className='well-card'>
            <ProCard/>

        </div>
    </div>
  )
}

export default Alktron
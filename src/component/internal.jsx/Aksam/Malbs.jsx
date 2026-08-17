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
        <Link className='link-tos'  >كل الاقسام/</Link>
       <Link className='link-tos'  >ملابس</Link>
       {/* <Link className='link-tos' >ملابس</Link> */}
    </Breadcrumb>
      
        <div>
            <h1><MdOutlineCategory/>ملابس</h1>
        </div>
        </div>
        <div>
            <ProCard/>

        </div>
    </div>
  )
}

export default Alktron
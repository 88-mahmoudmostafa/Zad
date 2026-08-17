import React from 'react'
import ProCard from '../Productcard'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom';
import { MdOutlineCategory } from "react-icons/md";
import './Aksam.css'

function Alktron() {
  return (
    <div>
    <div className='well'>
     <Breadcrumb className='link-well'>
           <Link className='link-to' to='/R' >الرايسيه/</Link>
            <Link className='link-tos'  >كل الاقسام/</Link>
            <Link className='link-tos' >ادؤات منزليه</Link>
    </Breadcrumb>   
       <div>
        <h1><MdOutlineCategory/>ادوات منزليه</h1>
        </div>
      </div>

        
        <div>
            <ProCard/>

        </div>
    </div>
  )
}

export default Alktron
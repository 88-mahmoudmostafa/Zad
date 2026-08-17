import React from 'react'
import ProCard from '../Productcard'
import '../Aksam/Aksam.css'
import { MdOutlineCategory } from "react-icons/md";
function Alktron() {
  return (
    <div>

       <div className='well'>
        <h1><MdOutlineCategory/>شومى</h1>
        </div>
        <div>
            <ProCard/>

        </div>
    </div>
  )
}

export default Alktron
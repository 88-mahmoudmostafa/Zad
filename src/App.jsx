import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Hoom/Home'
import Footer from './component/footer/Footer'
import Contant from './component/Contant/Contant'
import Contact from './component/Call/Contact'
import Create from './component/Create/Create'
import Mac from './component/mac/Mac'
import Slider from './component/Slider/Slider'
import Longe from './component/internal.jsx/Longe'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import Product from './component/internal.jsx/Prductsin'
 import Tabat from './component/internal.jsx/Talbat'
 import Add from './component/internal.jsx/Addtalbat'
 import MavFele from './component/internal.jsx/Mafdela'
 import Chrat from './component/internal.jsx/Chrat'
  import Masge from './component/internal.jsx/Masage'
 import Time from './component/internal.jsx/Aksam/Time'
 import Played from './component/internal.jsx/Aksam/Played'
 import Malbs from './component/internal.jsx/Aksam/Malbs'
 import Alktron from './component/internal.jsx/Aksam/Alktron'
 import Adwat from './component/internal.jsx/Aksam/ِAdwat'
 import Appl from './component/internal.jsx/market/Appl'
 import Samsang from './component/internal.jsx/market/Samsang'
 import Sawme from './component/internal.jsx/market/Sawme'
 import Sone from './component/internal.jsx/market/Sone'
 import Qa from './component/internal.jsx/QQ'
 import Acunts from './component/internal.jsx/zANACOUNT/Acunt'
 import UUPP from './component/internal.jsx/zANACOUNT/Updete'
//  import MMMM from './component/internal.jsx/Model'
 import './App.css'
 import { Aya } from './component/Contaxt/Contaxt'

function App() {
  const{isLoggedin}=Aya()
  return (
    <BrowserRouter>
      <div className='container-nasr'>
       
          <Navbar/>
            
            <Routes>
              <Route path='/' element={isLoggedin?<Slider/>:<Home/>}/>
              {/* <Route path='/longe' element={<Longe/>}/> */}
              <Route path='/C'element={<Create/>}/>
               <Route path='/R' element={<Slider/>}/>
              <Route path='/D' element={<Mac/>}/>
              <Route path='/M' element={<Contant/>}/>
              <Route path='/A' element={<Contact/>}/>
              <Route path='/LL' element={<Home/>}/>

              <Route path='/MT' element={<Product/>}/>
              <Route path='/TL' element={<Tabat/>}/>
              <Route path='/DT' element={<Add/>}/>
              <Route path='/MF' element={<MavFele/>}/>
              <Route path='/CH' element={<Chrat/>}/>
              <Route path='/MS' element={<Masge/>}/>

              <Route path='/Aktron' element={<Alktron/>}/>
              <Route path='/Adwat' element={<Adwat/>}/>
              <Route path='/Malp' element={<Malbs/>}/>
              <Route path='/Play' element={<Played/>}/>
              <Route path='/Time' element={<Time/>}/>
              <Route path='/Samsang' element={<Samsang/>}/>
              <Route path='Shome' element={<Sawme/>}/>
              <Route path='/Sone' element={<Sone/>}/>
              <Route path='/Appl' element={<Appl/>}/>
               <Route path='/QQ' element={<Qa/>}/>
               <Route path='/AU' element={<Acunts/>}/>
               <Route path='/UP' element={<UUPP/>}/>
               {/* <Route path='/EE' element={<MMMM/>}/> */}
             
            </Routes>
          <Footer/>    
    </div>
   

    </BrowserRouter>
  )
}

export default App
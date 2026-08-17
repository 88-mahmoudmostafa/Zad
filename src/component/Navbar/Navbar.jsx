import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Aya} from '../Contaxt/Contaxt';
import { FaRegBell } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Navbars2 from '../Navbarinside/Navbarinside';
import '../Navbarinside/Navbarinside.css'

function NavScrollExample() {
  const {changeLanguage,lang,isLoggedin,setIsLoggedin}=Aya()
  return (
    <div  className='container-usef'>
      {isLoggedin?(
      <Navbars2/>
      ):(
     
       <Navbar expand="lg" className="bg-body-tertiary">
    
       <Container fluid  className='plass'>
        
        <div className='header'>
      
        <Navbar.Brand href="/R" className='title'>Zadstor</Navbar.Brand>
      
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas placement='start' id="navbarScroll">
       
          <Nav className="mas"style={{ maxHeight: '100%' }} navbarScroll >
            <div className='motal'>
            <Link to='/R' className='pp'>الرئسيه</Link>
            <Link to='/D' className='pp'>المدونه</Link>
           <Link to='/M' className='pp'> من نحن</Link>
           <Link to='/A' className='pp'> اتصل بنا</Link>
      
          </div>
          
          <Form className="form">
          <button className='btn'>تسجيل دخول</button>
          <Link to='/C' className='btned'>انشاء حساب</Link>
          </Form>
       
              <div className='li'>
                    {/* <p className='mokj'>اللغه</p> */}
                   <div className='alaa'>
                   <button className='lan-len' onClick={() => changeLanguage(lang === 'ar'? 'en' : 'ar')}>
                     {lang === 'ar'? 'English' : 'عربي'}
                       </button>
                  
              </div>          
                </div>
       </Nav>
        </Navbar.Offcanvas>
 

      </Container>
      
    
    </Navbar>
      )}
    
    </div>
  );
}

export default NavScrollExample;
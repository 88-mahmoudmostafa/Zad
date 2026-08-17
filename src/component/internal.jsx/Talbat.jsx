import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaExclamationTriangle } from "react-icons/fa";
import './Talbat.css'
import OffcanvasBody from 'react-bootstrap/esm/OffcanvasBody';

function Talbat() {
  return (
    <div className='talbat-container'>
      <div >
        <div className='talbat-title'>
          <div>
            <h1>سجل الطلبات</h1>
            <p>تتبع مشترياتك السابقة، طلبات الإرجاع، والفواتير في مكان واحد.</p>
            </div>
            <Link className='talbat-link' to='/R'>مواصله التسويق</Link>
        </div>
        <div >
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas id="navbarScroll" className='macs' scroll={true} backdrop={true}>
          <OffcanvasBody style={{width:'100%',Height:'100vh'}}>
          <Nav 
            className="talbat"
            style={{ maxHeight: '100vh',width:'100%' }}
          >
            <Link className='talb-link active' to='/TL' href="#action1">جميع الطلبات</Link>
            <Link className='talb-link'  to='/TL'>قيد التنظيم</Link>
            <Link className='talb-link'  to='/TL'>قيد الشحن</Link>
            <Link className='talb-link'  to='/TL'>تم الالغاء</Link>
            <NavDropdown className='talb-don' title="جميع الاو" id="navbarScrollingDropdown">
           
              <NavDropdown.Divider />
              <div className='talb-list'>
                <Link className='talb-l active' Link to='/TL'>اخر 30 يوم</Link>
              <Link className='talb-l' Link to-='/TL'>اخر 3 ايام</Link>
              <Link className='talb-l' Link to-='/TL'>2024</Link>
              <Link className='talb-l' Link to-='/TL'>2025</Link>
            </div>
            </NavDropdown>
             <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="input-search"
              aria-label="Search"
            />
           
          </Form> 
  
          </Nav>
         </OffcanvasBody>
         
        </Navbar.Offcanvas>
      </Container>
    </Navbar>


        </div>
        <div className='talb-end'>
          <div>
              <FaExclamationTriangle className='talb-icon'/>            
            <h3>لا توجد طلبات مطابقه</h3>
            <p>جرب تغيير فلاتر البحث أو تصفح المنتجات لإضافة طلبات جديدة.</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Talbat
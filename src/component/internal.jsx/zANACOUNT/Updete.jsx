import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import acunt1 from '../../../assets/acunt.png'
import { Aya } from '../../Contaxt/Contaxt';
import { replace, useNavigate } from 'react-router-dom';
import './Updete.css'
function GridBasicExample() {
 
  return (
    <div className='container-updelte'>

       <div className='right-up'>
     <div className='mas-up'>
        <img className='img-up' src={acunt1} alt='name-acunt'/>
        <h3>أدمن زاد ستور</h3>
        <p>يسمح بـ JPG, GIF or PNG. بحد أقصى 2MB</p>
     </div>

     <div>
    <Form className='form-up'>
        <h2>الاشعارات</h2>
      <Form.Check // prettier-ignore
        type="switch"
        id="email-switch"
        label="اشعارات البريد الاكترونى"
        className='check-up'
      />
      <Form.Check // prettier-ignore
        type="switch"
        label="رسائل sms"
        id="sms-switch"
        className='check-up'
      />
          <Form.Check // prettier-ignore
        
        type="switch"
        label="العروض والخصومات"
        className='check-up'
        id="offers-switch"
      />
    </Form>
     </div>
          </div>


       <div className='lift-up'>

    <Form>
      <h1>البيانات الاساسيه</h1>
      <Row>
        <Col className='box'>
      
          <Form.Control id='name' placeholder="" className='input-up' />
           <label className='labs' for='name'>الاسم باكامل</label>
        </Col>
        <Col className='box'>
          <Form.Control id='su' placeholder=""  className='input-up' />
           <label className='labs' for='su'>اسم المستخدام</label>
        </Col>
      </Row>
           <Row>
        <Col className='box'>
          <Form.Control placeholder="admin@zadstore.com"  className='input-up' id='name'/>
           <label className='labss' for='name'>البريد الاكترونى</label>
        </Col>
        <Col className='box'>
          <Form.Control placeholder="" id='phone'  className='input-up'/>
           <label className='labs' for='phone'>رقم الهاتف</label>
        </Col>
      </Row>

       <Col className='box'>
          <Form.Control placeholder="" id='mawk' className='input-up' />
           <label className='labs' for='mawk'>العنوان</label>
        </Col>
             
        <Col className='box'>
          <Form.Control placeholder="" id='hh'  className='input-up'/>
           <label className='labs' for='hh'>شركه الشحن المفضله</label>
        </Col>

        <Col className='box'>
          <Form.Control placeholder="" id='nb' className='input-uped' />
           <label className='labs' for='nb'>نبذه تعريف</label>
        </Col>
         
         <h1>الامان وكلمه المرور</h1>
           <Row>
        <Col className='box'>
          <Form.Control placeholder="" id='ps'  className='input-up'/>
           <label className='labs' for='ps'>كلمه المرور الجديده</label>
        </Col>
        <Col className='box'>
          <Form.Control placeholder="" id='pss'  className='input-up'/>
           <label className='labs' for='pss'>تاكيد كلمه المرور</label>
        </Col>
      </Row>
       
      

    </Form>
          </div>
    </div>
  );
}

export default GridBasicExample;
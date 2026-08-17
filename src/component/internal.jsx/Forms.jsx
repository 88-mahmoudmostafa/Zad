import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Forms.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
function BasicExample({name,setName,phone,setPhone,text,setText}) {
 
  return (
    <div className='f-ii'>
      {/* <h1>اتمام الطلب</h1> */}
     
  <div className='f-in'>
        <input value={name} placeholder='الاسم' type='text'
         onChange={(e)=>setName(e.target.value)} className='out-i'/>
      
         <div className='booxx'>
        <input value={phone} placeholder='رقم الموبيل' type='number' 
         onChange={(e)=>setPhone(e.target.value)} className='out-iee'/>
         <DropdownButton id="dropdown-item-button" title="01" className='c-c' drop='up'>
      <Dropdown.ItemText className='i-tem'>مصر(01+)</Dropdown.ItemText>
      <Dropdown.Item className='i-tem' as="button">السعوديه (923+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الكويت  (19+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الامارات (23+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الامارات (11+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">ليبا (1312+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">قطر (11)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الاردن (0202)</Dropdown.Item>
    </DropdownButton>
        </div> 
      

      <InputGroup className="mb-5">
      <input value={text} className='input-accy' type='text' placeholder='عنوان الشارع بالتفصيل'
      onChange={(e)=>setText(e.target.value)} />
       
      </InputGroup>
      <div className='from-non'>
     <Form.Select aria-label="Default selectample"  className='open-menu'>
      <option className='open-open'>المحافظه</option>
      <option className='sel-open' value="1">الشرقيه</option>
      <option className='sel-open' value="2">الاسكندريه</option>
      <option className='sel-open' value="3">الجيزه</option>
    </Form.Select>
    </div>
      </div>
      <button className='form-btn'>طريقه الدفع</button>

    </div>
  );
}

export default BasicExample;
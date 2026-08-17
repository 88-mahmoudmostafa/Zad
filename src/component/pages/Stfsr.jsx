import Accordion from 'react-bootstrap/Accordion';
import './Strfe.css'

function BasicExample() {
  return (
    <div className='drop-stff'>
<div>
  
    <div className='stf-ti'>
        <span>الأسئلة الشائعه</span>
        <h2>عندك استفسار؟ لدينا الإجابة</h2>
        <p>جمعنا لك أهم الأسئلة التي قد تدور في ذهنك قبل البدء معنا</p>
    </div>
   


    <div className='contant-stf'>
    <Accordion defaultActiveKey="0" className='cccc'>
      <Accordion.Item  className='mone' eventKey="1">
        <Accordion.Header className='sel-stf'><h2>هل التسجيل فى المنصه مجانى</h2></Accordion.Header>
        <Accordion.Body className='pro-stf'>
نعم، التسجيل للعمل كمسوق أو تاجر مجاني تماماً ولا توجد أي رسوم خفية.

         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className='mone' eventKey="2">
        <Accordion.Header className='sel-stf'><h2>كيف استلم ارباحى</h2></Accordion.Header>
        <Accordion.Body>
      بمجرد توصيل الطلب للعميل، يتم إضافة العمولة لمحفظتك وتستطيع سحبها عبر المحافظ الإلكترونية أو التحويل البنكي.


        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className='mone' eventKey="3">
        <Accordion.Header className='sel-stf'><h2>من يتحمل تكاليف الشحن والمرتجعات</h2></Accordion.Header>
        <Accordion.Body>
          نحن نتكفل بكافة تفاصيل وعمليات الشحن، ولا تتحمل أنت أو العميل أي تكاليف للمرتجعات.


        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className='mone' eventKey="4">
      
         <Accordion.Header className='sel-stf'><h2>هل احتاج لامتلاك المنتجات او راس مال</h2></Accordion.Header>
        
       
        <Accordion.Body className='pro-stf'>
       لا، كل ما عليك هو تسويق منتجاتنا وصنع المحتوى، نحن نمتلك المخزون ونقوم بتغليفه وشحنه.


        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
    </div>
    </div>
    </div>
    
  );
}

export default BasicExample;
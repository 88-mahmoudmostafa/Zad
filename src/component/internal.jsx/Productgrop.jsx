import ListGroup from 'react-bootstrap/ListGroup';
// import '../..grop.css'

function ActiveExample() {
  return (
    <div className='content-grop'>
    <ListGroup className='omer-grop' as="ul">
      <ListGroup.Item className='item-grop'  as="li" active>كل الأقسام</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li"> الاكترونيات</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li" disabled>ملابس</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li">ادوات منزليه</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li">ساعات</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li">العاب</ListGroup.Item>
    </ListGroup>



    <ListGroup className='omer-grop' className='grop-meta' as="ul">
      <ListGroup.Item className='item-grop'  as="li" active>كل الماركت</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li"> سامسونج</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li" disabled>ابل</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li">سونى</ListGroup.Item>
      <ListGroup.Item className='item-grop'  as="li">شومى</ListGroup.Item>
     
    </ListGroup>


    </div>
  );
}

export default ActiveExample;
import Alert from 'react-bootstrap/Alert';
import './Contant.css'
import {Link} from 'react-router-dom'

function AdditionalContentExample() {
  return (
    <div variant="success" className='mzz'>
      <div className='hoo'>
       <h2>عن زاد استوار</h2>
       <p>انطلقت منصة زاّد ستور لتكون الخيار الأول في التجارة الإلكترونية، حيث نهتم <br></br>بتقديم أفضل المنتجات وأعلى جودة ممكنة بأسعار تناسب الجميع.</p>
       {/* <p>بتقديم أفضل المنتجات وأعلى جودة ممكنة بأسعار تناسب الجميع.</p> */}
       <p>نحن نؤمن أن تجربة العمل مع واجهة سهلة وتصميم حديث هي مفتاح راحة العميل، لذا <br></br>نسعى دائمًا لتقديم أفضل دعم فني وخدمات شحن سريعة لجميع المحافظات.</p>


  
      <Link to='/C' className='mbtn'> تواصل معنا الان</Link>
      </div>
    </div>
  );
}

export default AdditionalContentExample;
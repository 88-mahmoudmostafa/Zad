import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Mac.css'
import i1 from '../../assets/gg.jpg'
import i2 from '../../assets/img.jpg'
import i3 from '../../assets/mg.jpg'


function GroupExample() {
  return (
    <div className='container-mac'>
      <div className='cards'>
        <div className='mac-title'>
            <h1> اداره المقاولات</h1>
            <p>تحكم في الأخبار والمقالات التي تظهر في صفحة المدونة الخاصة بمتجرك</p>
        </div>
      <CardGroup mt-5 mb-5 mb-5>
      <Card className='hos' >
        <div className='imge'>
        <img src={i1} alt='product-name'  />
        </div>
        <Card.Body   className='card-p'>
          <h2> مقاول تعريفيه  للمتجر1</h2>
          <small>تاريخ النشر 12 مايو 2025</small>
          <Card.Text>
          هذا نص تجريبي يوضح كيف سيبدو وصف المقال في مدونة الموقع الرئيسية الخاصة بالزوار والأعضاء.
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card className='hos' >
     <div className='imge'>
        <img src={i2} alt='product-name'  />
        </div>
        <Card.Body className='card-p'>
          <h2> مقاول تعريفيه  للمتجر2</h2>
          <small>تاريخ النشر 12 مايو 2025</small>
          <Card.Text>
          هذا نص تجريبي يوضح كيف سيبدو وصف المقال في مدونة الموقع الرئيسية الخاصة بالزوار والأعضاء.
          </Card.Text>
        </Card.Body>
   
      </Card>
      <Card className='hos'>
        <div className='imge'>
        <img src={i3} alt='product-name'  />
        </div>
       
        <Card.Body  className='card-p'>
          <h2> مقاول تعريفيه  للمتجر3</h2>
          <small>تاريخ النشر 12 مايو 2025</small>
          <p>
          هذا نص تجريبي يوضح كيف سيبدو وصف المقال في مدونة الموقع الرئيسية الخاصة بالزوار والأعضاء.
          </p>
        </Card.Body>
      
      </Card>
    </CardGroup>
    </div>
    </div>
   
  );
}

export default GroupExample;
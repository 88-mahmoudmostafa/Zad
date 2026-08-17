import Procard from'./Productcard'
import Progrop from './Productgrop'
import  './Productins.css'

function GroupExample() {
  return (
    <div className='walead'>
        <div className='walead-title'>
        
            <h2>تصفح المنتجات</h2>
            <p>اكتشف أحدث وأفضل المنتجات المتاحة لدينا بأقوى العروض.</p>
      
        </div>
        <div className='grop-card'>
            <Procard className='procard'/>
            {/* <Progrop className='progrop'/> */}
        </div>

 
    </div>
  );
}

export default GroupExample;
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <div className="container ltr">
        <div className="row g-4">

          {/* Logo */}
          <div className="col-md-3  col-lg-6 ">
            <h3 className="fw-bold text-warning">Zadstor</h3>
            <p className="pros">
              اد ستور هو متجرك الأول للإلكترونيات والأدوات المنزلية في مصر.


            </p>

              <div className="icon">
            
              <a href="#" className="icon-fas">
                <FaFacebookF />
              </a>

              <a href="#" className="icon-ins">
                <FaInstagram />
              </a>
              
            </div>
             
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-lg-2 ">
            <h2 className="nars"> التسويق المميز</h2>
            
            <ul className="list-unstyled">
              <li  className="thes"><a href="#">جميع المنتجات</a></li>
              <li  className="thes"><a href="#">الاكثر مبيعات</a></li>
              <li  className="thes"><a href="#"> احدث منتجات</a></li>
              <li  className="thes"><a href="#">عروض فرش</a></li>
           
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-2">
            <h2 className=" nars">روابط هامه</h2>
        
            <ul className="  list-unstyled">
              <li className="thes"><a href="#">المدونه</a> </li>
              <li className="thes"><a href="#">من نحن</a> </li>
              <li className="thes"><a href="#"> اتصل بنا</a> </li>
             
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2 ">
            <h2 className="nars">تواصل معانا</h2>
         

          
              <div className="help ">
              <p className="em">
                <div className="ii">
                    <FaEnvelope className="email" />
                </div>
              <div>
                <p className='oo'>Official Email</p>
             
             <p className="com"> info@Zadstor.com</p>
             
              </div>
            </p>

            <p>
              <p className='ph'>
                <div className="ii">
                   <FaPhone className="phone" />
                </div>
                <div>
                      <p className='oo'>Support Line</p>
              <p className="com">01204916808</p>
                </div>
              
              </p>

              <p className="so">Secure Payments</p>
            
          
            </p>
              </div>
           

          
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <div className= "ccc   d-flex gap-5  center text-center pb-3">
           <p >Powered by ZadStore OS</p>
          <a href="#"> سياسه</a>
          <a href="#"> خصوصيه</a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
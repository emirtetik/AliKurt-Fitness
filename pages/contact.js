import Layout from '@/layout/Layout'
import { useEffect } from 'react';
import Meta from '@/components/Meta';
import Form from 'react-bootstrap/Form';
import Image from 'next/image'
import {BsFillSendCheckFill} from "react-icons/bs"
import AOS from "aos"
import "aos/dist/aos.css"

function contact() {
 
 

  useEffect(() => {
    AOS.init({duration:1000});
  },[]);

  return (
    <Layout>

<Meta 
      title={"İletişim"}
      keywords={""}
      description={""}
      
      />

<section className="contact-us text-center ">
  <div className="fields">
    <div className="container " data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <Image src="/images/logom1.png" alt='logo' width={120} height={60}></Image>
      
      <div className="row">
      
        
        <form className=""  action='https://getform.io/f/cd1e2a05-fa44-4642-9811-b742a475faec' method='POST'  >
          
          <div className="col-md-6 mx-auto d-flex m-3 gap-3">
          <div className="input-group ">
  <input required type="text" name="first" id="frm-first"    autoComplete="given-name" className="input form-control rounded-4"/>
  <label className="user-label "   htmlFor="frm-first">İsim</label>
</div>

<div className="input-group ">
  <input required type="text" name="surname"  id="frm-surname"  autoComplete="family-name" className="input form-control rounded-4"/>
  <label className="user-label" htmlFor="frm-surname">Soyisim</label>
</div>
  
          </div>

          <div className="form-group col-md-4 mx-auto mb-3">
          <div className="input-group">
  <label htmlFor="seçenekler" className='user-label '></label> 

          <Form.Select id='koçluk' name='seçenekler'  aria-label="Default select example"  className="text-dark fw-bold input form-control rounded-4 form-select ">
      <option  >Seçenekler</option>
      <option value="işbirliği" className='text-dark fw-bold'>İşbirliği</option>
      <option value="koçluk" className='text-dark fw-bold'>Koçluk</option>
      <option value="diğer" className='text-dark fw-bold'>Diğer</option>
        
    </Form.Select>

</div>
      </div>


          <div className="form-group col-md-6 mx-auto mb-0">
            <div className="input-group">
  <input required type="email" name="email" id="frm-email" autoComplete="email"  className="input form-control rounded-4"/>
  <label htmlFor="frm-email" className="user-label ">Email</label>

</div>
            </div>
          <div className="col-md-6 mx-auto ">
            <div className="form-group">
            <label htmlFor="frm-message"></label>
              <textarea  id="frm-message"  name="message" className="form-control rounded-4"  placeholder="Aklında ne var?"></textarea>
            </div>
            <button className='mt-3 bg-white' id='btn1' type='submit'>
            <span><BsFillSendCheckFill/> Gönder</span>
</button> 
          </div>

        </form>
        
      </div>
    </div>
  </div>
</section>
    </Layout>
  )
}

export default contact
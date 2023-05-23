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
    <div  className="container " data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
     
      <div id='form-contact' className="row ">
      <h2 className='text-center mt-3 mb-3 '>Bize Ulaşın</h2> 
        <p className="text-center mx-auto  ">Hizmetlerimle alakalı bir sorunuz ve / veya iletmek istediğini herhangi bir şey varsa benimle iletişime geçmekten çekinmeyin.</p>

   
        
        <form  action='https://getform.io/f/7425f91a-f183-4b2f-a943-e091582d760e' method='POST'  >
                       


                                        {/* isim---soyisim */}

          <div className="col-md-6 mx-auto d-flex m-3 gap-3 ">
          <div className="input-group ">
  <input required type="text" name="frm-first" id="frm-first"    autoComplete="given-name" className="input form-control rounded-4"/>
  <label className="user-label "   htmlFor="frm-first">İsim</label>
</div>

<div className="input-group ">
  <input required type="text" name="frm-surname"  id="frm-surname"  autoComplete="family-name" className="input form-control rounded-4"/>
  <label className="user-label" htmlFor="frm-surname">Soyisim</label>
</div>
          </div>

                                          {/* yaş-telefon */}

          <div className="col-md-6 mx-auto d-flex m-3 gap-3">
          <div className="input-group ">
  <input required type="text" name="frm-age" id="frm-age"    autoComplete="given-age" className="input form-control rounded-4"/>
  <label className="user-label "   htmlFor="frm-age">Yaş</label>
</div>

<div className="input-group ">
  <input required type="number" name="frm-phone" id="frm-phone"    autoComplete="given-number" className="input form-control rounded-4"/>
  <label className="user-label "   htmlFor="frm-phone">Telefon</label>
</div>
</div>
        
                                     {/* email--konu */}

          <div className="form-group col-md-6 mx-auto mb-0">
            <div className="input-group">
  <input required type="email" name="frm-email" id="frm-email" autoComplete="email"  className="input form-control rounded-4"/>
  <label htmlFor="frm-email" className="user-label ">Email</label>

</div>
            </div>
            <div className="form-group col-md-6 mx-auto mt-3 mb-2">
          <div className="input-group">
  <label htmlFor="seçenekler" className='user-label '></label> 

          <Form.Select id='seçenekler' name='seçenekler'  aria-label="Default select example"  className="text-dark  input form-control rounded-4 form-select ">
      <option  >Konu</option>
      <option value="işbirliği" className='text-dark '>İşbirliği</option>
      <option value="koçluk" className='text-dark '>Koçluk</option>
      <option value="Programlama" className='text-dark '>Programlama</option>
      <option value="Danışma" className='text-dark '>Danışma</option>
      <option value="diğer" className='text-dark '>Diğer</option>
        
    </Form.Select>

</div>
      </div>
                                           {/* metin */}
                                  
          <div className="col-md-6 mx-auto ">
            <div className="form-group">
            <label htmlFor="frm-message"></label>
              <textarea  id="frm-message"  name="frm-message" className="form-control rounded-4"  placeholder="Aklında ne var?"></textarea>
            </div>
            <button className='mt-3 bg-white mb-5' id='btn1' type='submit'>
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
import React from 'react'
import {BsFillSendCheckFill} from "react-icons/bs"
import Form from 'react-bootstrap/Form';



function Formik() {


  return (




    <div className='container'>
    <div id='form' className="row  border border-black   m-3  ">
        <h2 className='text-center mt-3 mb-3 fw-bold'>Bize Ulaşın</h2> 
        <p className="text-center   ">Hizmetlerimle alakalı herhangi bir sorunuz ve/ veya konuşmak istediğiniz, aklınıza takılan hedefleriniz varsa benimle iletişime geçmekten çekinmeyin</p>

        
        <form  data-aos="zoom-in"  action="https://getform.io/f/7425f91a-f183-4b2f-a943-e091582d760e" method='POST'>
          
          <div className="col-md-6 mx-auto d-flex m-3 gap-3">

          <div className="input-group">
  <input required="" type="text" name="name"  className="input form-control rounded-4"/>
  <label htmlFor="first" className="user-label">İsim</label>
</div>
<div className="input-group">
  <input required="" type="text" name="surname"  className="input form-control rounded-4"/>
  <label htmlFor="last" className="user-label">Soyisim</label>
</div>
   
          </div>
   
          <div className="form-group col-md-4 mx-auto mb-3">
          <div className="input-group">
  <label htmlFor="seçenekler" className='user-label '></label> 

          <Form.Select id='koçluk' name='seçenekler'  aria-label="Default select example"  className="text-dark fw-bold input form-control rounded-4 form-select ">
      <option  >Seçenekler</option>
      <option value="işbirliği" className='text-dark fw-bold '>İşbirliği</option>
      <option value="koçluk" className='text-dark fw-bold'>Koçluk</option>
      <option value="Programlama" className='text-dark fw-bold'>Programlama</option>
      <option value="Danışma" className='text-dark fw-bold'>Danışma</option>
      <option value="diğer" className='text-dark fw-bold'>Diğer</option>

    </Form.Select>

</div>
      </div>

          <div className='col-md-6 mx-auto d-flex m-3 gap-3'>
          <div className="input-group">
  <input required="" type="text" name="age"  className="input form-control rounded-4"/>
  <label htmlFor="years" className="user-label">Yaş</label>
</div>
<div className="input-group">
  <input required="" type="text" name="number"  className="input form-control rounded-4"/>
  <label htmlFor="roll" className="user-label">Telefon </label>
</div>
          </div>

          <div className="form-group col-md-6 mx-auto mb-3">
            <div className="input-group">
  <input required="" type="text" name="email" className="input form-control rounded-4"/>
  <label htmlFor="mail" className="user-label">Email</label>
</div>
            </div>
          <div className="col-md-6 mx-auto ">
          <div className="form-group">
            <label htmlFor="frm-message"></label>
              <textarea  id="frm-message"  name="message" className="form-control rounded-4"  placeholder="Aklında ne var?"></textarea>
            </div>
            <button id='btn1' className='m-3 float-end' type='submit' >
            <span><BsFillSendCheckFill/> Gönder</span>
</button>  
       
          </div>

        </form>
        
      </div>
      </div>
  )
}

export default Formik
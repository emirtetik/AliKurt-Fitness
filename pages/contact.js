import Layout from '@/layout/Layout'
import React from 'react'
import {GiStrongMan} from "react-icons/gi"
import {BsFillSendCheckFill} from "react-icons/bs"
function contact() {
  return (
    <Layout>
<section className="contact-us text-center ">
  <div className="fields">
    <div className="container ">
      
      <div className="row">
        
      <GiStrongMan size={100}/>
        <h2>Bize Ulaşın</h2> 
        <p className="lead">bizimle iletişime geçmekten çekinmeyin</p>

        
        <form  >
          
          <div className="col-md-6 mx-auto d-grid m-3 gap-3">
          <div className="input-group">
  <input required="" type="text" name="name" autoComplete="off" className="input form-control"/>
  <label className="user-label">User Name</label>
</div>

            <div className="form-group">
            <div className="input-group">
  <input required="" type="text" name="name" autoComplete="off" className="input form-control"/>
  <label className="user-label">Email</label>
</div>
            </div>

           
          </div>
          
          <div className="col-md-6 mx-auto ">
            <div className="form-group">
              <textarea className="form-control" placeholder="Your Message..."></textarea>
            </div>
            <button id='button' type="submit" className="btn btn-success btn-lg btn-block mt-3"><BsFillSendCheckFill/> Gönder</button>
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
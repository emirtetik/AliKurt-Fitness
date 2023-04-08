import Layout from '@/layout/Layout'
import React,{useEffect} from 'react'
import {AiFillInstagram} from "react-icons/ai"
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
<section className="contact-us text-center ">
  <div className="fields">
    <div className="container " data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <Image src="/images/logom1.png" alt='logo' width={100} height={80}></Image>
      
      <div className="row">
        <h2>Bize Ulaşın</h2> 
        <p className="lead">bizimle iletişime geçmekten çekinmeyin</p>
        <AiFillInstagram size={30}/>

        
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
            <button className='mt-3' id='btn1'>
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
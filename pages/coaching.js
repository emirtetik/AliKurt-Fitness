import Layout from '@/layout/Layout'
import React from 'react';
import { Container,Row,Tabs,Tab } from 'react-bootstrap';
import {BsFillSendCheckFill} from "react-icons/bs"
import {GiStrongMan} from "react-icons/gi"
import {FaInfoCircle} from "react-icons/fa"
import {ImPriceTags} from "react-icons/im"
 export default function coaching() {
 


  return (
    <Layout>
      <div className='w-100 ' id='container'>
      < Container   >
        <Row className='clearfix justify-content-center  fields' id='row'>
       <Tabs defaultActiveKey={1} animation="true" className='nav-tabs  ' justify  variant='pills'>
  <Tab eventKey={1} title="Koçluk" className='nav-item '>
   <h3 className='text-red' ><GiStrongMan size={40}/> Koçluk</h3>
   <p className='mb-3 m-2 '>The coaching service is a great choice for people who want a full professional guidance at any stage of their calisthenics journey.
     We set up the goals, choose the best plan/approach, and tackle it on a daily basis.</p>
     <h3 ><FaInfoCircle size={40}/> peki neden koçluk almalısın?</h3>
     <p className='mb-3 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab sed nemo earum tenetur inventore. Magni recusandae, facilis a odit architecto quod consequuntur minus repellat magnam ad sequi voluptate eum.</p>
     <h3>Ne öğreniceksin?</h3>
     <ul className='mb-3'>
      <li>uzun vadeli yol haritası</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
     </ul>
     <h3 ><ImPriceTags size={40}/> Fiyatlandırma</h3>
     <ul className='mb-3'>
      <li>1 ay (30 gün) - 220 dolar  <button className='m-1' id='button'>
      Başla
</button>  
      </li> 
      <li>3 ay (90 gün) - 420 dolar   <button className='m-2' id='button'>
  Başla
</button>  </li>
      <li>6 ay (180 gün) - 520 dolar    
      <button  id='button' className='m-2'>
      Başla
</button> 
 </li>
     </ul>
     <div className="row border border-light rounded-5  m-3">
        <h2 className='text-center mt-3'>Bize Ulaşın</h2> 
        <p className="text-center">bizimle iletişime geçmekten çekinmeyin</p>

        
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
            <button id='btn1' className='m-3 float-end' >
            <span><BsFillSendCheckFill/> Satın Al</span>
</button>  
       
          </div>

        </form>
        
      </div>
  </Tab>
  <Tab eventKey={2} title="Program">
     <h3>Program</h3>
    <p className='mb-3 m-2'>The coaching service is a great choice for people who want a full professional guidance at any stage of their calisthenics journey.
     We set up the goals, choose the best plan/approach, and tackle it on a daily basis.</p>
     <h3>peki neden koçluk almalısın?</h3>
     <p className='mb-3 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab sed nemo earum tenetur inventore. Magni recusandae, facilis a odit architecto quod consequuntur minus repellat magnam ad sequi voluptate eum.</p>
     <h3>Ne öğreniceksin?</h3>
     <ul className='mb-3'>
      <li>uzun vadeli yol haritası</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
     </ul>
     <h3>Fiyatlandırma</h3>
     <ul className='mb-3'>
      <li>1 ay (30 gün) - 220 dolar asfadfs</li>
      <li>3 ay (90 gün) - 420 dolar asfadfs</li>
      <li>6 ay (180 gün) - 520 dolar asfadfs</li>
     </ul>
     <div className="row border border-2  m-3">
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
            <button id='button' type='submit' className='btn-lg btn-block m-3'> <span><BsFillSendCheckFill/> Gönder</span></button>
          </div>

        </form>
        
      </div>
  </Tab>
  <Tab eventKey={3} title="Danışmanlık" >
   <h3>Danışmanlık</h3>
   <p className='mb-3 m-2'>The coaching service is a great choice for people who want a full professional guidance at any stage of their calisthenics journey.
     We set up the goals, choose the best plan/approach, and tackle it on a daily basis.</p>
     <h3>peki neden koçluk almalısın?</h3>
     <p className='mb-3 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab sed nemo earum tenetur inventore. Magni recusandae, facilis a odit architecto quod consequuntur minus repellat magnam ad sequi voluptate eum.</p>
     <h3>Ne öğreniceksin?</h3>
     <ul className='mb-3'>
      <li>uzun vadeli yol haritası</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
      <li>bireysel eğitim</li>
     </ul>
     <h3>Fiyatlandırma</h3>
     <ul className='mb-3'>
      <li>1 ay (30 gün) - 220 dolar asfadfs</li>
      <li>3 ay (90 gün) - 420 dolar asfadfs</li>
      <li>6 ay (180 gün) - 520 dolar asfadfs</li>
     </ul>
     <div className="row border border-2  m-3">
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
            <button id='button' type='submit' className='btn-lg btn-block m-3'> <span><BsFillSendCheckFill/> Gönder</span></button>
          </div>

        </form>
        
      </div>
  </Tab>
</Tabs>
</Row>
</Container>
<section className=''>
                  
                  <div className="container ">
                    <h1 className="h1 text-center mb-5">MEET THE TEAM</h1>
                
                
                    <div >
                
                      <div className="row g-5" >
                         
                       
                      <div className=" col-lg-6 col-md-6 ">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                
                          
                         <div className=" col-lg-6 col-md-6 ">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                              
                         <div className=" col-lg-6 col-md-6 ">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                              
                         <div className=" col-lg-6 col-md-6 ">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                            
                         <div className=" col-lg-6 col-md-6 ">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                
                
                                <div className="col-lg-6 col-md-6 ">
                <div className='card  testimonial'>
                               <div className='testimonial-card  card-body'>
                               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                               <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                      </div>
                   </div>
                
                </div>
                
                                </section>
</div>
    </Layout>
  )
}

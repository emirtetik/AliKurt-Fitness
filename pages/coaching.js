import Layout from '@/layout/Layout'
import Meta from '@/components/Meta';
import React, {useEffect,useRef} from 'react';
import { Container,Row,Tabs,Tab } from 'react-bootstrap';
import {BsFillSendCheckFill,BsFillPersonCheckFill,BsQuestionCircleFill} from "react-icons/bs"
import {RiUserSearchFill} from "react-icons/ri"

import {GiStrongMan} from "react-icons/gi"
import {FaInfoCircle} from "react-icons/fa"
import {TiTick} from "react-icons/ti"
import Image from 'next/image'
import AOS from "aos"
import "aos/dist/aos.css"
import {ImPriceTags} from "react-icons/im"
 export default function coaching() {
 
  const testimonialDiv = React.useRef()

  function smoothScroll(target) {
    const { top } = target.getBoundingClientRect()
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
    });
  }


  useEffect(() => {
    AOS.init({duration:1000});
  },[]);

  return (
    <Layout>


<Meta 
      title={"Koçluk"}
      keywords={""}
      description={""}
      
      />

      <div className='w-100 ' id='container'>
      < Container   >
        <Row className='clearfix justify-content-center  fields' id='row' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
       <Tabs defaultActiveKey={1} animation="true" className='nav-tabs  ' justify  variant='pills' >
  <Tab eventKey={1} title="Koçluk" className='nav-item '>
    <button onClick={() => smoothScroll(testimonialDiv.current)} id='button' className=' text-white fw-bold float-end'>Testimonial</button>
   <h3 className=' lh-lg mb-3' ><RiUserSearchFill size={30}/> Kimler İçin?</h3>
   <p className='mb-3 m-2 lh-lg w-75'>Koçluk hizmeti antrenman yolculuğunun herhangi bir aşamasında tam profesyonel rehberlik isteyen kişiler için mükemmel bir seçimdir. Kısa/uzun vadeli hedefleri belirliyoruz, en iyi planı seçiyoruz ve bunları günlük olarak ele alıyoruz.</p>
     <h3 className='mb-3'>  <BsQuestionCircleFill size={30} /> Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-75'>Satın alma işlemini gerçekleştirdikten sonra 24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra 30 dakikalık görüntülü görüşmede tüm detayları konuşacağız ve ardından planınız üzerinde çalışmaya başlayacağım.</p>
     <h3 className='lh-lg mb-2'> <TiTick size={30} /> Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg'>
      <li className='mb-2'>	Hedefler doğrultusunda uzun vadeli yol haritası</li>
      <li className='mb-2'>	Tamamen kişiselleştirilmiş antrenman programı</li>
      <li className='mb-2'>	Haftalık program güncellemeleri</li>
      <li className='mb-2'>	Form/teknik değerlendirmeler</li>
      <li className='mb-2'>	Antrenman döngüleri sonunda görüntülü görüşme. (4-12 hafta)</li>
      <li className='mb-2'>	Whatsapp aracılığıyla günlük iletişim</li>

     </ul>
     <h3 className='mb-3'><ImPriceTags size={25}/> Fiyatlandırma</h3>
     <ul className='mb-3 lh-lg'>
      <li>Aylık (30 gün) - 1400 ₺  <button className='m-1' id='button'>
      Başla
</button>  
      </li> 
      <li>3 ay (90 gün) - 3400 ₺  <button className='m-2' id='button'>
  Başla
</button>  </li>
      <li>6 ay (180 gün) -  6600 ₺   
      <button  id='button' className='m-2'>
      Başla
</button> 
 </li>
     </ul>
     <div className="row border border-light rounded-5  m-3">
        <h2 className='text-center mt-3'>Bize Ulaşın</h2> 
        <p className="text-center">bizimle iletişime geçmekten çekinmeyin</p>

        
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

          <div className='col-md-6 mx-auto d-flex m-3 gap-3'>
          <div className="input-group">
  <input required="" type="text" name="age"  className="input form-control rounded-4"/>
  <label htmlFor="years" className="user-label">Yaş</label>
</div>
<div className="input-group">
  <input required="" type="text" name="number"  className="input form-control rounded-4"/>
  <label htmlFor="roll" className="user-label">Telefon No</label>
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
  </Tab>
  <Tab eventKey={2} title="Programlama">
  <button onClick={() => smoothScroll(testimonialDiv.current)} id='button' className=' text-light fw-bold float-end'>Testimonial</button>
  <h3 className=' lh-lg mb-3' ><RiUserSearchFill size={30}/> Kimler İçin?</h3>
   <p className='mb-3 m-2 lh-lg w-75'>Programlama hizmeti antrenman yolculuğunun herhangi bir aşamasında hedeflerine uygun kısa ve uzun vadeli program isteyen, çok fazla detaya odaklanılmasına ihtiyaç duymayan kişiler için mükemmel bir seçimdir.</p>
     <h3 className='mb-3'>  <BsQuestionCircleFill size={30} /> Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-75'>Satın alma işlemini gerçekleştirdikten sonra  24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra 30 dakikalık görüntülü toplantıda tüm detayları konuşacağız ve ardından plan üzerinde çalışmaya başlayacağım.</p>
     <h3 className='lh-lg mb-2'> <TiTick size={30} /> Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg'>
      <li className='mb-2'>	Tamamen kişiselleştirilmiş antrenman programı</li>
      <li className='mb-2'>	İlk antrenman haftasının sonunda form/teknik geri bildirimleri</li>
      <li className='mb-2'>	Biten antrenman döngüleri sonrası görüntülü görüşme ve raporlama (6-12 hafta)</li>
     </ul>
     
     <h3 className='mb-3'><ImPriceTags size={25}/> Fiyatlandırma</h3>
     <ul className='mb-3 lh-lg'>
      <li>6 Haftalık (42 gün) - 1050 ₺  <button className='m-1' id='button'>
      Başla
</button>  
      </li> 
      <li>3 ay (90 gün) - 1700 ₺   <button className='m-2' id='button'>
  Başla
</button>  </li>
      <li>6 ay (180 gün) - 3400 ₺    
      <button  id='button' className='m-2'>
      Başla
</button> 
 </li>
     </ul>
     <div className="row border border-light rounded-5  m-3">
        <h2 className='text-center mt-3'>Bize Ulaşın</h2> 
        <p className="text-center">bizimle iletişime geçmekten çekinmeyin</p>

        
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

          <div className='col-md-6 mx-auto d-flex m-3 gap-3'>
          <div className="input-group">
  <input required="" type="text" name="age"  className="input form-control rounded-4"/>
  <label htmlFor="years" className="user-label">Yaş</label>
</div>
<div className="input-group">
  <input required="" type="text" name="number"  className="input form-control rounded-4"/>
  <label htmlFor="roll" className="user-label">Telefon No</label>
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
              <textarea className="form-control rounded-4" placeholder="Aklında Ne Var..."></textarea>
            </div>
            <button id='btn1' className='m-3 float-end' >
            <span><BsFillSendCheckFill/> Gönderl</span>
</button>  
       
          </div>

        </form>
        
      </div>
  </Tab>
  <Tab eventKey={3} title="Danışma" >
  <button onClick={() => smoothScroll(testimonialDiv.current)} id='button' className=' text-light fw-bold float-end'>Testimonial</button>

  <h3 className=' lh-lg' ><RiUserSearchFill size={30}/> Kimler İçin?</h3>
   <p className='mb-3 m-2 lh-lg w-75'>Danışmanlık hizmeti, yardıma ihtiyaç duydukları belirli bir konuda soruları olan ve bunlara çözüm arayan kişiler içindir. Programınız , antrenman sürenizin organizasyonu, egzersiz teknikleriniz veya yorgunluk yönetimi vb gibi konularda yardım arıyorsanız danışmanlık hizmeti tam size göre.</p>
     <h3 className='mb-3 '><BsQuestionCircleFill size={30}  className='m-2'/>Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-75'>Satın alma işlemini gerçekleştirdikten sonra  24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra size daha detaylı sorular soracağım ve görüntülü görüşmemizin zamanını belirleyeceğiz.</p>
     <h3 className='mb-3 lh-lg'> <TiTick size={30} /> Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg'>
      <li className='mb-2'>	İhtiyaç duyduğunuz konulara kişisel çözümler ve rehberlik</li>
      <li className='mb-2'>	E-postanıza gönderilen , hazırlık notlarımı içeren kişisel PDF dosyası</li>



     </ul>
     <h3 className='mb-3'><ImPriceTags size={25}/> Fiyatlandırma</h3>
     <ul className='mb-3 lh-lg'>
     
      <li>60 dakika + PDF - 425 ₺ 
      <button  id='button' className='m-2'>
      Başla
</button> 
 </li>
     </ul>
     <div className="row border border-light rounded-5  m-3">
        <h2 className='text-center mt-3'>Bize Ulaşın</h2> 
        <p className="text-center">bizimle iletişime geçmekten çekinmeyin</p>

        
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

          <div className='col-md-6 mx-auto d-flex m-3 gap-3'>
          <div className="input-group">
  <input required="" type="text" name="age"  className="input form-control rounded-4"/>
  <label htmlFor="years" className="user-label">Yaş</label>
</div>
<div className="input-group">
  <input required="" type="text" name="number"  className="input form-control rounded-4"/>
  <label htmlFor="roll" className="user-label">Telefon No</label>
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
              <textarea className="form-control rounded-4" placeholder="Aklında Ne Var..."></textarea>
            </div>
            <button id='btn1' className='m-3 float-end' type='submit' >
            <span><BsFillSendCheckFill/>Gönder</span>
</button>  
       
          </div>

        </form>
      </div>
  </Tab>
</Tabs>
</Row>
</Container>
    <section ref={testimonialDiv}>
                  
                  <div className="container ">
                    <h2 className="h1 text-center mb-5">MEET THE TEAM</h2>
                
                
                    <div >
                
                      <div className="row " >
                         
                       
                      <div className=" col-lg-6 col-md-6 mb-5" data-aos="zoom-in">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <Image src="/images/work.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                
                          
                         <div className=" col-lg-6 col-md-6 mb-5" data-aos="zoom-in">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <Image src="/images/nodejs5.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                              
                         <div className=" col-lg-6 col-md-6 mb-5" data-aos="zoom-in">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <Image src="/images/iyi.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                              
                         <div className=" col-lg-6 col-md-6 mb-5" data-aos="zoom-in">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <Image src="/images/iyi.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                            
                         <div className=" col-lg-6 col-md-6 mb-5" data-aos="zoom-in">
                <div className='card testimonial'>
                               <div className='testimonial-card  card-body'>
                               <Image src="/images/iyi.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

                               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                               </div>
                               </div>
                         </div>
                
                
                                <div className="col-lg-6 col-md-6 mb-5" data-aos="zoom-in">
                <div className='card  testimonial'>
                               <div className='testimonial-card  card-body'>
                               <Image src="/images/iyi.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

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

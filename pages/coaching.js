import Layout from '@/layout/Layout'
import Card from "../components/Card"
import Meta from '@/components/Meta';
import React, {useEffect,useRef} from 'react';
import { Container,Row,Tabs,Tab } from 'react-bootstrap';
import {BsFillSendCheckFill,BsFillPersonCheckFill,BsQuestionCircleFill} from "react-icons/bs"
import {RiUserSearchFill} from "react-icons/ri"

import {GiStrongMan} from "react-icons/gi"
import {FaInfoCircle} from "react-icons/fa"
import {TiTick} from "react-icons/ti"
import Image from 'next/image'
import Link from 'next/link'
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

      <div className='w-100  ' id='container'>
      < Container   >
        <Row className='clearfix justify-content-center  fields' id='row' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
       <Tabs defaultActiveKey={1} animation="true" className='nav-tabs  ' justify  variant='pills' >
  <Tab eventKey={1} title="Koçluk" className='nav-item '>
    <button onClick={() => smoothScroll(testimonialDiv.current)} id='button' className=' text-white fw-bold float-end'>Danışanlar</button>
   <h3 className=' lh-lg mb-3' ><RiUserSearchFill size={30}/> Kimler İçin?</h3>
   <p className='mb-3 m-2 lh-lg w-100 text-left'>Koçluk hizmeti antrenman yolculuğunun herhangi bir aşamasında tam profesyonel rehberlik isteyen kişiler için mükemmel bir seçimdir. Kısa/uzun vadeli hedefleri belirliyoruz, en iyi planı seçiyoruz ve bunları günlük olarak ele alıyoruz.</p>
     <h3 className='mb-3'>  <BsQuestionCircleFill size={30} /> Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-100 text-left'>Satın alma işlemini gerçekleştirdikten sonra 24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra 30 dakikalık görüntülü görüşmede tüm detayları konuşacağız ve ardından planınız üzerinde çalışmaya başlayacağım.</p>
     <h3 className='lh-lg mb-2'> <TiTick size={30} /> Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg w-100 text-left'>
      <li className='mb-2'>	Hedefler doğrultusunda uzun vadeli yol haritası</li>
      <li className='mb-2'>	Tamamen kişiselleştirilmiş antrenman programı</li>
      <li className='mb-2'>	Haftalık program güncellemeleri</li>
      <li className='mb-2'>	Form/teknik değerlendirmeler</li>
      <li className='mb-2'>	Antrenman döngüleri sonunda görüntülü görüşme. (4-12 hafta)</li>
      <li className='mb-2'>	Whatsapp aracılığıyla günlük iletişim</li>

     </ul>
     <h3 className='mb-5 '><ImPriceTags size={25}/> Fiyatlandırma</h3>
     <div id='price' class="container">
  <div class="row justify-content-center">
   
    <div class="col-md-3">
    <Link href="/">
      <div class="card" >
        <div class="card-body d-flex flex-column justify-content-center align-items-center" >
           <h4>Aylık</h4>
           <span>(30 gün)</span>
           <hr />
           <h1 className='fw-bold '>1400₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div id='cardUp' class="col-md-3">
    <Link href="/">
      <div class="card" >
        <div class="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>6 Aylık</h4>
           <span>(180 gün)</span>
           <hr />
           <h1 className='fw-bold'>6600₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div class="col-md-3">
    <Link href="/">
      <div class="card" >
        <div class="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>3 Aylık</h4>
           <span >(90 gün)</span>
           <hr />
           <h1 className='fw-bold' >3400₺</h1>
        </div>
      </div>
    </Link>
    </div>
  </div>
</div>
     <div className="row border border-light rounded-5  m-3">
        <h2 className='text-center mt-3'>Bize Ulaşın</h2> 
        <p className="text-center">Burada genel direnç antrenmanları, fitness ve fitness paralelinde hayata dair bazı konularda ihtiyacınız olabilecek birçok içerik bulabilirsiniz.</p>

        
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
   <p className='mb-3 m-2 lh-lg w-100 text-left'>Programlama hizmeti antrenman yolculuğunun herhangi bir aşamasında hedeflerine uygun kısa ve uzun vadeli program isteyen, çok fazla detaya odaklanılmasına ihtiyaç duymayan kişiler için mükemmel bir seçimdir.</p>
     <h3 className='mb-3'>  <BsQuestionCircleFill size={30} /> Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-100 text-left'>Satın alma işlemini gerçekleştirdikten sonra  24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra 30 dakikalık görüntülü toplantıda tüm detayları konuşacağız ve ardından plan üzerinde çalışmaya başlayacağım.</p>
     <h3 className='lh-lg mb-2'> <TiTick size={30} /> Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg w-100 text-left'>
      <li className='mb-2'>	Tamamen kişiselleştirilmiş antrenman programı</li>
      <li className='mb-2'>	İlk antrenman haftasının sonunda form/teknik geri bildirimleri</li>
      <li className='mb-2'>	Biten antrenman döngüleri sonrası görüntülü görüşme ve raporlama (6-12 hafta)</li>
     </ul>
     
     <h3 className='mb-3'><ImPriceTags size={25}/> Fiyatlandırma</h3>
     <div id='price' class="container">
  <div class="row justify-content-center">
   
    <div class="col-md-3">
    <Link href="/">
      <div class="card" >
        <div class="card-body d-flex flex-column justify-content-center align-items-center" >
           <h4>Aylık</h4>
           <span>(30 gün)</span>
           <hr />
           <h1 className='fw-bold'>1050₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div id='cardUp' class="col-md-3">
    <Link href="/">
      <div class="card" >
        <div class="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4 >6 Aylık</h4>
           <span>(180 gün)</span>
           <hr />
           <h1 className='fw-bold'>6600₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div class="col-md-3">
    <Link href="/">
      <div class="card" >
        <div class="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>3 Aylık</h4>
           <span>(90 gün)</span>
           <hr />
           <h1 className='fw-bold'>1700₺</h1>
        </div>
      </div>
    </Link>
    </div>
  </div>
</div>
     <div className="row border border-light rounded-5  m-3">
        <h2 className='text-center mt-3'>Bize Ulaşın</h2> 
        <p className="text-center">Burada genel direnç antrenmanları, fitness ve fitness paralelinde hayata dair bazı konularda ihtiyacınız olabilecek birçok içerik bulabilirsiniz.</p>

        
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
   <p className='mb-3 m-2 lh-lg w-100 text-left'>Danışmanlık hizmeti, yardıma ihtiyaç duydukları belirli bir konuda soruları olan ve bunlara çözüm arayan kişiler içindir. Programınız , antrenman sürenizin organizasyonu, egzersiz teknikleriniz veya yorgunluk yönetimi vb gibi konularda yardım arıyorsanız danışmanlık hizmeti tam size göre.</p>
     <h3 className='mb-3 '><BsQuestionCircleFill size={30}  className='m-2'/>Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-100 text-left'>Satın alma işlemini gerçekleştirdikten sonra  24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra size daha detaylı sorular soracağım ve görüntülü görüşmemizin zamanını belirleyeceğiz.</p>
     <h3 className='mb-3 lh-lg'> <TiTick size={30} /> Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg w-100 text-left'>
      <li className='mb-2'>	İhtiyaç duyduğunuz konulara kişisel çözümler ve rehberlik</li>
      <li className='mb-2'>	E-postanıza gönderilen , hazırlık notlarımı içeren kişisel PDF dosyası</li>



     </ul>
     <h3 className='mb-3'><ImPriceTags size={25}/> Fiyatlandırma</h3>
     <div id='price' class="container">
  <div class="row justify-content-center">
   
    
    <div id='cardUp' class="col-md-3">
    <Link href="/">
      <div class="card" >
        <div class="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>60 DAKİKA</h4>
           <span>+ pdf</span>
           <hr />
           <h1 className='fw-bold'>425₺</h1>
        </div>
      </div>
      </Link>
    </div>
   
  </div>
</div>
     <div className="row border border-light rounded-5  m-3">
        <h2 className='text-center mt-3'>Bize Ulaşın</h2> 
        <p className="text-center">Burada genel direnç antrenmanları, fitness ve fitness paralelinde hayata dair bazı konularda ihtiyacınız olabilecek birçok içerik bulabilirsiniz.</p>

        
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
    <Card />
    </section>
</div>
    </Layout>
  )
}

import Layout from '@/layout/Layout'
import Card from "../components/Card"
import Formik from "../components/Formik"
import Meta from '@/components/Meta';
import React, {useEffect,useRef} from 'react';
import { Container,Row,Tabs,Tab } from 'react-bootstrap';
import {BsFillPersonCheckFill,BsQuestionCircleFill} from "react-icons/bs"
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

      <div className='w-100 mt-5  ' id='container'>
      < Container   >
        <Row className='clearfix justify-content-center  fields' id='row' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
       <Tabs defaultActiveKey={1} animation="true" className='nav-tabs  ' justify  variant='pills' >
  <Tab eventKey={1} title="Koçluk" className='nav-item '>
  <button onClick={() => smoothScroll(testimonialDiv.current)} id='button' className=' text-white  float-end'>Danışanlar</button>
  
     <div  id='context' className="container mb-5">

   <h3 className=' lh-lg mb-3 ' > Kimler İçin?</h3>
   <p className='mb-3 m-2 lh-lg w-100 text-left'>Koçluk hizmeti antrenman yolculuğunun herhangi bir aşamasında tam profesyonel rehberlik isteyen kişiler için mükemmel bir seçimdir. Kısa ve uzun vadeli hedefleri belirliyoruz, en iyi planı seçiyoruz ve bunları günlük olarak ele alıyoruz.</p>
     <h3 className='mb-3'>  Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-100 text-left'>Satın alma işlemini gerçekleştirdikten sonra 24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra 30 dakikalık görüntülü görüşmede tüm detayları konuşacağız ve ardından planınız üzerinde çalışmaya başlayacağım.</p>
     <h3 className='lh-lg mb-2'>  Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg w-100 text-left'>
      <li className='mb-2'>	Hedefler doğrultusunda uzun vadeli yol haritası</li>
      <li className='mb-2'>	Tamamen kişiselleştirilmiş antrenman programı</li>
      <li className='mb-2'>	Haftalık program güncellemeleri</li>
      <li className='mb-2'>	Form / teknik değerlendirmeler</li>
      <li className='mb-2'>	Hedefler doğrultusunda beslenme planlaması ve takibi (Diyet Listesi Değil!)</li>
      <li className='mb-2'>	Antrenman döngüleri sonunda görüntülü görüşme. (4-12 hafta)</li>
      <li className='mb-2'>	Whatsapp aracılığıyla günlük iletişim</li>

     </ul>
 
    

     </div>
    
     <div id='price' className="container " >
  <div id='price-container' className="row justify-content-center   ">
   
    <div className="col-md-3 col-sm-1">
    <Link href="https://iyzi.link/AJHzEw" target='_blank'>
      <div className="card mx-auto" >
        <div className="card-body d-flex flex-column justify-content-center align-items-center" id="myCard" >
           <h4>Aylık</h4>
           <span>(30 gün)</span>
           <hr />
           <h1 className='price_number'>2100₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div id='cardUp' className="col-md-3">
    <Link href="https://iyzi.link/AJHzFQ" target='_blank'>
      <div className="card mx-auto" >
        <div className="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>3 Aylık</h4>
           <span>(90 gün)</span>
           <hr />
           <h1 className='price_number'>5200₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div className="col-md-3">
    <Link href="https://iyzi.link/AJHzFw" target='_blank'>
      <div className="card mx-auto" >
        <div className="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>6 Aylık</h4>
           <span >(180 gün)</span>
           <hr />
           <h1 className='price_number' >9600₺</h1>
        </div>
      </div>
    </Link>
    </div>
  </div>
</div>
     
  </Tab>
  <Tab eventKey={2} title="Programlama">
  <button onClick={() => smoothScroll(testimonialDiv.current)} id='button' className=' text-light float-end'>Danışanlar</button>
  <div id='context' className="container mb-5">
  <h3 className=' lh-lg mb-3' > Kimler İçin?</h3>
   <p className='mb-3 m-2 lh-lg w-100 text-left'>Programlama hizmeti antrenman yolculuğunun herhangi bir aşamasında hedeflerine uygun kısa ve uzun vadeli program isteyen, çok fazla detaya odaklanılmasına ihtiyaç duymayan kişiler için mükemmel bir seçimdir.</p>
     <h3 className='mb-3'>   Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-100 text-left'>Satın alma işlemini gerçekleştirdikten sonra  24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra 30 dakikalık görüntülü görüşmede tüm detayları konuşacağız ve ardından plan üzerinde çalışmaya başlayacağım.</p>
     <h3 className='lh-lg mb-2'> Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg w-100 text-left'>
      <li className='mb-2'>	Tamamen kişiselleştirilmiş antrenman programı</li>
      <li className='mb-2'>	İlk antrenman haftasının sonunda form / teknik geri bildirimleri</li>
      <li className='mb-2'>	Biten antrenman döngüleri sonrası görüntülü görüşme ve raporlama (6-12 hafta)</li>
     </ul>
   
     </div>
     <div id='price' className="container"  >
  <div className="row justify-content-center">
   
    <div className="col-md-3">
    <Link href="https://iyzi.link/AJHzGQ" target='_blank'>
      <div className="card mx-auto" >
        <div className="card-body d-flex flex-column justify-content-center align-items-center" >
           <h4>6 Haftalık</h4>
           <span>(42 gün)</span>
           <hr />
           <h1 className='price_number'>1600₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div id='cardUp' className="col-md-3">
    <Link href="https://iyzi.link/AJHzGg" target='_blank'>
      <div className="card mx-auto" >
        <div className="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4 >3 Aylık</h4>
           <span>(90 gün)</span>
           <hr />
           <h1 className='price_number'>2650₺</h1>
        </div>
      </div>
      </Link>
    </div>
    <div className="col-md-3">
    <Link href="https://iyzi.link/AJHzGw" target='_blank'>
      <div className="card mx-auto" >
        <div className="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>6 Aylık</h4>
           <span>(180 gün)</span>
           <hr />
           <h1 className='price_number'>5000₺</h1>
        </div>
      </div>
    </Link>
    </div>
  </div>
</div>
    
  </Tab>
  <Tab eventKey={3} title="Danışma" >
  <button onClick={() => smoothScroll(testimonialDiv.current)} id='button' className=' text-light  float-end'>Danışanlar</button>
  <div id='context' className="container mb-5">
  <h3 className=' lh-lg' > Kimler İçin?</h3>
   <p className='mb-3 m-2 lh-lg w-100 text-left'>Danışmanlık hizmeti, yardıma ihtiyaç duydukları belirli bir konuda soruları olan ve bunlara çözüm arayan kişiler içindir. Programınız , antrenman sürenizin organizasyonu, egzersiz teknikleriniz veya yorgunluk yönetimi vb gibi konularda yardım arıyorsanız danışmanlık hizmeti tam size göre.</p>
     <h3 className='mb-3 '>Süreç Nasıl İşliyor?</h3>
     <p className='mb-3 m-2 lh-lg w-100 text-left'>Satın alma işlemini gerçekleştirdikten sonra  24 saat içinde onay içeren bir e-posta alacaksınız. Daha sonra size daha detaylı sorular soracağım ve görüntülü görüşmemizin zamanını belirleyeceğiz.</p>
     <h3 className='mb-3 lh-lg'>  Tam olarak neler elde ediceksin?</h3>
     <ul className='mb-3 lh-lg w-100 text-left'>
      <li className='mb-2'>	İhtiyaç duyduğunuz konulara kişisel çözümler ve rehberlik</li>
      <li className='mb-2'>	E-postanıza gönderilen , hazırlık notlarımı içeren kişisel PDF dosyası</li>

     </ul>
   
     </div>
     <div id='price' className="container" > 
  <div className="row justify-content-center">
   
    
    <div id='cardUp' className="col-md-3">
    <Link href="https://iyzi.link/AJHzHA" target='_blank'>
      <div className="card mx-auto" >
        <div className="card-body d-flex flex-column justify-content-center align-items-center" >
        <h4>60 DAKİKA</h4>
           <span>+ pdf</span>
           <hr />
           <h1 className='price_number'>650₺</h1>
        </div>
      </div>
      </Link>
    </div>
   
  </div>
</div>
    
  </Tab>
</Tabs>
</Row>
</Container>
<hr  />
<section ref={testimonialDiv} className='mt-1 mb-5'>
    <Card />
    </section>
    <Formik />
    
</div>
    </Layout>
  )
}

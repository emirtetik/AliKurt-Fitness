import React,{useEffect} from 'react'
import Layout from '@/layout/Layout';
import Head from 'next/head'
import Image from 'next/image'
import Meta from '@/components/Meta'
import AOS from "aos"
import "aos/dist/aos.css"
import Carousel from 'react-bootstrap/Carousel';
import {TiTick} from "react-icons/ti"



export default function Home() {

  useEffect(() => {
    AOS.init({duration:1000});
  },[]);

  
  return (
    <Layout>
      <Meta 
      title={"AliKurt"}
      keywords={""}
      description={""}
      
      />
      <div className="home ">

      <Carousel fade interval={3000} >
      <Carousel.Item>
        <img
        id='carousel-img'
          className="d-block w-100"
          src="/images/bent.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3 className="text-center  font-weight-bold h2">Performans! <hr /></h3>
        <p className="text-center ">Vücudunu kontrol et.  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='carousel-img'
          className="d-block w-100"
          src="/images/ALP06315.JPG"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className="text-center h1">ESTETİK!<hr /></h3>
        <p className="text-center">Kas kütleni  arttır. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='carousel-img'
          className="d-block w-100"
          src="/images/bent.JPG"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className="text-center h1">GÜÇ<hr /></h3>
        <p className="text-center ">Ağır kiloları hareket ettir</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
  


               <section className=' text-center py-lg-5  '>
                <div className='container '>
                <div className=' mt-5'>
                  <h2 className='h1 ' data-aos="zoom-out">Hoş Geldiniz!</h2>
                </div>
                  <div className=' h3 w-75 mx-auto p-3   ' data-aos="zoom-out">
                    <p  className='  mx-auto'>Koçluk hizmetlerim genel olarak  fitness, beslenme ve direnç antrenmanlarının birçok dalını içermektedir.</p>
                    <ul className=' py-4 d-grid text-start justify-content-center'>
                      <li><TiTick size={40} />	Streetlifting (Barfiks, Dips, Squat , Muscle Up 1 tekrar maksimum)</li>
                      <li><TiTick size={40} />Esnetik Fizik</li>
                      <li><TiTick size={40} />	Calisthenics Skills ( Muscle Up , Front Lever, Handstand Push Up vb)</li>
                      <li><TiTick size={40} />Powerlifting</li>
                    </ul>
                    <p className='  mx-auto'>Amacınız yukarıdakilerden birinde, birkaçında veya tümünde çok iyi olmak olabilir.  Bunun için burdayım!</p>
                  </div>
                </div>
                </section> 
                
                <section className=' mt-5 w-100'>
                  
  

    <div className="container ">
    <h2 className="h1 text-center mb-5"  >MEET THE TEAM</h2>

    <div className='w-100'>

      <div className="row  "  data-aos="zoom-in" >
         
       
      <div className=" col-lg-6 col-md-6  mb-5" >
<div className='card testimonial mx-auto'>
               <div className='testimonial-card  card-body'>
               <Image src="/images/study1.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>
               <h5 className="card-title text-center text-light ">EREN</h5>
                  <p className=" card-text text-center text-white-50   ">Verdigim parayi sonuna kadar hakediyor kocluk icerisinde gercekten ilgilenildigimi hissettim gerek spor ici gerek gunluk hayattan abi-kardes iliskisindeki sorulari olsun cok samimi hissettirdi. Ayrica koclukta kazandigim bilgiler sayesinde kendi programimi yaratip takip edebilecek potansiyele sahip oldugumu dusunuyorum</p>
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
               <Image src="/images/bent.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

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











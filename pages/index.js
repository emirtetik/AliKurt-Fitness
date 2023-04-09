import React,{useEffect} from 'react'
import Layout from '@/layout/Layout';
import Head from 'next/head'
import Image from 'next/image'
import Meta from '@/components/Meta'
import AOS from "aos"
import "aos/dist/aos.css"




export default function Home() {

  useEffect(() => {
    AOS.init({duration:1000});
  },[]);

  const toggleCarousel = (action) => {
    const { Carousel } = require("bootstrap");
    const carousel = new Carousel("#myCarousel");
    if (action === "next") {
      carousel.next();
    } else {
      carousel.prev();
    }
  };
  return (
    <Layout>
      <Meta 
      title={"AliKurt"}
      keywords={"Html,Css,JavaScript,React,Nextjs,Frontend developer,developer,portfolio,Web "}
      description={"Emir Tetik Frontend Developer Portfolio, web teknolojileri kullanıp üreten bir yazılımcı.I am a Front End Web Developer creating Front End of Websites and Web Applications."}
      
      />
      <div className="home">
       <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner " id="myCarousel"
          
          data-bs-touch="false"
          data-bs-interval="false">
            <div className="carousel-item active">
                <img id='carousel-img' className="d-block w-100  " src="/images/bent.JPG" alt="First slide"/>
                <div className="carousel-caption">
                    <h3 className="text-center  font-weight-bold h2">Performans! <hr /></h3>
                    <p className="text-center ">Jimnastik sporcusu gibi!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img id='carousel-img' className="d-block w-100" src="/images/ALP06315.JPG" alt="Second slide"/>
                <div className="carousel-caption">
                    <h3 className="text-center h1">ESNETİK!<hr /></h3>
                    <p className="text-center">Vucüt geliştirmeci gibi!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img id='carousel-img' className="d-block w-100" src="/images/bent.JPG" alt="Third slide"/>
                <div className="carousel-caption">
                    <h3 className="text-center h1">GÜÇ<hr /></h3>
                    <p className="text-center ">Kuvvet sporcusu gibi!</p>
                </div>
            </div>
        </div>
        <button
          className="carousel-control-prev"
          onClick={() => toggleCarousel("prev")}
        >
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only "></span>
        </button>
        <button
          className="carousel-control-next"
          onClick={() => toggleCarousel("next")}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
        </button>
       
    </div>
               <section className=' text-center py-lg-5  '>
                <div className='container '>
                <div className=' '>
                  <h2 className='h1' data-aos="zoom-out">Welcome TO ALİKURT</h2>
                </div>
                  <div className=' h3 w-75 mx-auto p-3  ' data-aos="zoom-out">
                    <p  className='  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta optio, odit voluptate officia veniam possimus est molestias aliquid unde ipsa magni dignissimos ab commodi explicabo, dolorum sed provident doloribus.</p>
                    <ul className=' py-4'>
                      <li>Skills</li>
                      <li>Skills</li>
                      <li>Skills</li>
                      <li>Skills</li>
                    </ul>
                    <p className='  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta optio, odit voluptate officia veniam possimus est molestias aliquid unde ipsa magni dignissimos ab commodi explicabo, dolorum sed provident doloribus.</p>
                  </div>
                </div>
                </section> 
                <section className='mb-5'>
                  
  <div className="container ">
    <h2 className="h1 text-center mb-5" data-aos="zoom-out" >MEET THE TEAM</h2>


    <div >

      <div className="row g-5"  >
         
       
      <div className=" col-lg-6 col-md-6 " data-aos="zoom-in">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <Image src="/images/study1.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>
               <h5 className="card-title text-center text-light ">EREN</h5>
                  <p className=" card-text text-center text-white-50   ">Verdigim parayi sonuna kadar hakediyor kocluk icerisinde gercekten ilgilenildigimi hissettim gerek spor ici gerek gunluk hayattan abi-kardes iliskisindeki sorulari olsun cok samimi hissettirdi. Ayrica koclukta kazandigim bilgiler sayesinde kendi programimi yaratip takip edebilecek potansiyele sahip oldugumu dusunuyorum</p>
               </div>
               </div>
         </div>

          
         <div className=" col-lg-6 col-md-6 " data-aos="zoom-in">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <Image src="/images/nodejs5.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>
              
         <div className=" col-lg-6 col-md-6 " data-aos="zoom-in">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <Image src="/images/iyi.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>
              
         <div className=" col-lg-6 col-md-6 " data-aos="zoom-in">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <Image src="/images/iyi.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>
            
         <div className=" col-lg-6 col-md-6 " data-aos="zoom-in">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <Image src="/images/iyi.jpg" alt="profile" className='rounded-circle' width={120} height={120}/>

               <h5 className="card-title text-center text-light ">Ali Kurt</h5>
                  <p className=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>


                <div className="col-lg-6 col-md-6 " data-aos="zoom-in">
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











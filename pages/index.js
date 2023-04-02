import Layout from '@/layout/Layout';
import Head from 'next/head'
import Image from 'next/image'
import Meta from '@/components/Meta'
export default function Home() {
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
       <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" id="myCarousel"
          
          data-bs-touch="false"
          data-bs-interval="false">
            <div class="carousel-item active">
                <img class="d-block w-100 " src="/images/bent.JPG" alt="First slide"/>
                <div class="carousel-caption">
                    <h3 class="text-center  font-weight-bold h2">ESTETİK <hr /></h3>
                    <p class="text-center font-weight-bold h4 ">Vücudunu kontrol et!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/images/ALP06315.JPG" alt="Second slide"/>
                <div class="carousel-caption">
                    <h3 class="text-center h1">GÜÇLÜ!</h3>
                    <p class="text-center">Güç sporcuları gibi performans sergile!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/images/bent.JPG" alt="Third slide"/>
                <div class="carousel-caption">
                    <h3 class="text-center h1">KASLI!</h3>
                    <p class="text-center h3">Atlet gibi görün!</p>
                </div>
            </div>
        </div>
        <button
          className="carousel-control-prev"
          onClick={() => toggleCarousel("prev")}
        >
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          onClick={() => toggleCarousel("next")}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
       
    </div>
               <section className=' text-center py-lg-5  '>
                <div className='container '>
                <div className=' '>
                  <h2 className='h1'>Welcome TO ALİKURT</h2>
                </div>
                  <div className=' h3 w-75 mx-auto p-3  '>
                    <p  className='  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta optio, odit voluptate officia veniam possimus est molestias aliquid unde ipsa magni dignissimos ab commodi explicabo, dolorum sed provident doloribus.</p>
                    <p className=' mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta optio, odit voluptate officia veniam possimus est molestias aliquid unde ipsa magni dignissimos ab commodi explicabo, dolorum sed provident doloribus.</p>
                    <p className='  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta optio, odit voluptate officia veniam possimus est molestias aliquid unde ipsa magni dignissimos ab commodi explicabo, dolorum sed provident doloribus.</p>
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
                  
  <div class="container ">
    <h1 class="h1 text-center mb-5">MEET THE TEAM</h1>


    <div >

      <div class="row g-5" >
         
       
      <div class=" col-lg-6 col-md-6 ">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
               <h5 class="card-title text-center text-light ">Ali Kurt</h5>
                  <p class=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>

          
         <div class=" col-lg-6 col-md-6 ">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
               <h5 class="card-title text-center text-light ">Ali Kurt</h5>
                  <p class=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>
              
         <div class=" col-lg-6 col-md-6 ">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
               <h5 class="card-title text-center text-light ">Ali Kurt</h5>
                  <p class=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>
              
         <div class=" col-lg-6 col-md-6 ">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
               <h5 class="card-title text-center text-light ">Ali Kurt</h5>
                  <p class=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>
            
         <div class=" col-lg-6 col-md-6 ">
<div className='card testimonial'>
               <div className='testimonial-card  card-body'>
               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
               <h5 class="card-title text-center text-light ">Ali Kurt</h5>
                  <p class=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               </div>
         </div>


                <div class="col-lg-6 col-md-6 ">
<div className='card  testimonial'>
               <div className='testimonial-card  card-body'>
               <img src="images/iyi.jpg" alt="profile" className='rounded-circle' />
               <h5 class="card-title text-center text-light ">Ali Kurt</h5>
               <p class=" card-text text-center text-white-50   ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum.</p>
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











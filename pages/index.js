import Layout from '@/layout/Layout';
import Head from 'next/head'
import Image from 'next/image'
import Meta from '@/components/Meta'
import Homecss from "../styles/Home.module.css"

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
      <div className={Homecss.home}>
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
                <img class="d-block w-100" src="/images/bent.JPG" alt="First slide"/>
                <div class="carousel-caption">
                    <h3 class="text-center">ESTETİK</h3>
                    <p class="text-center">Vücudunu kontrol et!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/images/ALP06315.JPG" alt="Second slide"/>
                <div class="carousel-caption">
                    <h3 class="text-center">GÜÇLÜ!</h3>
                    <p class="text-center">Güç sporcuları gibi performans sergile!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/images/bent.JPG" alt="Third slide"/>
                <div class="carousel-caption">
                    <h3 class="text-center">KASLI!</h3>
                    <p class="text-center">Atlet gibi görün!</p>
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
               
    </div>
    </Layout>
  )
}











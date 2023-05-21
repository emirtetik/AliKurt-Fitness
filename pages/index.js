import React,{useEffect} from 'react'
import Layout from '@/layout/Layout';
import Card from "../components/Card"
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
                                              {/* ---------------CARAUSEL---------- */}
      <Carousel fade interval={3000} >

      <Carousel.Item>
        <div className='shadow ' style={{width:"100%", height:"88vh"}}>

        <Image
        rel="preload"
        priority
        id='carousel-img'
          src="/images/image0.jpeg"
          alt="First slide Performans"
         layout='fill' 
          as="image"
          quality={100}
        />
        </div>

        <Carousel.Caption>
        <h3 className="text-center   carousel-head">Performans! <hr /></h3>
        <p className="text-center ">Vücudunu kontrol et.  </p>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='shadow' style={{width:"100%", height:"88vh"}}>

        <Image
        rel="preload"
        priority
        id='carousel-img'
          src="/images/image2.jpeg"
          alt="Second slide"
       layout='fill' 
        as="image"
        quality={100}
        />
</div>
        <Carousel.Caption>
        <h3 className="text-center carousel-head">Estetık!<hr /></h3>
        <p className="text-center">Kas kütleni  arttır. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='shadow' style={{width:"100%", height:"88vh"}}>

        <Image
        rel="preload"
        priority
        id='carousel-img'
          src="/images/image3.jpeg"
          alt="Third slide"
         layout='fill' 
          as="image"
          quality={100}
        />
</div>
        <Carousel.Caption>
        <h3 className="text-center carousel-head">Güç!<hr /></h3>
        <p className="text-center ">Ağır kiloları hareket ettir.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
                                           {/* ---------------TEXT---------- data-aos="zoom-out"*/}
               <section className=' py-lg-5  '>
                <div className='container ' id='welcome'>
                <div className=' mt-5'>
                  <h2 className=' text-center'  >Hos Geldiniz!</h2>
                </div>
                  <div className='  w-100 mx-auto p-3  text-center' >
                    <p  className='  mx-auto'>Koçluk hizmetlerim genel olarak  <b> fitness, beslenme </b> ve <b> direnç </b> antrenmanlarının birçok dalını içermektedir.</p>
                    <ul className=' py-4 d-grid text-start justify-content-center'>
                      <li>	Streetlifting (Barfiks, Dips, Squat , Muscle Up 1 tekrar maksimum)</li>
                      <li>Estetik Fizik</li>
                      <li>	Calisthenics Skills ( Muscle Up , Front Lever, Handstand Push Up vb.)</li>
                      <li>Powerlifting</li>
                    </ul>
                    <p className='  mx-auto'>Amacınız yukarıdakilerden birinde, birkaçında veya tümünde çok iyi olmak olabilir. </p>
                    <h4 className='text-center'> Bunun için burdayım!</h4>
                  </div>
                </div>
                </section> 

                                {/* ---------------TESTİMONİAL---------- */}
                 <Card />
             
    </div>
    </Layout>
  )
}











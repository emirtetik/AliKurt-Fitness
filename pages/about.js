import React,{useEffect} from 'react'
import Layout from '@/layout/Layout'
import AOS from "aos"
import "aos/dist/aos.css"
import Image from 'next/image'

function About() {

  useEffect(() => {
    AOS.init({duration:500});
  },[]);

  return (
    <Layout>
       <section id='bg-section' className=' w-100  bg-gradient  '> 
             
          <div className='row w-100 justify-content-center '>
            <div className='col-md-10 d-lg-flex  align-items-center   items-center '>
              <div className='card mt-5  items-center mx-auto '  >
             
            <Image  src="/images/bg-contact.jpg" alt='profil' width={400} height={600} className=' card-img-top   m-5  '></Image>
            </div>
            <div className=' mt-5 md-w-100 text-light w-100  '
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
     >
                 <h1 className='mx-auto items-center w-75 text-light'> Ali Kurt </h1>
                 <p className='col-md-10 mt-5 text-light mx-auto h5 lh-base'>Merhaba, ben Ali. Metalurji Malzeme mühendisiği öğrencisiyim. Lise dönemimde evde vücut ağırlığı çalışmaları ve spor salonunda yaptığım genel antrenmanlardan sonra “fitness”, üniversite hayatına geçişim ile daha fazla ciddiyet kazandı ve istikrarlı hale geldi. Antrenman yolculuğumun ilk safhalarında sadece demirle haşır neşir bir dönem geçirdikten sonra, zaman geçtikçe oyunda kalabilmek ve daha fazla eğlenmek için bir yandan da vücut ağırlığı hareketlerine yöneldim. Merakım ve performansımı geliştirme arzum, bana öğrenmekten başka şans bırakmadı. Tutku duyduğum bu genel direnç antrenmanlarına ‘’hibrid‘’ bir şekilde çalışabilme isteği  kendimi spor salonu dışında da eğitmeye itti. 


Yıllar boyunca antrenman ve beslenme bilimine daldım. Yurtdışından bazı koçlardan doğrudan, bazılarından dolaylı olarak hizmet aldım, çalıştım. 6 yılı aşkındır spor salonlarında ve masa başında öğrenme yolculuğundayım. Edindiğim ve edinmekte olduğum eğitim ve hizmetleri birçok insana aktardım ve aktarmaya devam ediyorum. Bir atlet ve koç olarak iki serüvende de yolun bir sonu olduğunu düşünmüyorum. Elimden geldiği müddetçe kendimi ve insanları geliştirmek için burdayım.
</p>
               </div>
                
            </div>
                
          </div>


       </section>
      
    </Layout>
  )
}

export default About
import React,{useEffect} from 'react'
import Meta from '@/components/Meta'
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


<Meta 
      title={"Hakkımda"}
      keywords={""}
      description={""}
      
      />

       <section id='bg-section' className=' w-100  mt-5  mb-5 '> 
             
          <div className='row w-100 justify-content-center '>
            <div className='col-md-9 d-lg-flex  align-items-center   items-center '>
              <div className=' mt-md-4  items-center mx-auto '  >
             
            <Image  src="/images/hakkımda-img.jpg" alt='profil' width={342} height={545} className='   '></Image>
            </div>
            <div className='mt-5  md-w-100  w-100  mb-5 '
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
     >
                 <p className='mx-auto  col-md-10 col-sm-8  mb-4'> Merhaba, ben Ali. </p>
                 <p className='col-md-10 col-sm-8  mx-auto    '> Metalurji Malzeme mühendisliği öğrencisiyim. Lise dönemimde evde vücut ağırlığı çalışmaları ve spor salonunda yaptığım genel antrenmanlardan sonra “fitness”, üniversite hayatına geçişim ile daha fazla ciddiyet kazandı ve istikrarlı hale geldi. Antrenman yolculuğumun ilk safhalarında ekipman olarak sadece demirle çalıştığım bir dönem geçirdikten sonra, zaman geçtikçe oyunda kalabilmek ve daha fazla eğlenmek için bir yandan da vücut ağırlıgı hareketlerine yöneldim. Merakım ve performansımı geliştirme arzum, bana öğrenmekten başka şans bırakmadı. Tutku duyduğum bu genel direnç antrenmanlarına  ‘’hibrit‘’  bir şekilde çalışabilme isteği  kendimi spor salonu dışında da eğitmeye itti. 
                   </p>
                   <p className='col-md-10 col-sm-8  mx-auto    ' >Yıllar boyunca antrenman ve beslenme bilimine daldım. Yurtdışından bazı koçlardan doğrudan, bazılarından dolaylı olarak hizmet aldım, çalıştım. 6 yılı aşkındır spor salonlarında ve masa başında öğrenme yolculuğundayım. Edindiğim ve edinmekte olduğum eğitim ve hizmetleri birçok insana aktardım ve aktarmaya devam ediyorum. Bir atlet ve koç olarak iki serüvende de yolun bir sonu olduğunu düşünmüyorum. Elimden geldiği müddetçe kendimi ve insanları geliştirmek için burdayım.
                   </p>
               </div>
                
            </div>
                
          </div>


       </section>
      
    </Layout>
  )
}

export default About
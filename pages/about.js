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
                 <p className='col-md-10 col-sm-8  mx-auto    '> Metalurji Malzeme mühendisligi ögrencisiyim. Lise dönemimde evde vücut agırlıgı çalışmaları ve spor salonunda yaptıgım genel antrenmanlardan sonra <b>“fitness”</b>, üniversite hayatına geçişim ile daha fazla ciddiyet kazandı ve istikrarlı hale geldi. Antrenman yolculugumun ilk safhalarında ekipman olarak sadece demirle çalıştıgım bir dönem geçirdikten sonra, zaman geçtikçe oyunda kalabilmek ve daha fazla eglenmek için bir yandan da vücut agırlıgı hareketlerine yöneldim. Merakım ve performansımı geliştirme arzum, bana ögrenmekten başka şans bırakmadı. Tutku duydugum bu genel direnç antrenmanlarına <b> ‘’hibrit‘’ </b> bir şekilde çalışabilme istegi  kendimi spor salonu dışında da egitmeye itti. 
                   </p>
                   <p className='col-md-10 col-sm-8  mx-auto    ' >Yıllar boyunca antrenman ve beslenme bilimine daldım. Yurtdışından bazı koçlardan dogrudan, bazılarından dolaylı olarak hizmet aldım, çalıştım. 6 yılı aşkındır spor salonlarında ve masa başında ögrenme yolculugundayım. Edindigim ve edinmekte oldugum egitim ve hizmetleri birçok insana aktardım ve aktarmaya devam ediyorum. Bir atlet ve koç olarak iki serüvende de yolun bir sonu oldugunu düşünmüyorum. Elimden geldigi müddetçe kendimi ve insanları geliştirmek için burdayım.
                   </p>
               </div>
                
            </div>
                
          </div>


       </section>
      
    </Layout>
  )
}

export default About
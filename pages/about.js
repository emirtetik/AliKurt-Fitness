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
            <div className='col-md-12 d-lg-flex  align-items-center w-75  items-center '>
              <div className='card mt-5  items-center mx-auto '  >
             
            <Image  src="/images/bg-contact.jpg" alt='profil' width={400} height={600} className=' card-img-top   m-5  '></Image>
            </div>
            <div className=' mt-5 md-w-100 text-light w-100  '
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
     >
                 <h1 className='mx-auto items-center w-75 text-light'> Ali Kurt </h1>
                 <p className='col-md-9 mt-5 text-light mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas similique quam possimus unde sapiente cupiditate modi temporibus porro, numquam natus doloremque nam deserunt, tenetur facere pariatur eos aliquid? Reprehenderit, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis velit porro ea inventore provident at earum, laborum perferendis voluptatem illo beatae explicabo, quod incidunt id corrupti eligendi iste eaque!</p>
               </div>
                
            </div>
                
          </div>









       
           {/* <div className='row w-100 '>

          <div  id='bg-div' className=' w-75  mx-auto d-lg-flex '>
          <div id='bg-img' className=' w-75   mx-auto  ' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >            
              <Image property='' src="/images/work.jpg" alt='profil' width={350} height={450} className=' card-img-top  border border-white m-5   '></Image>
              </div>
              <div className=' mt-5 md-w-100 text-light w-100 ' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-out">
                 <h1 className='mx-auto items-center w-50 text-black'> Ali Kurt </h1>
                 <p className='w-75 md-w-100 mt-5 text-dark mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas similique quam possimus unde sapiente cupiditate modi temporibus porro, numquam natus doloremque nam deserunt, tenetur facere pariatur eos aliquid? Reprehenderit, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis velit porro ea inventore provident at earum, laborum perferendis voluptatem illo beatae explicabo, quod incidunt id corrupti eligendi iste eaque!</p>
               </div>

              

          </div> 

          </div>*/}
       </section>
      
    </Layout>
  )
}

export default About
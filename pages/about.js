import Layout from '@/layout/Layout'
import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <Layout>
       <section id='bg-section' className=' w-100    '> 
           <div className='row w-100 '>

          <div  id='bg-div' className=' w-75  mx-auto d-lg-flex '>
          <div id='bg-img' className=' w-75   mx-auto  ' >            
              <Image property='' src="/images/dips.jpg" alt='profil' width={350} height={450} className=' card-img-top  border border-white m-5   '></Image>
              </div>
              <div className=' mt-5 md-w-100 text-light w-100 '>
                 <h1 className='mx-auto items-center w-50 text-black'> Ali Kurt </h1>
                 <h5 className='mx-auto items-center  w-50 text-dark'>Manager of King Of Weighted GmbH </h5>
                 <p className='w-75 md-w-100 mt-5 text-dark mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas similique quam possimus unde sapiente cupiditate modi temporibus porro, numquam natus doloremque nam deserunt, tenetur facere pariatur eos aliquid? Reprehenderit, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis velit porro ea inventore provident at earum, laborum perferendis voluptatem illo beatae explicabo, quod incidunt id corrupti eligendi iste eaque!</p>
               </div>

              

          </div>

          </div>
       </section>
      
    </Layout>
  )
}

export default About
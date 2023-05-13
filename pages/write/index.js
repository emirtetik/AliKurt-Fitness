import React,{useEffect} from 'react'
import Meta from '@/components/Meta'
import Layout from '@/layout/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router.js'
import {data} from "../../data"
import {MdUpdate} from "react-icons/md"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from 'next/image'

function write({data}) {

  useEffect(() => {
    AOS.init({duration:1000});
  },[]);

  const router = useRouter();

  return (
    <Layout>


<Meta 
      title={"Yazılar"}
      keywords={""}
      description={""}
      
      />

      <div>
      <div id='write' className='w-100  '>
     
     
      <div className=' text-center  ' id='text' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
       <h1 className='text-center h1 text-light fw-bold '>Blogs - Tüm Yazılar</h1>

      <p className='h5 mx-auto text-light w-75 mt-3 lh-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, explicabo fugiat! Sed accusamus vero quis aspernatur excepturi dolorem, expedita iusto nam doloremque maxime eaque. Nesciunt mollitia repudiandae corrupti quasi numquam.</p>
       </div>
      </div>
      </div>

      <section className='mb-5 mt-5'>
                  
                  <div className="container ">
                    <h2 className="h1 text-center mb-5 fw-bold">Tüm Yazılar</h2>
                
                
                    <div >
                
                      <div className="row " >
                         
           {data.map((write) => (
                       
                      <div  className=" col-lg-6 col-md-6  mb-5 " key={write.id}>

                       
      <div className='card '   id='blog-card' data-aos="zoom-in-down">
        <div className='fluid img-thumbnail img-card'>

          <Link href={`write/${write.id}`} className="btn ">
               
           <Image src="/images/work.jpg" alt="blog image" className='card-img-top' width={590} height={350} />
           </Link>

        </div>
        <p className="card-text m-2"><small className="text-muted fw-bold text-dark"><MdUpdate/>{write.date}</small></p>

          <div className=' card-body'>
          <Link href={`write/${write.id}`} className="btn ">

      <h5 id='btn-links' className="card-title   h4 fw-bold text-left">{write.header}</h5>
        </Link>
                                 
                 </div>
                    </div>
                         </div>
                
                ))}  
                          
                         </div>
                
                
                         </div>
                      </div>
                
                                </section>
    </Layout>
  )
}

export default write

export const getStaticProps = async (context) => {
  return{
    props:{
      data,
    }
  }
}
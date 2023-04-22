import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {FaYoutube} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
function Footer() {
  return (
  <footer className="text-center text-lg-start  text-muted" style={{backgroundColor: "rgba(15,24,41,255)"}}>
     
    
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <Link  href="/">
        <Image  src="/images/logom1.png" width={100} height={70} alt='logo'></Image>
      </Link>
              <p className='mt-5'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
               KISAYOLLAR
              </h6>
              <p>
                <Link href="/" className="text-reset">Ana Sayfa</Link>
              </p>
              <p>
                <Link href="/coaching" className="text-reset">Koçluk</Link>
              </p>
              <p>
                <Link href="/write" className="text-reset">Yazılar</Link>
              </p>
              
              <p>
                <Link href="/about" className="text-reset">Hakkımda</Link>
              </p>
              <p>
                <Link href="/contact" className="text-reset">İletişim</Link>
              </p>
              <p>
                <Link href="/faqs" className="text-reset">Sıkça Sorulan Sorular</Link>
              </p>
            </div>
    
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ">iLETİŞİM</h6>
             
             <Link href="https://www.youtube.com/@alieswolf" target="_blank" rel="noreferrer noopener"><p>
                <FaYoutube size={40}/> Youtube

              </p>
              </Link> 
              <Link href="https://www.instagram.com/alies.wolf/" target="_blank" rel="noreferrer noopener">
              <p><AiFillInstagram size={40}/> Instagram</p>
              </Link>
              <Link href="mailto:aliesswolf@gmail.com" target="_blank" rel="noreferrer noopener">
              <p><MdEmail size={40}/> Email </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    
      <div className="text-center p-4">
        © 2023 Ali Kurt
      </div>
    </footer>
  );
};



export default Footer
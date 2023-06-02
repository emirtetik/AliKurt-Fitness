import React, { useState } from "react"
import TermsModal from "../components/TermsModal"
import Link from 'next/link'
import Image from 'next/image';
import {FaYoutube} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {MdEmail} from "react-icons/md"

function Footer() {

  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
  <footer className="text-center text-lg-start  text-muted" style={{backgroundColor: "rgba(15,24,41,255)"}}>
     
    
      <section className="d-flex justify-content-center justify-content-lg-between  border-bottom">
        <div className="container text-center text-md-start mt-5">
          <div className="row ">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto ">
            <Link  href="/">
        <Image priority as="image"  src="/images/logom1.png" width={120} height={60} alt='logo'></Image>
      </Link>
      <div  className='iyzi mt-5 mb-4' >
             <Image src="/images/logo_band_white@1X.png" width={500} height={35} alt='iyzico'/> 
             </div>
            </div>

            <div className=" col-lg-3  ">
            <p className='follow-me '>Beni Takip Edin! </p>
          <div className="contact-icon " >
             <Link href="https://www.youtube.com/@alieswolf" target="_blank" rel="noreferrer noopener"><p>
                <FaYoutube size={24} style={{ color: 'white' }}/>

              </p>
              </Link> 
              <Link href="https://www.instagram.com/alies.wolf/" target="_blank" rel="noreferrer noopener">
              <p><AiFillInstagram size={24} style={{ color: 'white' }}/> </p>
              </Link>
              <Link href="mailto:aliesswolf@gmail.com" target="_blank" rel="noreferrer noopener">
              <p><MdEmail size={24} style={{ color: 'white' }}/>  </p>
              </Link>

              </div>
              
            </div>
            <hr className='hr' />
             
            <div className="col-lg-2   ">
             
            <p>
               <Link href="/sozlesme" className="text-reset">KVKK ve Gizlilik Politikası</Link>
             </p>
             <p>
               <Link href="/condition" className="text-reset">İptal İade Koşulları</Link>
             </p>
           
             
           
           </div>

            <div className="col-lg-1   ">
             
              <p>
                <Link href="/" className="text-reset">Ana Sayfa</Link>
              </p>
              <p>
                <Link href="/coaching" className="text-reset">Koçluk</Link>
              </p>
              <p>
                <Link href="/write" className="text-reset">Yazılar</Link>
              </p>
              
            
            </div>
         
            <div className="col-lg-2  ">
             
            
             <p>
               <Link href="/about" className="text-reset">Hakkımda</Link>
             </p>
             <p>
               <Link href="/contact" className="text-reset">İletişim</Link>
             </p>
             <p>
               <Link href="/faqs" className="text-reset">SSS</Link>

             </p>
             {/* <p>
                <button className="text-reset" onClick={toggleModal}>
                  Hizmet ve Şartlar
                </button>
              </p>
              {showModal && <TermsModal closeModal={toggleModal} />} */}
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
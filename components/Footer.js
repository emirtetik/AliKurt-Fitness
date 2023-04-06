import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
function Footer() {
  return (
  <footer className="text-center text-lg-start  text-muted" style={{backgroundColor: "rgba(15,24,41,255)"}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    
        <div>
          <a href="" className="me-4 ">
          </a>
          <a href="" className="me-4 ">
          </a>
          <a href="" className="me-4 ">
          </a>
          <a href="" className="me-4 ">
          </a>
          <a href="" className="me-4 ">
          </a>
          <a href="" className="me-4 ">
          </a>
        </div>
      </section>
    
      <section className="">
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
                Useful links
              </h6>
              <p>
                <Link href="/" className="text-reset">Home</Link>
              </p>
              <p>
                <Link href="/write" className="text-reset">Write</Link>
              </p>
              <p>
                <Link href="/coaching" className="text-reset">Coaching</Link>
              </p>
              <p>
                <Link href="/faqs" className="text-reset">FAQS</Link>
              </p>
            </div>
    
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ">Contact</h6>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@alikurt.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 546 609 6231</p>
            </div>
          </div>
        </div>
      </section>
    
      <div className="text-center p-4">
        © 2021 Copyright: AliKurt
      </div>
    </footer>
  );
};



export default Footer
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
function Footer() {
  return (
    <footer class="text-center text-lg-start bg-dark text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    
        <div>
          <a href="" class="me-4 ">
          </a>
          <a href="" class="me-4 ">
          </a>
          <a href="" class="me-4 ">
          </a>
          <a href="" class="me-4 ">
          </a>
          <a href="" class="me-4 ">
          </a>
          <a href="" class="me-4 ">
          </a>
        </div>
      </section>
    
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <Link  href="/">
        <Image  src="/images/logom1.png" width={100} height={70} alt='logo'></Image>
      </Link>
              <p className='mt-5'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">Home</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Write</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Coaching</a>
              </p>
              <p>
                <a href="#!" class="text-reset">FAQS</a>
              </p>
            </div>
    
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            </div>
          </div>
        </div>
      </section>
    
      <div class="text-center p-4">
        © 2021 Copyright: AliKurt
      </div>
    </footer>
  );
};



export default Footer
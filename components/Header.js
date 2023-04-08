import React, {useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from "react";
import { useRouter } from 'next/router';

import { RiMenu4Line } from "react-icons/ri";
export default function Header() {

  const router = useRouter();
  const navRef = useRef();

    
  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    
	};
  const closeMenu = () => showNavbar(false)

  return (
    <header>
    <div className="logo" >
      <Link  href="/">
        <Image  src="/images/logom1.png" width={100} height={70} alt='logo'></Image>
      </Link>
      
      </div>
  
      <nav ref={navRef}>
  
      <ul className="menu_list">
  
         <li className="nav">
          <Link  className={router.pathname == "/" ? "active" : ""} onClick={closeMenu}   href="/">
        Anasayfa
        </Link>
        </li>
       
        <li className="nav"><Link  className={router.pathname == "/write" ? "active" : ""} onClick={closeMenu}   href="/write">
         Yazılar
         </Link>
         </li>
  
         <li className="nav"><Link  className={router.pathname == "/coaching" ? "active" : ""} onClick={closeMenu}  href="/coaching">
       Koçluk
         </Link>
        
         </li>
        
         <li className="nav"><Link  className={router.pathname == "/about" ? "active" : ""} onClick={closeMenu}   href="/about">
         Hakkımda
         </Link>
         </li>
        
         <li className="nav"><Link  className={router.pathname == "/contact" ? "active" : ""} onClick={closeMenu}   href="/contact">
            İletişim
         </Link>
         </li>
       </ul>



        {/* <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button> */}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <RiMenu4Line className='hamburger' />
      </button>
    </header>
  
 
  )
}
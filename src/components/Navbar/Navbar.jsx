import React, { useEffect, useState } from 'react'
import './Navber.css'
import { Link } from "react-scroll"
import menu_icon from "../../assets/menu-icon.png"
import { PiStudentBold } from "react-icons/pi";

const Navbar = () => {
  const[sticky, setSticky]=useState(false);

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true): setSticky(false);
      })
  },[]);

  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><PiStudentBold className="icon" />EduCare</h1>
                    </a>
                </div>
        

      <ul className={mobileMenu ? '' :'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link> </li>
            <li> <Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonial</Link> </li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar

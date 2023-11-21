import React, { useState } from "react";
import "./Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
const Navbar = () => {
  const [activeNav,setActiveNav]= useState('a')
  return (
    <>
      <nav className="nav1">
        <a onClick={()=> setActiveNav('#')} className={activeNav ==='#'? 'active':''} id="a1" href="#home">
          <IoHomeOutline />
        </a>
        <a onClick={()=> setActiveNav('about')} className={activeNav ==='about'? 'active':''} id="a1" href="#about">
          <AiOutlineUser />
        </a>
        <a onClick={()=> setActiveNav('experience')} className={activeNav ==='experience'? 'active':''} id="a1" href="#experience">
          <BsJournalBookmarkFill />
        </a>
        <a onClick={()=> setActiveNav('testimonial')} className={activeNav ==='testimonial'? 'active':''} id="a1" href="#testimonial">
          <MdOutlineReviews />
        </a>
        <a onClick={()=> setActiveNav('service')} className={activeNav ==='service'? 'active':''} id="a1" href="#service">
          <RiServiceLine />
        </a>
        <a onClick={()=> setActiveNav('contact')} className={activeNav ==='contact'? 'active':''} id="a1" href="#contact">
          <MdOutlineContactPhone />
        </a>
      </nav>
    </>
  );
};

export default Navbar;

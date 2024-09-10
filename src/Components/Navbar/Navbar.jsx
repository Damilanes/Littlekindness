import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_bar from '../../assets/menu_bar.svg'
import close_menu from '../../assets/close_menu.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("about");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

 
  

  return (
    <div className='navbar'>
        <h1>Olusegun Aromofisomo</h1>
        <img src={menu_bar} onClick={openMenu} height={20} width={20} className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
        <img src={close_menu} onClick={closeMenu} height={20} width={20} className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#book'><p onClick={()=>setMenu("book")}>Books</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
            
        </ul>
        
        {/* <div className="nav-connect">Connect With Me</div> */}
      
    </div>
  )
}

export default Navbar

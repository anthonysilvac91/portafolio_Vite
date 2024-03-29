import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/as_logo.png'
import MobileNav from './MobineNav/MobileNav';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src={logo} alt="logo" />
          
          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>
            <li>
              <a className='menu-item'>Portfolio</a> 
              </li>
            <li>
              <a className='menu-item'>Skills</a> 
              </li>
            <li>
              <a className='menu-item'>Education</a> 
              </li>
            <li>
              <a className='menu-item'> Contact Me</a>
              </li>
            <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span 
              className={"material-symbols-outlined"} 
              style={{fontSize:"1.8rem"}}
              >
                {openMenu ? "X": "="}
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
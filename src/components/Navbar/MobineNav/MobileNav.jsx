import React, { useState } from 'react'
import './MobileNav.css'
import logo from '../../../assets/as_logo.png'

const MobileNav = ({isOpen, toggleMenu}) => {
    
  return (
    <>
        
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
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
            </div>
        </div>
    </>
  )
}

export default MobileNav
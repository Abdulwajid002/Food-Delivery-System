import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
   <div className='footer-content'>
    <div className='footer-content-left'>
        <img src={assets.logo} alt=''/>
        <p> Abdul Wajid && Taha Ahmed </p>
        <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt=''/>
            <img src={assets.twitter_icon} alt=''/>
            <img src={assets.linkedin_icon} alt=''/>
        </div>
    </div>
      <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div className='footer-content-right'>
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+92 332245456</li>
        <li>tomato@food.com</li>
    </ul>
    </div>
   </div>
   <hr/>
   <p className='footer-copyright'> Copyright 2025 @ Tomato.com  <br />  CEO : Abdul Wajid & CFO : Taha Ahmed</p>

    </div>
  )
}

export default Footer
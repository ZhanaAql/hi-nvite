import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='footer' id='about'>
      <div className="container">
        <div className="footer-info">
            <span className="footer-logo" style={{ fontFamily: "Sacramento,  cursive"}}>Hi-nvite</span>
            <div className="sosmed">
                <div className="icon">
                  <a href="https://wa.me/message/2WUZVJ6YA27BK1" target='_blank'><FaWhatsapp className='footer-icon'/></a>
                </div>
                <div className="icon">
                  <a href="" target='_blank'><FaFacebook className='footer-icon'/></a>
                </div>
                <div className="icon">
                  <a href="" target='_blank'><FaInstagram className='footer-icon'/></a>
                </div>
              </div>
          </div>
          <div className="footer-credit">
               <p>Copyright ©2024 All Rights Reserved</p>
          </div>
      </div>
    </div>
  )
}
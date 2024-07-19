import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='footer' id='about'>
           <div className="container">
        <div className="sosmed">
          <div className="wrapper">
            <div className="icon">
              <span className="tooltip">Whatsapp</span>
              <a href="https://wa.me/message/2WUZVJ6YA27BK1" target='_blank'><FaWhatsapp className='footer-icon'/></a>
            </div>
            <div className="icon">
              <span className="tooltip">Github</span>
              <a href="https://github.com/ZhanaAql" target='_blank'><FaGithub className='footer-icon'/></a>
            </div>
            <div className="icon">
              <span className="tooltip">LinkedIn</span>
              <a href="https://www.linkedin.com/in/zulfa-hana-aqliyah-592933298/" target='_blank'><FaLinkedin className='footer-icon'/></a>
            </div>
          </div>
        </div>
        <div className="footer-credit">
          <p>Hi-Nvite ©2024 — All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}
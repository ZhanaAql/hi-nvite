import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");
    function toggleNavbar() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        navbar.classList.add("hide-navbar");
      } else {
        navbar.classList.remove("hide-navbar");
      }
    }
  
    window.addEventListener("load", toggleNavbar);
    window.addEventListener("scroll", toggleNavbar);
  });
  return (
    <header className="container header">
    {/* Logo */}
    <div className="logo">
      <span className="nama-logo" style={{ fontFamily: "Sacramento,  cursive"}}>Hi-nvite</span>
    </div>
  </header>
  )
}
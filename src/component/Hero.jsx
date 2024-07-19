import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const handleNavigation = () => {
      const hero = document.querySelector('.hero');
      if (window.location.hash === '#catalog' || window.location.hash === '#about') {
        hero.classList.add('hidden');
      } else {
        hero.classList.remove('hidden');
      }
    };
  
    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); // Panggil fungsi ini saat komponen dimount
  
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  return (
    <header className="site-header" id='home'>
      <div className='container'>
        <div className="logo">
          <span className="nama-logo" style={{ fontFamily: "Sacramento,  cursive"}}>Hi-nvite</span>
        </div>
        <div className='hero'>
          <div className="hero-title">
            <h1 className='title'>Hi-Nvite</h1>
            <p className='tagline'>Your Dream Invitations, Just a Click Away</p>
          </div>
        </div>
        <div className="hero-navbar">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#catalog">Catalog</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

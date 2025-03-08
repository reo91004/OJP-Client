import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoOjp from '../assets/logo-ojp.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-logo-section'>
          <img src={logoOjp} alt='OJP Logo' className='footer-logo' />
          <div className='footer-tagline'>Math Assistant</div>
        </div>

        <div className='footer-credit'>
          <p>Seungjun Oh, Woogun Jung, Yongsung Park</p>
        </div>

        <div className='footer-bottom'>
          <p>
            Copyright © {currentYear} OJP.com. All Rights Reserved |{' '}
            <Link to='/license' className='footer-link'>
              LICENSE
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

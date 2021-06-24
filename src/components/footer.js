import React from 'react';
import {Link} from 'react-router-dom';

import './footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <Link to='/'>
          <i className='fas fa-home'>Home</i>
        </Link>
        <Link to='/career'>
          <i className='fas fa-microchip'>Career</i>
        </Link>
        <a href='mailto:wparkermackenzie@outlook.com'>
          <i className='fas fa-paper-plane'>Contact</i>
        </a>
      </div>

      <div className='footer-social-media'>
        <a href='https://www.linkedin.com/in/wmackenzie/'
          className='footer-social-media-link'
          target='_blank'
          aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin'/>
        </a>

        <a href='https://www.facebook.com/wpmackenzie'
          className='footer-social-media-link'
          target='_blank'
          aria-label='Facebook'
          >
            <i className='fab fa-facebook-square'/>
        </a>

        <a href='https://twitter.com/IoT_Engineer'
          className='footer-social-media-link'
          target='_blank'
          aria-label='Twitter'
          >
            <i className='fab fa-twitter-square'/>
        </a>

      </div>

    </div> 
  )
}

export {Footer};
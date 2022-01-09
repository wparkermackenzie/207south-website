import React from 'react';
import {Link} from 'react-router-dom';

import './footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <Link to='/'>
          {/* Cannot simply put the word in the same html tag <i> with the 
              font awesome icon as the word will not take the document's 
              font. Instead put each into a <span> tag which does not add a
              break to the document */}
          <span className='fas fa-home'/>
          <span className='footer-links-text'>Home</span>
        </Link>
        <Link to='/career'>
          <span className='fas fa-microchip'/>
          <span className='footer-links-text'>Career</span>
        </Link>
        <a href='mailto:wparkermackenzie@outlook.com'>
          <span className='fas fa-paper-plane'/>
          <span className='footer-links-text'>Contact</span>
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
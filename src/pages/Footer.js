import React from 'react'

import Github from '../assets/images/svg/github-profile.svg';
import FB from '../assets/images/svg/fb.svg';
import LinkedIn from '../assets/images/svg/linkedin-profile.svg';

import './footer.css';

const Footer = () => {
  return (
    <footer>
        <p>Designed & Built by Kiervey Maghanoy</p>
        <div className='connect-me'>
            <a href='https://github.com/kiervz' target='__blank'>
            <img src={Github} alt='github profile'/>
            </a>
            <a href='https://www.linkedin.com/in/kiervey-maghanoy' target='__blank'>
            <img src={LinkedIn} alt='linkedin profile'/>
            </a>
            <a href='https://web.facebook.com/kiervs' target='__blank'>
            <img src={FB} alt='facebook profile'/>
            </a>
        </div>
        <p style={{marginTop: '24px', fontSize: '18px'}}>Work in progress...</p>
    </footer>
  )
}

export default Footer
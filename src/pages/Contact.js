import React from 'react';
import Github from '../assets/images/svg/github-profile.svg';
import FB from '../assets/images/svg/fb.svg';
import LinkedIn from '../assets/images/svg/linkedin-profile.svg';
import './contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contacts">
        <div className='contact-container'>
          <p className='contact-title'>Get In Touch</p>
          <p className='contact-content'>
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a className="button"
            href='mailto:kierveytoledomaghanoy@gmail.com' 
            rel="noopener noreferrer" 
            target='__blank'
          >
            Say Hi!
          </a>
        </div>
      </section>
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
      </footer>
    </>
  )
}

export default Contact  
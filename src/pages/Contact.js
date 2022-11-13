import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contacts">
        <div className='contact-container'>
          <p className='contact-title'>Get In Touch</p>
          <p className='contact-content'>
            I am open for any new opportunities, my inbox is always open. I would love to hear from you whether you have a question or just want to say hi, I'll try my best to get back to you!
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
    </>
  )
}

export default Contact  
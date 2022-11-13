import React from 'react'
import './Main.css'

import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";

const Main = () => {
    return (
        <section className='main'>
            <div className="hero">
                <Fade triggerOnce={true} delay={200} duration={500}>
                    <h4 className="text-secondary mb-1 text-greet">Hello! my name is,</h4>
                </Fade>
                <Fade triggerOnce={true} delay={500} duration={500}>
                    <h1 className="mb-1"><span className='text-gradient'>Kiervey Maghanoy.</span></h1>
                </Fade>
                <TypeAnimation
                    sequence={[
                        'Passionate Web Artisan.',
                        1500,
                        'I do back-end development.',
                        1500,
                        'I do front-end development.',
                        1500,
                    ]}
                    speed={40}
                    style={{ fontSize: '3.5em' }}
                    wrapper="span"
                    className='second-title'
                    repeat={Infinity} 
                />
                <Fade triggerOnce={true} delay={1000} duration={500}>
                    <p className="text-secondary hero-description mt-2">I'm web developer based in Antipolo, Philippines who is enthusiastic about building a web application from front-end to back-end using PHP-Laravel and React JS.</p>
                </Fade>
                <Fade triggerOnce={true} delay={1300} duration={500}>
                    <div className='mt-4'>
                        <a href="#about" className="btn-dark btn-icon">
                            <span className='text-gradient'>More About Me</span>
                        </a>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Main
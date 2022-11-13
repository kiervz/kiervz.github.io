import React from 'react'
import './About.css'
import aboutImage from '../assets/images/shoe.jpg'
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <section id="about" className="about">
            <Slide triggerOnce={true}>
                <h2 className="content-title">
                    <span className='text-gradient'>About </span><span className='text-secondary'>me.</span>
                </h2>
            </Slide>
            <div className="about-container">
                <div className="about-content">
                    <Fade triggerOnce={true} cascade delay={200}>
                        <p>I've been a web developer for two years, and my love for the industry grows stronger as I immerse myself in different/new technologies, particularly web development.</p>
                        <p className='mt-2'>I'm extremely motivated to constantly develop my skills and grow professionally.</p>
                        <p className='mt-2'>All I can say is that I enjoy what I do; It is more than a job to me. It's pretty satisfying to overcome a difficult challenges that comes with programming and It allows me to express myself and my skills by developing applications that many people can benefit.</p>
                        <p className='mt-2'>I'm just a regular guy trying to be the best version of myself, and I look forward to using my determined desire to empower myself and create a bright future.</p>
                    </Fade>
                </div>

                <Fade triggerOnce={true} delay={900}>
                    <img className="about-image" src={aboutImage} alt="about" />
                </Fade>
            </div>
        </section>
    )
}

export default About
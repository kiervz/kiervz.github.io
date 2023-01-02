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
                        <p>As a web developer with two years of experience, I have a deep love for the industry and a passion for what I do. I find great satisfaction in solving complex challenges and creating functional, user-friendly applications. </p>
                        <p className='mt-2'>As a highly motivated individual, I am always looking for ways to improve and grow both personally and professionally. And I believe that a strong work ethic and dedication to personal development are essential for success.</p>
                        <p className='mt-2'>Overall, being a web developer is more than just a job to me. It's a career that I am truly passionate about.</p>
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
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
                        <p>As a web developer with two years of experience under my belt, I can confidently say that my love for the industry continues to grow and evolve as I immerse myself in different technologies. </p>
                        <p className='mt-2'>As a highly motivated individual, I am always looking for ways to improve and grow both personally and professionally. I believe that a strong work ethic and a dedication to personal development are essential for achieving success in any field, and I am committed to constantly developing my skills and knowledge in order to achieve my goals.</p>
                        <p className='mt-2'>
                        As a web developer, I have a deep passion for what I do. I find great satisfaction in solving the complex challenges that come with programming and creating functional and user-friendly applications. It's truly a fulfilling career for me and that allows me to express my skills and creativity on a daily basis.
                        </p>
                        <p className='mt-2'>
                        Overall, being a web developer is more than just a job to me. It's a career that I am truly passionate about and it allows me to make a positive difference in the world.</p>
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
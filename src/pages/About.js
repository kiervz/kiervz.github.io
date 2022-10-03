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
                    <Fade triggerOnce={true} cascade delay={300}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                        <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                    </Fade>
                </div>

                <Slide triggerOnce={true} direction={'right'}>
                    <img className="about-image" src={aboutImage} alt="about" />
                </Slide>
            </div>
        </section>
    )
}

export default About
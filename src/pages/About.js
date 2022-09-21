import React from 'react'
import './About.css'
import aboutImage from '../assets/images/shoe.jpg'

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="content-title">About</h2>
            <div className="about-container">
                <div className="about-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                </div>

                <img className="about-image" src={aboutImage} alt="about" />
            </div>
        </section>
    )
}

export default About
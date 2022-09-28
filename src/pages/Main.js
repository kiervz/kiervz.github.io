import React from 'react'
import './Main.css'

import { FaLongArrowAltRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
    return (
        <section className='main'>
            <div className="hero">
                <h4 className="text-secondary mb-1">Hello! my name is</h4>
                <h1 className="mb-1"><span className='text-gradient'>Kiervey Maghanoy.</span></h1>
                <TypeAnimation
                    sequence={[
                        'Passionate Web Developer.',
                        1500,
                        'I do back-end development.',
                        1500,
                        'I do front-end development.',
                        1500,
                    ]}
                    speed={50}
                    style={{ fontSize: '3.5em' }}
                    wrapper="span"
                    className='second-title'
                    repeat={Infinity} 
                />
                <p className="text-secondary hero-description mb-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sunt inventore. Consequatur, autem hic rerum dolor doloremque nostrum nisi blanditiis a tempora sed unde magni nesciunt adipisci recusandae ea <a href="#a" className="text-success">Expedita!</a></p>
                <div className='mt-4'>
                   <a href="#about" className="btn-dark btn-icon">
                    <span className='text-gradient'>More About Me</span>
                    <FaLongArrowAltRight />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Main
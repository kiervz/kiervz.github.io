import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <section className='main'>
            <div className="hero">
                <h4 className="text-primary mb-1">Hello! my name is</h4>
                <h1 className="mb-1"><span className='text-gradient'>Kiervey Maghanoy.</span></h1>
                <h2 className="text-primary">I am Web Artisan.</h2>
                <p className="text-secondary hero-description mb-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sunt inventore. Consequatur, autem hic rerum dolor doloremque nostrum nisi blanditiis a tempora sed unde magni nesciunt adipisci recusandae ea <a href="#a" className="text-success">Expedita!</a></p>
                <div className='mt-4'>
                   <a href="#about" className="btn-primary">More About Me</a>
                </div>
            </div>
        </section>
    )
}

export default Main
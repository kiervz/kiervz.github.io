import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <section className='main'>
            <div className="hero">
                <p className="text-success mb-1">Hello! my name is</p>
                <h1 className="text-primary mb-1">Kiervey Maghanoy.</h1>
                <h2 className="text-secondary">Lorem ipsum dolor, sit amet.</h2>
                <p className="text-secondary hero-description mb-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sunt inventore. Consequatur, autem hic rerum dolor doloremque nostrum nisi blanditiis a tempora sed unde magni nesciunt adipisci recusandae ea <a href="#a" className="text-success">Expedita!</a></p>
                <div className='mt-4'>
                   <a href="#a" className="btn-primary">Checkout my channel!</a>
                </div>
            </div>
        </section>
    )
}

export default Main
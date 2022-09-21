import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <section className='main'>
            <div className="hero">
                <p className="text-success">Hello! my name is</p>
                <h1 className="text-primary">Kiervey Maghanoy.</h1>
                <h2 className="text-secondary">Lorem ipsum dolor, sit amet.</h2>
                <br />
                <p className="text-secondary hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sunt inventore. Consequatur, autem hic rerum dolor doloremque nostrum nisi blanditiis a tempora sed unde magni nesciunt adipisci recusandae ea <a href="#" className="text-success">Expedita!</a></p>
                <br /><br />
                <a href="#a" className="btn-primary">Checkout my channel!</a>
            </div>
        </section>
    )
}

export default Main
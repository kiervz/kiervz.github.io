import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <div id='content'>
            <section className='main'>
                <div class="hero">
                    <p class="text-success">Hello! my name is</p>
                    <h1 class="text-primary">Kiervey Maghanoy.</h1>
                    <h2 class="text-secondary">Lorem ipsum dolor, sit amet.</h2>
                    <br />
                    <p class="text-secondary hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sunt inventore. Consequatur, autem hic rerum dolor doloremque nostrum nisi blanditiis a tempora sed unde magni nesciunt adipisci recusandae ea <a href="#" class="text-success">Expedita!</a></p>
                    <br /><br />
                    <a href="#a" class="btn-outline-primary">Checkout my channel!</a>
                </div>
            </section>
        </div>
    )
}

export default Main
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import './Navbar.css'

const Navbar = () => {
    const { width } = useWindowDimensions();
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const checkWidth = () => {
        if (width > 768 && isOpenMenu) {
            setIsOpenMenu(false)
            document.querySelector('#content').classList.remove('active-blur')
        }
    }

    const clickMenu = () => {
        setIsOpenMenu(!isOpenMenu)
        
        if (!isOpenMenu) {
            document.body.classList.add('body-overflow')
            document.querySelector('#content').classList.add('active-blur')
        } else {
            document.body.classList.remove('body-overflow')
            document.querySelector('#content').classList.remove('active-blur')
        }
    }

    const clickNavBar = (e) => {
        setIsOpenMenu(false)
        
        document.body.classList.remove('body-overflow')
        document.querySelector('#content').classList.remove('active-blur')
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active-link'))
        document.querySelector(`#${e.target.id}`).classList.add('active-link')
    }

    const scrollActive = () => {
        const scrollY = window.pageYOffset

        document.querySelectorAll('section[id]').forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id')
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('#nav-' + sectionId).classList.add('active-link')
            } else{
                document.querySelector('#nav-' + sectionId).classList.remove('active-link')
            }

            if (scrollY >= 100) {
                document.querySelector('.main-header').classList.add('shadow-header')
            } else {
                document.querySelector('.main-header').classList.remove('shadow-header')
            }
        })
    }

    window.addEventListener('scroll', scrollActive)

    useEffect(() => {
        checkWidth()
        // eslint-disable-next-line
    }, [width])

    return (
        <header className="main-header">
            <nav className="nav container">
                <a href="/" className="button-logo logo">
                    <span className="text-gradient">Kiervey</span>
                </a>

                <ul className={`navbar ${isOpenMenu ? 'open-menu' : 'close-menu'}`}>
                    <li>
                        <a 
                            href="#about" 
                            id='nav-about'
                            className='nav-link'
                            onClick={clickNavBar}>
                                About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#project" 
                            id='nav-project'
                            className='nav-link'
                            onClick={clickNavBar}>
                                Projects
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#skill" 
                            id='nav-skill'
                            className='nav-link'
                            onClick={clickNavBar}>
                                Skills
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            id='nav-contact'
                            className='nav-link'
                            onClick={clickNavBar}>
                                Contact
                        </a>
                    </li>
                </ul>

                <div className={`menu-icon ${isOpenMenu ? 'move' : ''}`} onClick={clickMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar